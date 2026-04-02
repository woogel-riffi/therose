

# Navigation und Sektionen trennen: Übernachten + Workshops

## Was sich ändert

**"Gäste-Apartment"** wird zu **"Übernachten"** und die bisherige Apartment-Sektion wird zur reinen Übernachtungs-Sektion. Eine **neue Sektion "Workshops"** kommt hinzu mit eigenem Navigationspunkt.

## Änderungen in 3 Dateien

### 1. `static/index.html`
- Nav-Link `#apartment` → `#stay`, Text "Übernachten"
- Neuer Nav-Link `#workshops` nach "Übernachten"
- Hero-CTA Link von `#apartment` zu `#stay`
- **Apartment-Sektion** (`id="apartment"`) umbenennen zu `id="stay"`:
  - Titel → "Übernachten"
  - Intro-Text anpassen (nur Übernachtung)
  - Workshop-Card entfernen (nur Stay-Card behalten)
- **Neue Sektion** `id="workshops"` einfügen (nach Stay, vor Excursions):
  - Eigener Section-Header "Workshops"
  - Beschreibung: Raum für bis zu 15 Personen, kreative Workshops, Seminare, Retreats
  - Catering kann organisiert werden
  - Features-Liste für Workshops (Platz für 15 Personen, Catering, WLAN, Parkplatz, etc.)

### 2. `static/script.js`
- Neue Übersetzungsschlüssel: `nav.stay`, `nav.workshops`, `workshops.title`, `workshops.intro`, `workshops.desc`, `workshops.catering`
- Bestehende `nav.apartment` entfernen
- `apartment.*`-Schlüssel umbenennen zu `stay.*`
- Workshop-Features-Liste separat rendern

### 3. React-Dateien (parallel pflegen)
- `src/i18n/translations.ts` — gleiche Übersetzungsänderungen
- `src/components/Navigation.tsx` — Links aktualisieren
- `src/components/ApartmentSection.tsx` → Umbenennen/anpassen zu Stay-Sektion
- Neue `src/components/WorkshopSection.tsx`
- `src/pages/Index.tsx` — Workshop-Sektion einfügen

## Neue Inhalte (DE/EN)

**Workshops-Sektion:**
- Titel: "Workshops" / "Workshops"
- Intro DE: "Unser lichtdurchfluteter Raum eignet sich hervorragend für kreative Workshops, Seminare oder Retreats mit bis zu 15 Personen."
- Intro EN: "Our light-filled space is perfect for creative workshops, seminars, or retreats with up to 15 participants."
- Catering DE: "Catering kann auf Wunsch organisiert werden."
- Catering EN: "Catering can be arranged upon request."

**Nav-Reihenfolge:** Über das Haus | Übernachten | Workshops | Ausflüge | Kontakt

