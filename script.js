// Check of het vandaag donderdag is
const vandaag = new Date();
const dagNummer = vandaag.getDay(); // 0 = zondag, 4 = donderdag
const vandaag = new Date();
if (vandaag.getDay() === 4) { // 4 = donderdag
  window.location.href = "onderhoud.html";
}

if (dagNummer === 4) {
  // Doorsturen naar onderhoudspagina
  window.location.href = "onderhoud.html";
}
// ===== Laatste update op Homepagina =====
const lastUpdateElement = document.getElementById("lastUpdate");
if (lastUpdateElement) {
  const lastUpdate = new Date();
  lastUpdateElement.innerText =
    lastUpdate.toLocaleDateString("nl-NL", {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
}

// ===== Verjaardagscheck =====
const birthdayTodayElement = document.getElementById("birthdayToday");
if (birthdayTodayElement) {
  const birthdays = [
    { name: "Jim", day: 19, month: 06 },
    
// Check of het vandaag donderdag is
const vandaag = new Date();
const dagNummer = vandaag.getDay(); // 0 = zondag, 4 = donderdag

if (dagNummer === 4) {
  const melding = "Er wordt momenteel hard gewerkt aan de wekelijkse update.\n" +
                  "Als de webpagina raar doet, komt het omdat we met een nieuwe versie bezig zijn.\n" +
                  "Vanaf morgen kunt u sowieso weer op de website.";
  
  alert(melding);

  // Proberen het tabblad te sluiten (werkt alleen als het door script is geopend)
  window.close();

  // Als sluiten niet lukt, doorsturen naar een onderhoudspagina
  // window.location.href = "onderhoud.html";
}
// 🎉 Confetti-effect bij verjaardag deze week
const isVerjaardagDezeWeek = true; // Later vervangen met echte check

function vuurConfetti() {
  const colors = ["#ff6f91", "#ffc75f", "#27ae60", "#2980b9", "#ff9671"];
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

// 🔁 Vuur confetti 3x als er een jarige is
if (isVerjaardagDezeWeek) {
  vuurConfetti();
  setTimeout(vuurConfetti, 1500);
  setTimeout(vuurConfetti, 3000);
}
