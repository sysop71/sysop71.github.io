---
layout: page
title: Posts
permalink: /posts/
author: Jeff
---
Discover articles on Overwatch strategies, Minecraft creativity, and gaming setups, organized by year. Explore tips, insights, and gear updates for gaming enthusiasts.

{% for post in site.posts %}
  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
      {{ currentdate }}
    {% assign date = currentdate %}
  {% endif %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
