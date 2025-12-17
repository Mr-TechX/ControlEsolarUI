if (sessionStorage.getItem("auth") !== "true") {
  window.location.href = "login.html";
}
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
const ctx = document.getElementById("aprovechamientoChart").getContext("2d");
// Clear
ctx.clearRect(0, 0, 300, 150);
// Grid
ctx.strokeStyle = "#145233";
ctx.lineWidth = 1;
for (let y = 0; y <= 150; y += 30) {
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(300, y);
  ctx.stroke();
}
for (let x = 0; x <= 300; x += 50) {
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, 150);
  ctx.stroke();
}
// Data line
ctx.strokeStyle = "#4dff88";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(10, 140);
ctx.lineTo(80, 110);
ctx.lineTo(150, 85);
ctx.lineTo(220, 60);
ctx.lineTo(290, 40);
ctx.stroke();
// Percentage labels
ctx.fillStyle = "#4dff88";
ctx.font = "12px Arial";
ctx.fillText("0%", 5, 145);
ctx.fillText("25%", 5, 115);
ctx.fillText("50%", 5, 85);
ctx.fillText("75%", 5, 55);
ctx.fillText("100%", 5, 25);
