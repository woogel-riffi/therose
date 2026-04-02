

# Static-Dateien in Lovable sichtbar & funktional machen

## Das Problem
Die drei statischen Dateien liegen im `static/`-Ordner, aber:
1. **Lovable-Preview** zeigt weiterhin die React-App (weil `index.html` im Root `/src/main.tsx` lädt)
2. **GitHub-Sync** synchronisiert zwar alle Dateien, aber auf deinem Host musst du wissen, welche Dateien du brauchst
3. Der `static/`-Ordner ist in Lovable unter "Code Editor" sichtbar, aber nicht unter "Files" (das zeigt nur generierte Dokumente)

## Die Lösung
Die statischen Dateien aus `static/` direkt in den **Root** des Projekts verschieben und die Lovable-`index.html` so anpassen, dass sie die statische Seite lädt statt React. So funktioniert:
- **Lovable-Preview**: zeigt die statische Seite
- **GitHub-Sync**: Die Dateien landen im Repo-Root und können direkt kopiert werden

### Konkrete Schritte

1. **`index.html` im Root ersetzen** — Den Inhalt von `static/index.html` in die Root-`index.html` übernehmen (React-Script-Tag entfernen)

2. **`style.css` ins Root verschieben** — Von `static/style.css` nach `style.css` im Root

3. **`script.js` ins Root verschieben** — Von `static/script.js` nach `script.js` im Root

4. **Vite-Config anpassen** — Damit der Vite-Dev-Server die statischen Dateien korrekt ausliefert (CSS/JS als static assets)

### Ergebnis
- Die Lovable-Preview zeigt die statische Webseite
- Via GitHub werden `index.html`, `style.css` und `script.js` synchronisiert
- Auf deinem Host kopierst du nur diese 3 Dateien in `htdocs`
- Die React-Quelldateien in `src/` bleiben im Repo, stören aber nicht

### Wichtig
Die Lovable-Preview nutzt Vite als Dev-Server. Vite kann statische HTML-Dateien ausliefern, aber wir müssen sicherstellen, dass die CSS- und JS-Referenzen (`style.css`, `script.js`) korrekt aufgelöst werden. Dazu wird ggf. die Vite-Config minimal angepasst.

