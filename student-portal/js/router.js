const Router = (() => {
  const pageTitles = {
    dashboard: "Dashboard",
    courses:   "Courses",
    results:   "Results",
    schedule:  "Schedule",
    fees:      "Fees & Payments",
    profile:   "My Profile"
  };

  const pageRenderers = {};

  function register(id, renderFn) {
    pageRenderers[id] = renderFn;
  }

  function navigate(id) {
    const content = document.getElementById("content");

    // Remove existing pages
    content.querySelectorAll(".page").forEach(p => p.remove());

    // Create and render new page
    const div = document.createElement("div");
    div.className = "page active";
    div.id = "page-" + id;
    content.appendChild(div);

    if (pageRenderers[id]) {
      div.innerHTML = pageRenderers[id]();
      // Run any post-render hooks
      if (pageRenderers[id + "_init"]) pageRenderers[id + "_init"](div);
    } else {
      div.innerHTML = `<p style="color:var(--text3)">Page not found.</p>`;
    }

    // Update nav
    document.querySelectorAll(".nav-link").forEach(l => {
      l.classList.toggle("active", l.dataset.page === id);
    });

    // Update title
    document.getElementById("pageTitle").textContent = pageTitles[id] || id;

    // Scroll to top
    content.scrollTop = 0;

    // Store current page
    Router.current = id;
  }

  return { register, navigate, current: "dashboard" };
})();
