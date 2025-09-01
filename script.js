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
    { name: "Tycho", day: 3, month: 9 },
    { name: "Jim", day: 14, month: 10 },
    { name: "Emma", day: 1, month: 9 },
    { name: "Ravi", day: 22, month: 11 },
    { name: "Lotte", day: 5, month: 5 }
