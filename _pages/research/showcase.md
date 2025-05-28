---
layout: page
title: Showcase
permalink: /showcase/
description: 
nav: false
nav_order: 3
display_categories: []
horizontal: true
---

<!-- pages/showcase.md -->
<div class="showcases">
{%- if site.enable_showcase_categories and page.display_categories %}
  <!-- Display categorized showcase -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_showcases = site.showcases | where: "category", category -%}
  {%- assign sorted_showcases = categorized_showcases | sort: "importance" %}
  <!-- Generate cards for each showcase -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for showcase in sorted_showcases -%}
      {% include showcase_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for showcase in sorted_showcases -%}
      {% include showcase.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display showcase without categories -->
  {%- assign sorted_showcases = site.showcases | sort: "importance" -%}
  <!-- Generate cards for each showcase -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for showcase in sorted_showcases -%}
      {% include showcase_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for showcase in sorted_showcases -%}
      {% include showcase.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>