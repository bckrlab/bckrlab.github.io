#!/usr/bin/env python3
"""Import publications from Zotero into _bibliography/zotero.bib.

Source: Zotero group library "bckrlab", collection "publications".

By default this reads from the local Zotero desktop app (Zotero 7+), so Zotero
must be running with "Allow other applications on this computer to communicate
with Zotero" enabled (Settings > Advanced). To read from zotero.org instead, set
ZOTERO_API_KEY to a key with read access to the (private) group.

    python3 _scripts/zotero.py

What gets cleaned up on the way:
- Local file paths (file), Zotero notes (annote) and access dates (urldate) are
  removed, since the .bib file is published with the website.
- The "Extra" field becomes the note shown below an entry (e.g. a poster's
  venue). Lines of the form "Key: value" are Zotero metadata and are dropped.
- A URL pointing at a file in this repo's f/ folder (https://bckrlab.org/f/<name>.pdf)
  becomes a "PDF" button; other items without a DOI get an "HTML" button that
  links to their URL.
- Conference papers without a proceedings title show their conference name.
- Duplicates (same title and DOI) are dropped with a warning.
- Zotero tags of the form "project:<name>" (e.g. "project:themis") become a
  "projects" field instead of keywords. A project page lists its publications
  with {% bibliography -f zotero --group_by none -q @*[projects~=<name>]* %}.
"""

import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

GROUP_ID = 4942786  # group library "bckrlab"
COLLECTION_KEY = "ER9DDPEP"  # collection "publications"
OUTPUT = Path(__file__).resolve().parent.parent / "_bibliography" / "zotero.bib"

# "type" (e.g. "Doctoral Thesis") is never shown and would overwrite the entry type
# (e.g. phdthesis) in jekyll-scholar, which hides the university of a thesis
DROP_FIELDS = {"file", "annote", "urldate", "type"}
PAGE_SIZE = 100

# "Key: value" lines in Zotero's Extra field (e.g. "_eprint: ...", "version: 1", "tex.address: ...")
METADATA_LINE = re.compile(r"^\s*(\\?_)?[A-Za-z][A-Za-z0-9 .\\_-]*:\s")

# URL of a PDF published from this repo's f/ folder (self-hosted papers and reports)
SITE_PDF = re.compile(r"^https?://bckrlab\.org/f/([^/?#]+\.pdf)$", re.IGNORECASE)
FILES_DIR = Path(__file__).resolve().parent.parent / "f"

# Zotero tags that assign an item to a project page, e.g. "project:themis"
PROJECT_TAG = re.compile(r"^project:([a-z0-9-]+)$")


def fetch_items():
    api_key = os.environ.get("ZOTERO_API_KEY")
    base = "https://api.zotero.org" if api_key else "http://localhost:23119/api"
    headers = {"Zotero-API-Version": "3"}
    if api_key:
        headers["Zotero-API-Key"] = api_key

    items = []
    while True:
        query = urllib.parse.urlencode(
            {"format": "json", "include": "data,bibtex", "limit": PAGE_SIZE, "start": len(items)}
        )
        url = f"{base}/groups/{GROUP_ID}/collections/{COLLECTION_KEY}/items/top?{query}"
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=60) as response:
                page = json.load(response)
        except urllib.error.URLError as error:
            if api_key:
                sys.exit(f"Could not read from the Zotero web API: {error}")
            sys.exit(
                f"Could not reach Zotero at {base} ({error}).\n"
                "Is Zotero running, with 'Allow other applications on this computer to communicate "
                "with Zotero' enabled? Or set ZOTERO_API_KEY to use the web API."
            )
        items += page
        if len(page) < PAGE_SIZE:
            return items


def parse_bibtex(bibtex):
    """Split a single Zotero BibTeX entry into (type, key, [(field, raw value)])."""
    head = re.match(r"\s*@(\w+)\{([^,]*),", bibtex)
    entry_type, key = head.groups()
    fields = []
    pos = head.end()
    field_start = re.compile(r"\s*([\w-]+)\s*=\s*")
    while match := field_start.match(bibtex, pos):
        name, pos = match.group(1).lower(), match.end()
        if bibtex[pos] == "{":
            depth, end = 0, pos
            while True:
                char = bibtex[end]
                if char == "\\":
                    end += 2
                    continue
                depth += {"{": 1, "}": -1}.get(char, 0)
                if depth == 0:
                    break
                end += 1
            value, pos = bibtex[pos : end + 1], end + 1
        else:  # bare number or macro, e.g. month = jun
            bare = re.compile(r"[^,}\s]+").match(bibtex, pos)
            value, pos = bare.group(0), bare.end()
        fields.append((name, value))
        pos = re.compile(r"\s*,?").match(bibtex, pos).end()
    return entry_type, key, fields


def clean_note(value):
    lines = [line for line in value[1:-1].split("\n") if line.strip() and not METADATA_LINE.match(line)]
    return "{" + "\n".join(lines) + "}" if lines else None


def project_tags(item):
    tags = [tag["tag"].strip() for tag in item["data"].get("tags", [])]
    for tag in tags:
        if tag.lower().startswith("project:") and not PROJECT_TAG.match(tag):
            print(f"Ignoring malformed project tag {tag!r} on {item['key']}", file=sys.stderr)
    return {tag: PROJECT_TAG.match(tag).group(1) for tag in tags if PROJECT_TAG.match(tag)}


def clean_keywords(value, drop):
    # Zotero's BibTeX export joins all tags with ", "
    keywords = [keyword for keyword in value[1:-1].split(", ") if keyword not in drop]
    return "{" + ", ".join(keywords) + "}" if keywords else None


def to_entry(item):
    entry_type, key, fields = parse_bibtex(item["bibtex"])
    names = {name for name, _ in fields}
    projects = project_tags(item)
    cleaned = []
    for name, value in fields:
        if name in DROP_FIELDS:
            continue
        if name == "note":
            value = clean_note(value)
            if value is None:
                continue
        if name == "keywords":
            value = clean_keywords(value, projects)
            if value is None:
                continue
        cleaned.append((name, value))
        if name == "url" and "pdf" not in names and "html" not in names:
            site_pdf = SITE_PDF.match(value[1:-1])
            if site_pdf:
                filename = site_pdf.group(1)
                if not (FILES_DIR / filename).is_file():
                    print(f"Missing f/{filename} for {key}: its PDF button will be a dead link", file=sys.stderr)
                cleaned.append(("pdf", "{" + filename + "}"))
            elif "doi" not in names:
                cleaned.append(("html", value))
    conference = item["data"].get("conferenceName")
    if entry_type == "inproceedings" and "booktitle" not in names and conference:
        cleaned.append(("booktitle", "{" + re.sub(r"([&%$#_{}])", r"\\\1", conference) + "}"))
    if projects:
        cleaned.append(("projects", "{" + ", ".join(sorted(set(projects.values()))) + "}"))
    body = ",\n".join(f"  {name} = {value}" for name, value in cleaned)
    return key, f"@{entry_type}{{{key},\n{body}\n}}\n"


def normalize(text):
    return re.sub(r"[^a-z0-9]", "", (text or "").lower())


def main():
    items = fetch_items()
    # newest first; jekyll-scholar groups by year and keeps this order within a year
    items.sort(key=lambda item: (item["meta"].get("parsedDate", ""), item["data"]["title"]), reverse=True)

    seen, entries = {}, []
    for item in items:
        data = item["data"]
        identity = (normalize(data["title"]), (data.get("DOI") or "").lower())
        if identity in seen:
            print(f"Skipping duplicate of {seen[identity]}: {data['title']} ({item['key']})", file=sys.stderr)
            continue
        seen[identity] = item["key"]
        entries.append(to_entry(item))

    keys = [key for key, _ in entries]
    duplicate_keys = sorted({key for key in keys if keys.count(key) > 1})
    if duplicate_keys:
        sys.exit(f"Citation keys are not unique, please fix them in Zotero: {', '.join(duplicate_keys)}")

    header = (
        f"% Generated by _scripts/zotero.py from Zotero (group {GROUP_ID}, collection {COLLECTION_KEY}).\n"
        "% Do not edit by hand: change the items in Zotero and re-run the script.\n\n"
    )
    OUTPUT.write_text(header + "\n".join(entry for _, entry in entries), encoding="utf-8")
    print(f"Wrote {len(entries)} publications to {OUTPUT}")


if __name__ == "__main__":
    main()
