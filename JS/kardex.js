if (sessionStorage.getItem("auth") !== "true") {
  window.location.href = "login.html";
}

function toggleMenu() {
  const m = document.getElementById("mobileMenu");
  m.style.display = m.style.display === "flex" ? "none" : "flex";
}
