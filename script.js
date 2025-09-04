(function () {
  const wachtwoord = "bba_2025";
  const maxPogingen = 6;
  let pogingen = 0;
  const dag = new Date().getDay(); // 4 = donderdag

  while (pogingen < maxPogingen) {
    const invoer = prompt("Voer het wachtwoord in voor toegang tot de website:");
    if (invoer === wachtwoord) {
      // ✅ Goed wachtwoord
      if (dag === 4) {
        // Donderdag → waarschuwing tonen
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.85)";
        overlay.style.color = "white";
        overlay.style.display = "flex";
        overlay.style.flexDirection = "column";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = 9999;
        overlay.style.textAlign = "center";
        overlay.style.padding = "20px";
        overlay.style.fontFamily = "Arial, sans-serif";

        const bericht = document.createElement("p");
        bericht.textContent = "Er wordt momenteel gewerkt aan de website. De website kan errors en andere fouten bevatten.";
        bericht.style.fontSize = "1.2em";
        bericht.style.maxWidth = "600px";
        bericht.style.marginBottom = "20px";

        const afsluitBtn = document.createElement("button");
        afsluitBtn.textContent = "Website afsluiten";
        afsluitBtn.style.padding = "10px 20px";
        afsluitBtn.style.margin = "10px";
        afsluitBtn.style.fontSize = "1em";
        afsluitBtn.style.backgroundColor = "#c0392b";
        afsluitBtn.style.color = "white";
        afsluitBtn.style.border = "none";
        afsluitBtn.style.borderRadius = "5px";
        afsluitBtn.onclick = () => {
          window.location.href = "https://www.bing.com";
        };

        const doorgaanBtn = document.createElement("button");
        doorgaanBtn.textContent = "Toch doorgaan (niet aanbevolen)";
        doorgaanBtn.style.padding = "8px 16px";
        doorgaanBtn.style.margin = "10px";
        doorgaanBtn.style.fontSize = "0.9em";
        doorgaanBtn.style.backgroundColor = "#27ae60";
        doorgaanBtn.style.color = "white";
        doorgaanBtn.style.border = "none";
        doorgaanBtn.style.borderRadius = "
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
// Menu open/dicht klappen
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("nav-links").classList.toggle("show");
});
