---
layout: page
title: Archive
class: archive
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
<li><time>{{ post.date | date:"%d %b" }}</time><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% if forloop.last %}
</ul>
    {% endif %}
  {% endfor %}
</section>
