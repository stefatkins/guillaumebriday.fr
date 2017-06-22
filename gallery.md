---
layout: default
title: "Photos"
permalink: photos
class: "gallery-wrapper"
---
<h1 class="post-title">Photos</h1>

{% assign images = site.data.gallery | reverse %}

<div class="gallery-grid">
  {% for image in images %}
    {% assign image_url = image.name | prepend: 'gallery/' %}

    {% include image.html
                img = image_url
                title = image.title
                caption = image.caption
                class = "grid-item"
                alt = image.alt %}
  {% endfor %}
</div>