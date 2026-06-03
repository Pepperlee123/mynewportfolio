document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("themeToggle");

  if (!toggle) return;

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
    console.log(document.body.classList);
  }
  

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

});