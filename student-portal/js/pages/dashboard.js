Router.register("dashboard", () => {
  const { stats, courses, events } = AppData;

  const statsGrid = `
  <div class="four-col">
    ${Components.statCard("Cumulative GPA", stats.gpa, `▲ ${stats.gpaChange} this semester`, "up", "fill-sage", 72)}
    ${Components.statCard("Credits Earned", stats.credits, `of ${stats.maxCredits} required`, "neutral", "fill-prussian", Math.round(stats.credits / stats.maxCredits * 100))}
    ${Components.statCard("Attendance", stats.attendance + "%", "Above 85% threshold", "up", "fill-sage", stats.attendance)}
    ${Components.statCard("Fees Balance", stats.feesBalance, `Due ${stats.feesDue}`, "warn", "fill-clay", 30)}
  </div>`;

  const courseList = courses.map(c => Components.courseItem(c)).join("");
  const coursesCard = Components.card(
    "Current courses", "View all", "courses",
    courseList + `
    <div class="prog-row"><span>Semester progress</span><span>67%</span></div>
    <div class="bar-track"><div class="bar-fill fill-sage" style="width:67%"></div></div>`
  );

  const eventList = events.slice(0, 4).map(e => Components.eventItem(e)).join("");
  const eventsCard = Components.card("Upcoming events", "Schedule", "schedule", eventList);

  return `
    ${Components.announce("Course registration closes April 18", "Ensure all electives are selected before the deadline")}
    ${statsGrid}
    <div class="two-col">
      ${coursesCard}
      ${eventsCard}
    </div>`;
});
