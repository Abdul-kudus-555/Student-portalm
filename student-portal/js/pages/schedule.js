Router.register("schedule", () => {
  const { schedule, events } = AppData;
  const { days, slots, timeRows } = schedule;

  // Build schedule grid
  let gridHTML = `
  <div class="schedule-grid">
    <div class="sch-hdr corner"></div>
    ${days.map(d => `<div class="sch-hdr">${d}</div>`).join("")}`;

  timeRows.forEach(time => {
    // Time label cell
    gridHTML += `<div class="sch-time-cell">${time}</div>`;
    // 5 day cells
    for (let d = 0; d < 5; d++) {
      const match = slots.find(s => s.time === time && s.day === d);
      if (match) {
        gridHTML += `<div class="sch-cell">
          <div class="sch-class-block ${match.cls}">
            <p>${match.code}</p>
            <small>${match.room}</small>
          </div>
        </div>`;
      } else {
        gridHTML += `<div class="sch-cell"></div>`;
      }
    }
  });

  gridHTML += `</div>`;

  const eventList = events.map(e => Components.eventItem(e)).join("");
  const eventsCard = Components.card("All deadlines & events", "", "", eventList);

  return `
  <div class="page-heading">
    <h2>Weekly schedule</h2>
    <p>2025/2026 Semester 2 · April 2026</p>
  </div>
  <div class="schedule-mobile-note">
    Rotate your device or view on a larger screen to see the full timetable.
  </div>
  ${gridHTML}
  ${eventsCard}`;
});
