# Maintaining bckrlab.org

Fork of the [al-folio](https://github.com/alshedivat/al-folio) theme. `README.md`, `CUSTOMIZE.md`, `INSTALL.md` and `FAQ.md` are the theme's own docs; this file covers what is specific to the lab site. Pushing to `master` deploys.

## Publications

`_bibliography/zotero.bib` is generated from the Zotero group **bckrlab**, collection **publications**. Do not edit it by hand.

**Automatically.** `.github/workflows/zotero-sync.yml` runs the export every night against zotero.org, so a change must have synced from the Zotero app first. If the bibliography changed, it commits the new file as bckrlab-bot and deploys the site; the run's summary page shows the diff. To publish a change right away, start it by hand: Actions > Sync publications from Zotero > Run workflow, or `gh workflow run zotero-sync.yml`. If the export or the build fails, nothing is published and GitHub emails whoever last edited the schedule in that workflow file. The workflow needs the repository secret `ZOTERO_API_KEY`, a zotero.org key with read-only access to the group and nothing else.

**By hand**, for example to preview a change before it is synced. With the Zotero app running (Settings > Advanced > allow other applications to communicate with Zotero):

```sh
python3 _scripts/zotero.py
```

Commit the result and push (`git pull` first, the nightly run may have committed). Rules the export relies on:

- **Citation keys are pinned in Zotero** (the item's Citation Key field), lowercase, like `siegl2026latentsubgroups`. Duplicate keys stop the export.
- **Every item needs a year**: the site build fails without one, so the export stops and names the item.
- A tag `project:<name>` puts the paper on that project page. Any other `name:value` tag, such as `themis:fkz-missing`, is internal and never published.
- The Extra field is shown under the entry (for example a poster's venue); `Key: value` lines in it are dropped. Items without a DOI get an HTML button for their URL.

## Hosted PDFs

Files the site serves itself go in the top-level `files/` folder, flat, and appear at `https://bckrlab.org/files/<name>`.

- Papers: `<citationkey>.pdf`; companions `<key>-poster.pdf`, `<key>-slides.pdf`, `<key>-supp.zip`. Project documents: `<project>-<what>.pdf`.
- **A filename is permanent.** GitHub Pages cannot redirect static files.
- For a **PDF button**, set the item's URL field in Zotero to `https://bckrlab.org/files/<key>.pdf` and re-run the export. It warns if the file is missing.
- Everything in `files/` is public and stays in git history: check the publisher's self-archiving policy and keep files small.

## Pages

- `_projects/<year>_<slug>.md` → `/projects/<slug>/`. A project page lists its papers with `{% bibliography -f zotero --group_by none -q @*[projects~=<name>]* %}`.
- `_showcases/<year>_<slug>.md` → `/p/<slug>/`, one page per software package or paper, images in `assets/img/p/<year>_<slug>/`.
- `_pages/` holds the regular pages, see `_pages/README.md`.

## Testing locally

Ruby 4.0 is pinned in `mise.toml`, matching CI. With [mise](https://mise.jdx.dev/) active in your shell (otherwise prefix with `mise exec --`):

```sh
mise install && bundle install   # once
make preview                     # serves http://localhost:4000 with live reload
JEKYLL_ENV=production bundle exec jekyll build -d /tmp/bckrlab-site   # what CI does
```

A `jupyter` command must be on the `PATH` (any Python environment with nbconvert), because the theme converts an embedded notebook during the build. A full build takes about four minutes; the Sass deprecation warnings are theme noise. Do not commit `Gemfile.lock` changes unless you mean to update gems: a lock that does not match Ruby 4.0 is the usual reason a deploy fails.

## Deploying

`.github/workflows/deploy.yml` runs on every push to `master` that touches a watched path (`assets/`, `files/`, `_sass/`, `_scripts/`, `.bib`, `.html`, `.liquid`, `.md`, `.yml`, Gemfiles); anything else waits for the weekly run. A failed deploy leaves the live site untouched, so check the Actions tab after pushing.

## Updating the theme

Upstream al-folio is merged into `master` now and then, so lab-specific notes stay out of the upstream docs. Lab-owned files: this file, `_scripts/`, `files/`, `_bibliography/zotero.bib`, `.github/workflows/zotero-sync.yml` (and the `workflow_call` trigger and checkout `ref` it relies on in `deploy.yml`), the content folders (`_pages/`, `_projects/`, `_showcases/`, `_people/`, `_news/`, `_jobs/`, `_student_*`) and the download buttons in `_layouts/bib.liquid`, which read from `files/`.
