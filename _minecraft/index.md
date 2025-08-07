---
title: "Minecraft Episode Logs"
layout: base
permalink: /minecraft/
---

🎬 Minecraft Survival Series – Production Logs

Below are internal tracking pages for each episode. Use these to track timestamps, progress, and publishing status.

## 📔 Season 1

{% assign logs = site.minecraft | sort: 'date' %}
<ul>
  {% for log in logs %}
    <li>
      <a href="{{ log.url | relative_url }}">{{ log.title }}</a>
      – <strong>Status:</strong> {{ log.status | default: "Draft" }}
      {% unless log.published %} <em>(Unpublished)</em>{% endunless %}
    </li>
  {% endfor %}
</ul>
