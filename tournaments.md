---
layout: page
title: Tournaments
permalink: /tournaments/
author: Jeff
---
Overwatch2 Tournament schedule for this month.

| Date    | Time | Type | Streaming |
| -------- | ------- |  -------- | ------- |
| February 2, 2025 | 12:00PM - 4:00PM | Practice | |
| January 19, 2025 | 12:15PM - 4:00PM     | Casual | * |
| January 18, 2025 | 5:15PM - 9:00PM     | Casual | * |
| January 11, 2025 | 5:15PM - 9:00PM     | Ranked | * |
| January 10, 2025  | 7:15PM - 11:00PM    | Casual | * |
| January 9, 2025  | 5:00PM - 8:00PM    | Practice | * |

{% assign sorted_tournaments = site.tournaments | sort: "date" | reverse %}

{% assign current_year = "" %}
<ul>
{% for tournament in sorted_tournaments %}
  {% assign tournament_year = tournament.date | date: "%Y" %}

  {% if tournament_year != current_year %}
    <div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>{{ tournament_year }}</code></pre></div></div>
    {% assign current_year = tournament_year %}
  {% endif %}

  <li>
    <a href="{{ tournament.url }}">{{ tournament.title }}</a>
    <span>{{ tournament.date | date: "%B %d, %Y - %I:%M %p" }}</span>
  </li>
{% endfor %}
</ul>
