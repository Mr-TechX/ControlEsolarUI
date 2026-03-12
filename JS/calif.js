if (sessionStorage.getItem("auth") !== "true") {
  window.location.href = "login.html";
}

alert("Lamentamos la demora de subida de calificaciones unidad uno, tuvimos dificultades tecnicas, agradecemos su comprension, las calificaciones unidad 2, seran publicadas muy pronto. | Coordinacion ISC");

function toggleMenu() {
  const m = document.getElementById("mobileMenu");
  m.style.display = m.style.display === "flex" ? "none" : "flex";
}
