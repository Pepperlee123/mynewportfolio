const toggle = document.getElementById("themeToggle");

if (toggle) {
  // Check user's previously saved theme choice on load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }

  // Handle click events
  toggle.onclick = () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      toggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  };
}