// HAMBURGER MENU FUNCTIONALITEIT
document.addEventListener('DOMContentLoaded', function() {
    // Selecteer de elementen
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    const overlay = document.getElementById('overlay');
    
    // Debug: log of we de elementen vinden
    console.log('Hamburger element:', hamburger);
    console.log('Nav element:', nav);
    console.log('Overlay element:', overlay);
    
    // Als de hamburger bestaat, voeg event listener toe
    if (hamburger && nav && overlay) {
        // Hamburger klik
        hamburger.addEventListener('click', function(event) {
            console.log('Hamburger geklikt!');
            
            // Toggle de 'active' class op alle elementen
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Voorkom dat de klik doorbubbelt
            event.stopPropagation();
        });
        
        // Overlay klik (sluit menu)
        overlay.addEventListener('click', function() {
            console.log('Overlay geklikt - menu sluiten');
            
            // Verwijder 'active' class van alle elementen
            nav.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.classList.remove('active');
        });
        
        // Sluit menu als er op een nav-link wordt geklikt (optioneel)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                overlay.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Sluit menu bij ESC-toets
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                nav.classList.remove('active');
                overlay.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
        
    } else {
        console.error('Kon een of meer elementen niet vinden voor hamburger menu!');
    }
});

// VERJAARDAGEN & CONFETTI CODE
(function () {
  const birthdayTodayElement = document.getElementById("birthdayToday");

  const birthdays = [
    { name: "Ryan", day: 4, month: 1 },
    { name: "Aiden", day: 8, month: 1 },
    { name: "Thijs", day: 20, month: 1 },
    { name: "Feliciyano", day: 2, month: 2 },
    { name: "Joe", day: 8, month: 2 },
    { name: "Timo", day: 12, month: 2 },
    { name: "Joep", day: 16, month: 2 },
    { name: "Luka", day: 17, month: 2 },
    { name: "Roos", day: 2, month: 3 },
    { name: "Levien", day: 6, month: 3 },
    { name: "Parsa", day: 27, month: 3 },
    { name: "Lila", day: 31, month: 3 },
    { name: "Ona", day: 27, month: 4 },
    { name: "Lily", day: 23, month: 5 },
    { name: "Jim", day: 19, month: 6 },
    { name: "Nova", day: 21, month: 6 },
    { name: "Julie", day: 12, month: 7 },
    { name: "Hadewijch", day: 15, month: 7 },
    { name: "Cherelle", day: 17, month: 7 },
    { name: "Aloys", day: 18, month: 8 },
    { name: "Maia", day: 9, month: 10 },
    { name: "Hanna", day: 27, month: 10 },
    { name: "Oscar", day: 19, month: 11 },
    { name: "Tycho", day: 22, month: 11 },
    { name: "Feline", day: 30, month: 11 }
  ];

  const vandaag = new Date();
  const dag = vandaag.getDate();
  const maand = vandaag.getMonth() + 1;

  const jarige = birthdays.find(b => b.day === dag && b.month === maand);
  if (jarige && birthdayTodayElement) {
    birthdayTodayElement.innerText = `🎉 Vandaag is ${jarige.name} jarig! 🎉`;
    vuurConfetti();
    setTimeout(vuurConfetti, 1500);
    setTimeout(vuurConfetti, 3000);
  }

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
})();
