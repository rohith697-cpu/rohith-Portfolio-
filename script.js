
const $ = (s) => document.querySelector(s);

function toggleMenu() {
  $("#menu").classList.toggle("show");
}

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard: " + text);
}

function openMail() {
  const name = $("#name").value.trim();
  const from = $("#from").value.trim();
  const msg = $("#msg").value.trim();
  const subject = encodeURIComponent("Portfolio contact from " + name);
  const body = encodeURIComponent(msg + "\n\nFrom: " + name + " <" + from + ">");
  window.location.href = `mailto:rohithreddy5134@gmail.com?subject=${subject}&body=${body}`;
}

// Theme toggle (persisted)
(function theme() {
  const key = "theme-preference";
  const saved = localStorage.getItem(key);
  if (saved === "light") document.body.classList.add("light");
  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem(key, document.body.classList.contains("light") ? "light" : "dark");
  });
})();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Year
$("#year").textContent = new Date().getFullYear();
