---
layout: page
permalink: /for-students/jobs/
title: Jobs
description:
nav: false
nav_order: 1
display_categories: [open]
horizontal: false
---

<!-- > **We are hiring!** 👩‍🎓🧑‍🏫👩‍⚕️🙋‍♂️ We are currently looking for **several student assistants** with an interest in machine learning. -->

> **We are currently not hiring for paid positions.** However, we are always working on exciting projects. If you are interested in getting involved in some cutting-edge machine learning research or getting your hands dirty programming some fun side projects, please <a href="mailto:{{ site.email }}" class="link-button hoverable">
        contact us.
    </a>

<div class="jobs">
    {% for job in site.student_jobs %}
    {% include student_jobs.liquid %}
    {% endfor %}
</div>

<!-- <div style="display: flex; justify-content: center;">
    <a href="mailto:{{ site.email }}" class="link-button hoverable">
        APPLY NOW!
    </a>
</div> -->
