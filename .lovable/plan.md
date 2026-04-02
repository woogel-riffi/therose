

# The Rose – Umbau zu reinem HTML/CSS/JS

## Problem
Das Projekt ist trotz vorheriger Änderungen immer noch eine React/Vite-Anwendung. Die `index.html` referenziert `/src/main.tsx`, was nur mit dem Vite-Dev-Server funktioniert. Alle JSON/TS-Konfigurationsdateien gehören nicht auf den Webserver.

## Lösung
Kompletter Umbau zu **3 statischen Dateien**, die direkt in `htdocs` kopiert werden können:

### Dateien für den Webserver
1. **`index.html`** – Komplette HTML-Struktur mit allen Sektionen (Nav, Hero, About, Apartment, Excursions, Contact, Footer), SEO-Meta-Tags, Links zu `style.css` und `script.js`
2. **`style.css`** – Gesamtes Styling: CSS-Variablen für Farben (Cream/Dark Green/Gold), Google Fonts (Playfair Display + Inter), responsive Grid/Flexbox, Mobile-Hamburger-Menü
3. **`script.js`** – Sprachwechsel DE/EN (Browser-Erkennung + Toggle), Mobile-Menü, Smooth-Scroll, dynamische Inhalte (Features-Liste, Ausflüge-Karten)

### Inhalte
Alle bestehenden Texte und Übersetzungen aus `src/i18n/translations.ts` werden übernommen (inkl. der kürzlich aktualisierten Ausflüge-Texte). Design bleibt identisch zum aktuellen Look.

### Deployment-Anleitung
Nur diese 3 Dateien in den `htdocs`-Ordner kopieren – fertig. Kein `npm install`, kein Build.

### Technisch
- Die React-Dateien (`src/`, `package.json`, `vite.config.ts` etc.) bleiben im Repo für die Lovable-Vorschau erhalten
- Die 3 statischen Dateien werden im Root erstellt und sind unabhängig vom React-Stack

