// Translations
var T = {
  "nav.about":      { de: "Über das Haus",   en: "About the House" },
  "nav.apartment":  { de: "Gäste-Apartment", en: "Guest Apartment" },
  "nav.excursions": { de: "Ausflüge",        en: "Excursions" },
  "nav.contact":    { de: "Kontakt",          en: "Contact" },
  "hero.subtitle":  { de: "Ein liebevoll renoviertes Fachwerkhaus im Herzen von Rifferswil", en: "A lovingly renovated timber-frame house in the heart of Rifferswil" },
  "hero.cta":       { de: "Apartment entdecken", en: "Discover the Apartment" },
  "about.title":    { de: "Über das Haus",    en: "About the House" },
  "about.p1":       { de: "The Rose ist ein charmantes Fachwerkhaus, das mit viel Liebe zum Detail im englischen Stil renoviert wurde. Das historische Gebäude verbindet traditionelle Schweizer Architektur mit der Eleganz eines englischen Landhauses.", en: "The Rose is a charming timber-frame house that has been lovingly renovated in the English style with great attention to detail. The historic building combines traditional Swiss architecture with the elegance of an English country house." },
  "about.p2":       { de: "Gelegen im malerischen Dorf Rifferswil im Kanton Zürich, bietet The Rose einen atemberaubenden Blick über die Berge und den Zugersee. Die ruhige Lage inmitten der Natur lädt zum Entspannen und Geniessen ein.", en: "Located in the picturesque village of Rifferswil in the canton of Zurich, The Rose offers a breathtaking view over the mountains and Lake Zug. The tranquil setting amidst nature invites you to relax and enjoy." },
  "about.p3":       { de: "Jeder Raum erzählt seine eigene Geschichte – von den originalen Holzbalken bis zu den sorgfältig ausgewählten Einrichtungsgegenständen, die dem Haus seinen einzigartigen Charakter verleihen.", en: "Every room tells its own story – from the original wooden beams to the carefully selected furnishings that give the house its unique character." },
  "apartment.title":         { de: "Gäste-Apartment", en: "Guest Apartment" },
  "apartment.intro":         { de: "Unser gemütliches Gäste-Apartment bietet Ihnen einen stilvollen Rückzugsort – ob für einen erholsamen Kurzurlaub oder einen inspirierenden Workshop.", en: "Our cosy guest apartment offers you a stylish retreat – whether for a relaxing short break or an inspiring workshop." },
  "apartment.stay.title":    { de: "Übernachten", en: "Overnight Stay" },
  "apartment.stay.desc":     { de: "Geniessen Sie die Ruhe des Dorfes und wachen Sie mit Blick auf die Berge auf. Das Apartment ist komplett ausgestattet mit Küche, Bad und gemütlichem Wohn-/Schlafbereich.", en: "Enjoy the tranquility of the village and wake up to mountain views. The apartment is fully equipped with kitchen, bathroom, and a cosy living/sleeping area." },
  "apartment.workshop.title":{ de: "Workshops", en: "Workshops" },
  "apartment.workshop.desc": { de: "Der lichtdurchflutete Raum eignet sich hervorragend für kreative Workshops, kleine Seminare oder Retreats. Fragen Sie uns nach verfügbaren Terminen.", en: "The light-filled space is perfect for creative workshops, small seminars, or retreats. Ask us about available dates." },
  "excursions.title":        { de: "Ausflüge & Tipps", en: "Excursions & Tips" },
  "excursions.intro":        { de: "Rifferswil und die Umgebung bieten zahlreiche Möglichkeiten für unvergessliche Ausflüge.", en: "Rifferswil and its surroundings offer numerous opportunities for unforgettable excursions." },
  "contact.title":           { de: "Kontakt & Buchung", en: "Contact & Booking" },
  "contact.intro":           { de: "Wir freuen uns auf Ihre Anfrage! Kontaktieren Sie uns für Reservierungen oder Fragen.", en: "We look forward to your enquiry! Contact us for reservations or questions." },
  "contact.email":           { de: "E-Mail schreiben", en: "Send an Email" },
  "footer.rights":           { de: "Alle Rechte vorbehalten.", en: "All rights reserved." }
};

var features = {
  de: ["Voll ausgestattete Küche", "Eigenes Badezimmer", "Kostenloses WLAN", "Bergblick", "Ruhige Lage", "Parkplatz"],
  en: ["Fully equipped kitchen", "Private bathroom", "Free Wi-Fi", "Mountain views", "Quiet location", "Parking"]
};

var excursions = [
  { title: { de: "Wandern am Albis", en: "Hiking on the Albis" }, desc: { de: "Direkt vor der Haustür beginnen wunderschöne Wanderwege entlang der Albiskette mit Panoramablick auf die Alpen.", en: "Beautiful hiking trails along the Albis ridge with panoramic views of the Alps start right at the doorstep." } },
  { title: { de: "Türlersee", en: "Lake Türler" }, desc: { de: "5 km von Rifferswil befindet sich der Türlersee, ein geschütztes Landschafts- und Naturdenkmal. Perfekt zum Baden und wandern.", en: "5 km from Rifferswil is Lake Türler, a protected landscape and natural monument. Perfect for swimming and hiking." } },
  { title: { de: "Zürich", en: "Zurich" }, desc: { de: "Die Stadt Zürich mit ihrem kulturellen Angebot, Einkaufsmöglichkeiten und der historischen Altstadt ist in 30 Minuten erreichbar.", en: "The city of Zurich with its cultural offerings, shopping, and historic old town is reachable in 30 minutes." } },
  { title: { de: "Seleger Moor", en: "Seleger Moor" }, desc: { de: "Ein einzigartiger Natur-Erlebnispark mit Rhododendren, exotischen Pflanzen und einem idyllischen Moor – in Gehdistanz.", en: "A unique nature park with rhododendrons, exotic plants, and an idyllic moorland – within walking distance." } },
  { title: { de: "Stadt Zug und Zugersee", en: "City of Zug and Lake Zug" }, desc: { de: "Die charmante Altstadt von Zug am See bietet Restaurants, Museen und eine wunderbare Promenade.", en: "The charming old town of Zug on the lake offers restaurants, museums, and a wonderful promenade." } },
  { title: { de: "Rigi – Königin der Berge", en: "Rigi – Queen of the Mountains" }, desc: { de: "Ein Tagesausflug auf die Rigi bietet ein unvergessliches 360°-Alpenpanorama. Erreichbar mit Bahn und Zahnradbahn.", en: "A day trip to Rigi offers an unforgettable 360° Alpine panorama. Reachable by train and cogwheel railway." } }
];

var pinSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
var checkSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

// State
var lang = navigator.language.slice(0, 2).toLowerCase() === "de" ? "de" : "en";

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    var key = el.getAttribute("data-i18n");
    if (T[key]) el.textContent = T[key][lang];
  });

  document.getElementById("lang-toggle").textContent = lang === "de" ? "EN" : "DE";
  document.getElementById("footer-rights").textContent = "© " + new Date().getFullYear() + " The Rose. " + T["footer.rights"][lang];

  renderFeatures();
  renderExcursions();
}

function renderFeatures() {
  var list = features[lang];
  var el = document.getElementById("features-list");
  el.innerHTML = list.map(function(f) {
    return '<div class="feature-item"><span class="feature-check">' + checkSVG + '</span><span>' + f + '</span></div>';
  }).join("");
}

function renderExcursions() {
  var el = document.getElementById("excursions-list");
  el.innerHTML = excursions.map(function(item) {
    return '<div class="excursion-card"><div class="excursion-inner"><span class="excursion-icon">' + pinSVG + '</span><div><h3>' + item.title[lang] + '</h3><p>' + item.desc[lang] + '</p></div></div></div>';
  }).join("");
}

function toggleLanguage() {
  lang = lang === "de" ? "en" : "de";
  applyLanguage();
}

function toggleMenu() {
  var links = document.getElementById("nav-links");
  var open = links.classList.toggle("open");
  document.getElementById("icon-menu").style.display = open ? "none" : "block";
  document.getElementById("icon-close").style.display = open ? "block" : "none";
}

function closeMenu() {
  var links = document.getElementById("nav-links");
  links.classList.remove("open");
  document.getElementById("icon-menu").style.display = "block";
  document.getElementById("icon-close").style.display = "none";
}

document.addEventListener("DOMContentLoaded", applyLanguage);
