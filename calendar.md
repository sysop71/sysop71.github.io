---
layout: page
title: Calendar
permalink: /calendar/
---

<div class="calendar-container">
  <div class="calendar-grid">
    {% assign months = "January,February,March,April,May,June,July,August,September,October,November,December" | split: ',' %}
    {% for month in months %}
      {% assign month_doc = site.calendars | where: "month", month | first %}
      {% if month_doc %}
        <div class="calendar-item">
          <a href="{{ month_doc.url | relative_url }}">{{ month_doc.title }}</a>
        </div>
      {% else %}
        <div class="calendar-item">{{ month }}</div>
      {% endif %}
    {% endfor %}
  </div>
</div>

<style>
.calendar-container {
  text-align: center;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}
.calendar-item {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}
.calendar-item a {
  text-decoration: none;
  color: #007acc;
}
.calendar-item a:hover {
  text-decoration: underline;
}
</style>

Friday Shenanigans are a free for all, I'm not sure when or if those streams will happen, as it revolves around my work. There are a handful of games that I'll play:

- Doom
- Subnautica
- WoW
- Baldurs Gate 3
