---
layout: page
title: Archive
---

<section class="page-content wc-container">
  {% for post in site.posts %}
    {% capture currentyear %}{{post.date | date: "%Y"}}{% endcapture %}
    {% if currentyear != year %}
      {% unless forloop.first %}</ul>{% endunless %}
      <h5>{{ currentyear }}</h5>
      <ul class="posts">
      {% capture year %}{{currentyear}}{% endcapture %}
    {% endif %}
    <li>
      <time>{{ post.date | date:"%d %b" }}</time>
      <a href="{{ post.url | prepend: site.baseurl }}">
        {{ post.title | strip_html }}
      </a>
    </li>
  {% endfor %}
</section>
