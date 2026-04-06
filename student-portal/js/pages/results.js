Router.register("results", () => {
  const { results } = AppData;
  const cur = results.current;
  const prev = results.previous;

  const gpaStrip = `
  <div class="gpa-strip">
    <div class="gpa-block"><div class="gpa-label">Semester GPA</div><div class="gpa-value">${cur.gpa}</div><div class="gpa-sub">${cur.rank}</div></div>
    <div class="gpa-block"><div class="gpa-label">Cumulative GPA</div><div class="gpa-value">${cur.cumulative}</div><div class="gpa-sub">${cur.semesters}</div></div>
    <div class="gpa-block"><div class="gpa-label">Credits this sem.</div><div class="gpa-value">${cur.semCredits}</div><div class="gpa-sub">of ${cur.semCredits} attempted</div></div>
    <div class="gpa-block"><div class="gpa-label">Total credits</div><div class="gpa-value">${cur.totalCredits}</div><div class="gpa-sub">of 120 required</div></div>
  </div>`;

  const curRows = cur.courses.map(c => `
    <tr>
      <td>${c.name}</td>
      <td>${c.code}</td>
      <td>${c.credits}</td>
      <td>${c.midterm}</td>
      <td>${c.assignment}</td>
      <td>${c.final}</td>
      <td><span class="grade-chip ${Components.gradeChipClass(c.grade)}">${c.grade}</span></td>
    </tr>`).join("");

  const prevRows = prev.courses.map(c => `
    <tr>
      <td>${c.name}</td>
      <td>${c.code}</td>
      <td>${c.credits}</td>
      <td>${c.score}</td>
      <td><span class="grade-chip ${Components.gradeChipClass(c.grade)}">${c.grade}</span></td>
    </tr>`).join("");

  return `
  <div class="page-heading" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
    <div><h2>Academic results</h2><p>View and download your academic transcript</p></div>
    <select class="btn btn-outline" style="padding:8px 14px;font-size:13px">
      <option>2025/2026 Semester 2</option>
      <option>2025/2026 Semester 1</option>
      <option>2024/2025 Semester 2</option>
      <option>2024/2025 Semester 1</option>
    </select>
  </div>
  ${gpaStrip}
  <div class="card" style="margin-bottom:16px">
    <div class="card-head"><h3>Current semester grades</h3></div>
    <div class="results-table-wrap">
      <table class="results-table">
        <thead><tr><th>Course</th><th>Code</th><th>Credits</th><th>Midterm</th><th>Assignment</th><th>Final</th><th>Grade</th></tr></thead>
        <tbody>${curRows}</tbody>
      </table>
    </div>
  </div>
  <div class="card">
    <div class="card-head"><h3>Previous semester — ${prev.semester}</h3></div>
    <div class="results-table-wrap">
      <table class="results-table">
        <thead><tr><th>Course</th><th>Code</th><th>Credits</th><th>Score</th><th>Grade</th></tr></thead>
        <tbody>${prevRows}</tbody>
      </table>
    </div>
  </div>`;
});
