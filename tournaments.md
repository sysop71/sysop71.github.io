---
layout: page
title: Tournaments
permalink: /tournaments/
author: Jeff
---
{% for tournament in site.Tournaments %}
  {% assign currentdate = tournament.date | date: "%Y" %}
  {% if currentdate != date %}
      {{ currentdate }}
    {% assign date = currentdate %}
  {% endif %}
  <li><a href="{{ tournament.url }}">{{ tournament.title }}</a></li>
{% endfor %}
