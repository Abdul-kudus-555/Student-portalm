Router.register("profile", () => {
  const s = AppData.student;
  const st = AppData.stats;

  return `
  <div class="profile-hero">
    <div class="avatar sage lg">${s.initials[0]}</div>
    <div class="profile-hero-info">
      <div class="profile-name">${s.name}</div>
      <div class="profile-sub">${s.programme} · Level ${s.level} · ID: ${s.id}</div>
      <div class="profile-tags">
        <span class="pill">Active student</span>
        <span class="pill">${s.semester}</span>
        <span class="pill">Full-time</span>
        <span class="pill">GPA ${st.gpa}</span>
      </div>
    </div>
  </div>

  <div class="two-col">
    <div class="card">
      <div class="card-head"><h3>Personal information</h3></div>
      <div class="info-group"><div class="info-label">Full name</div><div class="info-value">${s.name}</div></div>
      <div class="info-group"><div class="info-label">Date of birth</div><div class="info-value">${s.dob}</div></div>
      <div class="info-group"><div class="info-label">Gender</div><div class="info-value">${s.gender}</div></div>
      <div class="info-group"><div class="info-label">Nationality</div><div class="info-value">${s.nationality}</div></div>
      <div class="info-group"><div class="info-label">Phone</div><div class="info-value">${s.phone}</div></div>
      <div class="info-group"><div class="info-label">Email</div><div class="info-value">${s.email}</div></div>
      <button class="btn btn-primary" style="margin-top:4px" onclick="alert('Edit profile coming soon!')">Edit profile</button>
    </div>

    <div class="card">
      <div class="card-head"><h3>Academic information</h3></div>
      <div class="info-group"><div class="info-label">Student ID</div><div class="info-value">${s.id}</div></div>
      <div class="info-group"><div class="info-label">Programme</div><div class="info-value">${s.programme}</div></div>
      <div class="info-group"><div class="info-label">Department</div><div class="info-value">${s.department}</div></div>
      <div class="info-group"><div class="info-label">Level</div><div class="info-value">${s.level} (${s.year})</div></div>
      <div class="info-group"><div class="info-label">Academic year</div><div class="info-value">2025/2026</div></div>
      <div class="info-group"><div class="info-label">Enrollment status</div><div class="info-value good">${s.status}</div></div>
      <div class="info-group"><div class="info-label">Expected graduation</div><div class="info-value">${s.graduation}</div></div>
    </div>
  </div>`;
});
