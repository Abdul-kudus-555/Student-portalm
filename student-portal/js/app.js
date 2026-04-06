document.addEventListener("DOMContentLoaded", () => {

  // ── Navigation ──────────────────────────────────────────
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const page = link.dataset.page;
      if (page) {
        Router.navigate(page);
        closeSidebar();
      }
    });
  });

  // ── Hamburger / Sidebar ──────────────────────────────────
  const hamburger = document.getElementById("hamburger");
  const sidebar   = document.getElementById("sidebar");
  const overlay   = document.getElementById("overlay");

  hamburger.addEventListener("click", toggleSidebar);
  overlay.addEventListener("click", closeSidebar);

  function toggleSidebar() {
    const open = sidebar.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    overlay.classList.toggle("visible", open);
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    hamburger.classList.remove("open");
    overlay.classList.remove("visible");
  }
  // Expose so pages can call it
  window.closeSidebar = closeSidebar;

  // ── Notifications ──────────────────────────────────────────
  const notifBtn      = document.getElementById("notifBtn");
  const notifDropdown = document.getElementById("notifDropdown");
  const notifList     = document.getElementById("notifList");
  const notifDot      = document.getElementById("notifDot");
  const clearNotif    = document.getElementById("clearNotif");

  let notifications = [...AppData.notifications];

  function renderNotifications() {
    const unread = notifications.filter(n => !n.read).length;
    notifDot.classList.toggle("hidden", unread === 0);

    notifList.innerHTML = notifications.map(n => `
      <div class="notif-item ${n.read ? "" : "unread"}" data-id="${n.id}">
        <div class="notif-dot-sm ${n.read ? "read" : ""}"></div>
        <div class="notif-text">
          <p>${n.text}</p>
          <small>${n.time}</small>
        </div>
      </div>`).join("");
  }

  notifBtn.addEventListener("click", e => {
    e.stopPropagation();
    notifDropdown.classList.toggle("open");
    renderNotifications();
  });

  clearNotif.addEventListener("click", () => {
    notifications = notifications.map(n => ({ ...n, read: true }));
    renderNotifications();
  });

  document.addEventListener("click", e => {
    if (!notifDropdown.contains(e.target) && e.target !== notifBtn) {
      notifDropdown.classList.remove("open");
    }
  });

  renderNotifications();

  // ── Logout ──────────────────────────────────────────────
  document.getElementById("logoutBtn").addEventListener("click", () => {
    if (confirm("Are you sure you want to sign out?")) {
      document.body.style.opacity = "0";
      document.body.style.transition = "opacity 0.4s ease";
      setTimeout(() => alert("You have been signed out."), 400);
    }
  });

  // ── Profile avatar shortcut ──────────────────────────────
  document.getElementById("profileAvatarBtn").addEventListener("click", () => {
    Router.navigate("profile");
    document.querySelector('[data-page="profile"]').classList.add("active");
    document.querySelectorAll(".nav-link").forEach(l =>
      l.classList.toggle("active", l.dataset.page === "profile")
    );
  });

  // ── Initial page load ────────────────────────────────────
  Router.navigate("dashboard");
});
