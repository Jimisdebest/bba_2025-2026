document.addEventListener("DOMContentLoaded", function () {
  const wachtwoord = "bba_2025";

  if (localStorage.getItem("toegangBBA") !== "ok") {
    const overlay = document.createElement("div");
    overlay.id = "wachtwoord-overlay";
    overlay.innerHTML = `
      <div id="wachtwoord-container">
        <h2>Toegang vereist</h2>
        <p>Voer het wachtwoord in voor toegang tot de klassenwebsite:</p>
        <input type="password" id="wachtwoord-input" placeholder="Wachtwoord">
        <button id="wachtwoord-knop">Doorgaan</button>
        <p id="wachtwoord-fout" style="color:red; display:none;">Onjuist wachtwoord</p>
      </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById("wachtwoord-knop").addEventListener("click", function () {
      const invoer = document.getElementById("wachtwoord-input").value;
      if (invoer === wachtwoord) {
        localStorage.setItem("toegangBBA", "ok");
        document.getElementById("wachtwoord-overlay").remove();
      } else {
        document.getElementById("wachtwoord-fout").style.display = "block";
        setTimeout(() => {
          window.location.href = "https://jimisdebest.github.io/rust";
        }, 2000);
      }
    });
  }
});
