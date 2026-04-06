const Components = (() => {

  function gradeClass(grade) {
    const g = grade.replace(/[^A-F]/g, "").toUpperCase();
    if (g === "A") return "gb-a";
    if (g === "B") return "gb-b";
    if (g === "C") return "gb-c";
    return "gb-f";
  }

  function gradeChipClass(grade) {
    return gradeClass(grade).replace("gb-", "gc-");
  }

  function colorFromGrade(grade) {
    const g = grade.replace(/[^A-F]/g, "").toUpperCase();
    if (g === "A") return "var(--sage)";
    if (g === "B") return "var(--prussian3)";
    if (g === "C") return "var(--clay2)";
    return "#c0392b";
  }

  function dotColorFromCourseColor(c) {
    if (c === "sage")     return "var(--sage)";
    if (c === "prussian") return "var(--prussian3)";
    if (c === "clay")     return "var(--clay)";
    return "var(--bone3)";
  }

  function eventTypeClass(type) {
    return { exam:"et-exam", submit:"et-submit", class:"et-class" }[type] || "et-class";
  }
  function eventTypeLabel(type) {
    return { exam:"Exam", submit:"Submission", class:"Class" }[type] || type;
  }

  function statCard(label, value, sub, subClass, fillClass, fillWidth) {
    return `
    <div class="stat-card">
      <div class="stat-label">${label}</div>
      <div class="stat-value">${value}</div>
      <div class="stat-sub ${subClass}">${sub}</div>
      <div class="bar-track"><div class="bar-fill ${fillClass}" style="width:${fillWidth}%"></div></div>
    </div>`;
  }

  function courseItem(course) {
    const dot = dotColorFromCourseColor(course.color);
    const gc  = gradeClass(course.grade);
    return `
    <div class="course-item">
      <div class="course-dot" style="background:${dot}"></div>
      <div class="course-meta">
        <p>${course.name}</p>
        <small>${course.code} · ${course.lecturer} · ${course.schedule}</small>
      </div>
      <span class="grade-badge ${gc}">${course.grade}</span>
    </div>`;
  }

  function eventItem(ev) {
    const tc = eventTypeClass(ev.type);
    const tl = eventTypeLabel(ev.type);
    return `
    <div class="event-item">
      <div class="event-date">
        <div class="event-date-num">${ev.day}</div>
        <div class="event-date-mon">${ev.month}</div>
      </div>
      <div class="event-meta">
        <p>${ev.title}</p>
        <small>${ev.detail}</small>
        <div><span class="event-tag ${tc}">${tl}</span></div>
      </div>
    </div>`;
  }

  function card(headTitle, linkText, linkPage, bodyHTML) {
    const link = linkText
      ? `<a onclick="Router.navigate('${linkPage}')" style="cursor:pointer">${linkText} →</a>`
      : "";
    return `
    <div class="card">
      <div class="card-head">
        <h3>${headTitle}</h3>
        ${link}
      </div>
      ${bodyHTML}
    </div>`;
  }

  function announce(msg, sub, id = "announceBanner") {
    return `
    <div class="announce" id="${id}">
      <div class="announce-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="#a3c46e" stroke-width="1.5"/>
          <path d="M8 7v4M8 5v1" stroke="#a3c46e" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <div>
        <p>${msg}</p>
        <small>${sub}</small>
      </div>
      <button class="announce-close" onclick="document.getElementById('${id}').remove()">×</button>
    </div>`;
  }

  return {
    gradeClass, gradeChipClass, colorFromGrade,
    dotColorFromCourseColor, eventTypeClass, eventTypeLabel,
    statCard, courseItem, eventItem, card, announce
  };
})();
