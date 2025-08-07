---
title: "Minecraft Episode Logs"
layout: page
permalink: /minecraft/
---

# 🎬 Minecraft Survival Series – Production Logs

Below are internal tracking pages for each episode. Use these to track timestamps, progress, and publishing status.

---

{% assign logs = site.minecraft | where: "layout", "log" | sort: "episode" %}
{% assign seasons = logs | map: "season" | uniq | sort %}

{% for season in seasons %}
## 📔 Season {{ season }}

<ul>
  {% assign season_logs = logs | where: "season", season | sort: "episode" %}
  {% for log in season_logs %}
    <li>
      <strong>Episode {{ log.episode }}:</strong>
      <a href="{{ log.url | relative_url }}">{{ log.title }}</a>
      – <strong>Status:</strong> {{ log.status | default: "Draft" }}
      {% unless log.published %} <em>(Unpublished)</em>{% endunless %}
    </li>
  {% endfor %}
</ul>

{% endfor %}
