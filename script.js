(function () {
  const wachtwoord = "bba_2025";
  const maxPogingen = 6;
  let pogingen = 0;

  while (pogingen < maxPogingen) {
    const invoer = prompt("Voer het wachtwoord in voor toegang tot de website:");
    if (invoer === wachtwoord) {
      break; // toegang verleend
    } else {
      pogingen++;
      alert("Onjuist wachtwoord. Probeer opnieuw.");
    }
  }

  if (pogingen === maxPogingen) {
    alert("Te veel mislukte pogingen. Toegang geweigerd.");
    window.location.href = "https://www.bing.com";
  }

  // ===== Laatste update op Homepagina =====
  const lastUpdateElement = document.getElementById("lastUpdate");
  if (lastUpdateElement) {
    const lastUpdate = new Date();
    lastUpdateElement.innerText = lastUpdate.toLocaleDateString("nl-NL", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // ===== Verjaardagscheck =====
  const birthdayTodayElement = document.getElementById("birthdayToday");
  if (birthdayTodayElement) {
    const vandaag = new Date();
    const dag = vandaag.getDate();
    const maand = vandaag.getMonth() + 1;

    const birthdays = [
      { name: "Jim", day: 19, month: 6 },
      // Voeg hier meer verjaardagen toe
    ];

    const jarige = birthdays.find(b => b.day === dag && b.month === maand);
    if (jarige) {
      birthdayTodayElement.innerText = `🎉 Vandaag is ${jarige.name} jarig! 🎉`;
      vuurConfetti();
      setTimeout(vuurConfetti, 1500);
      setTimeout(vuurConfetti, 3000);
    }
  }

  // 🎉 Confetti-effect
  function vuurConfetti() {
    const colors = ["#ff6f91", "#ffc75f", "#27ae60", "#2980b9", "#ff9671"];
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.position = "fixed";
      confetti.style.top = Math.random() * 100 + "vh";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.width = "10px";
      confetti.style.height = "10px";
      confetti.style.borderRadius = "50%";
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animation = "fall 3s linear";
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  }

  // Menu open/dicht klappen
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }
})();
