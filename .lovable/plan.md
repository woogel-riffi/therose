

# Problem: Lovable injiziert automatisch React

Das aktuelle Root-`index.html` ist zwar reines HTML (kein Verweis auf `main.tsx`), aber **Lovable's Vite-Dev-Server injiziert automatisch den React-Einstiegspunkt**. Das ist ein Feature der Plattform und kann nicht umgangen werden. Die Lovable-Preview wird immer die React-App zeigen.

## Realistische Lösung

Es gibt zwei "Welten", die wir parallel pflegen:

### 1. React-App fur die Lovable-Preview
Die bestehende React-App (`src/pages/Index.tsx` mit allen Komponenten) bleibt bestehen und wird in der Lovable-Preview angezeigt. Das `index.html` bekommt wieder das `<div id="root">` und den `<script>` fur React zuruck, damit die Preview funktioniert.

### 2. Statische Dateien fur Plesk/htdocs
Die drei Dateien `static/index.html`, `static/style.css` und `static/script.js` bleiben im `static/`-Ordner. Diese sind reines HTML/CSS/JS ohne React-Abhangigkeit.

### Deployment-Workflow
Via GitHub-Sync landen alle Dateien im Repo. Fur Plesk kopierst du nur den Inhalt des `static/`-Ordners in `htdocs`:
- `static/index.html` → `htdocs/index.html`
- `static/style.css` → `htdocs/style.css`
- `static/script.js` → `htdocs/script.js`

### Konkrete Schritte
1. **`index.html` im Root zurucksetzen** — React-Entry-Point (`<div id="root">` + `<script src="/src/main.tsx">`) wieder einfugen, damit die Lovable-Preview funktioniert
2. **`vite.config.ts` zurucksetzen** — `publicDir` wieder auf Standard setzen
3. **Statische Dateien aktualisieren** — Sicherstellen, dass `static/index.html`, `static/style.css` und `static/script.js` die aktuellsten Texte enthalten (inkl. Turlersee, Seleger Moor etc.)
4. **Root `style.css` und `script.js` entfernen** — Diese gehoren nur in den `static/`-Ordner, nicht ins Root (sonst Konflikte mit Vite)

### Ergebnis
- Lovable-Preview zeigt die React-Version (sieht identisch aus)
- GitHub-Sync enthalt den `static/`-Ordner mit den 3 Deployment-Dateien
- Fur Plesk kopierst du nur die 3 Dateien aus `static/`

