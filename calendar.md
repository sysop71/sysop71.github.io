---
layout: page
title: Calendar
permalink: /calendar/
---

<div class="calendar-container">
  {% assign month_numbers = "January,February,March,April,May,June,July,August,September,October,November,December" | split: ',' %}
  {% assign years = site.calendars | map: 'year' | uniq | sort %}

  {% for year in years %}
    <h2>{{ year }}</h2>
    <div class="calendar-grid">
      {% for month in month_numbers %}
        {% assign month_doc = site.calendars | where: "month", month | where: "year", year | first %}
        {% if month_doc %}
          <div class="calendar-item">
            <a href="{{ month_doc.url | relative_url }}">{{ month_doc.title }}</a>
          </div>
        {% else %}
          <div class="calendar-item">{{ month }}</div>
        {% endif %}
      {% endfor %}
    </div>
  {% endfor %}
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

---

Friday Shenanigans are a free for all, I'm not sure when or if those streams will happen, as it revolves around my work. There are a handful of games that I'll play:

- Doom
- Subnautica
- WoW
- Baldurs Gate 3
