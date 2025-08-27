// ==============================
// DARK/LIGHT MODE TOGGLE
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("modeToggle");
  const toggleIcon = document.getElementById("toggleIcon");

  // Check if both elements exist
  if (!toggleBtn || !toggleIcon) {
    console.warn("Toggle button or icon not found in DOM.");
    return;
  }

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleIcon.classList.replace("fa-toggle-off", "fa-toggle-on");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");

    toggleIcon.classList.toggle("fa-toggle-off", !isDark);
    toggleIcon.classList.toggle("fa-toggle-on", isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

// ==============================
// MOBILE MENU TOGGLE
// ==============================
const menuToggle = document.getElementById("menuToggle");
const closeBtn = document.getElementById("closeBtn");
const navList = document.getElementById("navList");

// Open menu
menuToggle.addEventListener("click", () => {
  navList.classList.add("show");
});

// Close menu
closeBtn.addEventListener("click", () => {
  navList.classList.remove("show");
});

// ==============================
// LOGIN MENU TOGGLE
// ==============================
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginToggleBtn");
  const authDropdown = document.getElementById("authDropdown");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");

  let isOpen = false;

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    isOpen = !isOpen;
    authDropdown.style.display = isOpen ? "block" : "none";
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
  });

  showRegister.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
  });

  showLogin.addEventListener("click", function (e) {
    e.preventDefault();
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
  });

  // Optional: close when clicking outside
  document.addEventListener("click", function (e) {
    if (!authDropdown.contains(e.target) && e.target !== loginBtn) {
      authDropdown.style.display = "none";
      isOpen = false;
    }
  });
});

// ==============================
// SEARCH BAR TOGGLE
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("searchIcon");
  const searchBar = document.getElementById("searchBar");

  if (searchIcon && searchBar) {
    searchIcon.addEventListener("click", (e) => {
      e.preventDefault();
      searchBar.classList.toggle("show");

      if (searchBar.classList.contains("show")) {
        searchBar.focus();
      }
    });

    // Close search when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !searchBar.contains(e.target) &&
        !searchIcon.contains(e.target)
      ) {
        searchBar.classList.remove("show");
      }
    });
  }
});

