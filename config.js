// config.js
// ============================================
// HIER PAS JE ALLEEN DEZE DATUM AAN!
// ============================================
const SITE_CONFIG = {
    lastUpdate: "2 december 2025",  // <-- VERANDER ALLEEN DIT!
    siteName: "BBA Klassenwebsite",
    currentYear: new Date().getFullYear(),
    email: "Jimschel1@outlook.com"
};

// Functie om de configuratie overal toe te passen
function applySiteConfig() {
    // Update alle datums
    document.body.innerHTML = document.body.innerHTML.replace(
        /Laatste update:.*?\d{1,2}\s+\w+\s+\d{4}/g,
        `Laatste update: ${SITE_CONFIG.lastUpdate}`
    );
    
    document.body.innerHTML = document.body.innerHTML.replace(
        /1 November 2025/g,
        SITE_CONFIG.lastUpdate
    );
    
    // Update copyright jaar
    document.body.innerHTML = document.body.innerHTML.replace(
        /2025 BBA Klassenwebsite/g,
        `${SITE_CONFIG.currentYear} ${SITE_CONFIG.siteName}`
    );
    
    // Update e-mail als die ergens staat
    document.body.innerHTML = document.body.innerHTML.replace(
        /Jimschel1@outlook\.com/g,
        SITE_CONFIG.email
    );
}

// Pas toe wanneer de pagina geladen is
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySiteConfig);
} else {
    applySiteConfig();
}
