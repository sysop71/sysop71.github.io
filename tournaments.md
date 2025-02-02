---
layout: page
title: Tournaments
permalink: /tournaments/
author: Jeff
show_title: false
---
Overwatch2 Tournament schedule for this month.

| Date    | Time | Type | Streaming |
| -------- | ------- |  -------- | ------- |
| February 2, 2025 | 12:00PM - 4:00PM | Practice | * |

{% assign sorted_tournaments = site.tournaments | sort: "date" | reverse %}

{% assign current_year = "" %}
{% for tournament in sorted_tournaments %}
  {% assign tournament_year = tournament.date | date: "%Y" %}

  {% if tournament_year != current_year %}
    {{ tournament_year }}
    {% assign current_year = tournament_year %}
  {% endif %}

  <li>
    <a href="{{ tournament.url }}">{{ tournament.title }}</a>
  </li>
{% endfor %}
