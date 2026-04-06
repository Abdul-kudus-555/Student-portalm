Router.register("courses", () => {
  const { courses } = AppData;

  const iconClsMap = { sage:"ci-sage", prussian:"ci-prussian", clay:"ci-clay", bone:"ci-bone" };

  const cards = courses.map(c => {
    const gc      = Components.gradeClass(c.grade);
    const iconCls = iconClsMap[c.color] || "ci-sage";
    return `
    <div class="course-card">
      <div class="course-card-inner">
        <div class="course-icon ${iconCls}">${c.dept}</div>
        <div class="course-body">
          <div class="course-title-row">
            <div>
              <div class="course-name">${c.name}</div>
              <div class="course-code">${c.code} · ${c.credits} credit hours</div>
            </div>
            <span class="grade-badge ${gc}" style="font-size:12px;padding:4px 12px">Grade: ${c.grade}</span>
          </div>
          <div class="course-details">
            <span>${c.lecturer}</span>
            <span>${c.schedule}</span>
            <span>${c.room}</span>
          </div>
          <div class="prog-row"><span>Progress</span><span>${c.progress}%</span></div>
          <div class="bar-track"><div class="bar-fill fill-${c.color === 'bone' ? 'bone3' : c.color}" style="width:${c.progress}%"></div></div>
        </div>
      </div>
    </div>`;
  }).join("");

  return `
  <div class="page-heading">
    <h2>Enrolled courses</h2>
    <p>2025/2026 Academic Year · Semester 2 · ${courses.length} courses · ${courses.reduce((s,c)=>s+c.credits,0)} credit hours</p>
  </div>
  ${cards}`;
});
