---
layout: page
title: Calendar
permalink: /calendar/
show_title: false
---

<div class="calendar-container">
  {% assign months = "January,February,March,April,May,June,July,August,September,October,November,December" | split: ',' %}
  {% assign years = site.calendars | map: 'year' | uniq | sort %}

  {% for year in years %}
    <h2>{{ year }}</h2>
    <div class="calendar-grid">
      {% for month in months %}
        {% assign month_doc = site.calendars | where: "month", month | where: "year", year | first %}
        <div class="calendar-month">
          <a href="{{ month_doc.url | relative_url }}">
            <div class="month-title">{{ month }}</div>
            <div class="month-year">{{ year }}</div>
          </a>
        </div>
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
  grid-gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
.calendar-month {
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 10px;
  text-align: center;
  transition: all 0.3s ease;
}
.calendar-month:hover {
  background-color: #007acc;
  color: white;
}
.month-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
}
.month-year {
  font-size: 1rem;
  color: #888;
}
</style>

---

Friday Shenanigans are a free for all, I'm not sure when or if those streams will happen, as it revolves around my work. There are a handful of games that I'll play:

- Doom
- Subnautica
- WoW
- Baldurs Gate 3
