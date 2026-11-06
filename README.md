# Ciao! Italiano A1

Lern-Webapp für die Italienisch-A1-Prüfung. Kein Build, kein Server: `index.html` per Doppelklick öffnen.
Fortschritt wird im Browser (localStorage) gespeichert.

## Dateien
- `index.html` – Seite
- `style.css` – Stil
- `app.js` – Logik (Lektionen, Karten/Leitner, Quiz mit Schwächen-Training, Diktat, Schreiben, Sprechen, Prüfungssimulation mit Zeitlimit)
- `data-lezioni-1.js`, `data-lezioni-2.js`, `data-lezioni-3.js` – 13 Lektionen (Grammatik, Wortschatz, Übungen, Lesen, Hören, Schreiben, Sprechen); Lektion 13 «Salute e corpo» ist ein A1-Nachtrag
- `data-esami.js` – 4 Prüfungssimulationen (1–3 CILS-Aufbau, 4 PLIDA A1) und Prüfungsinfos zu PLIDA
- `manifest.json`, `icon.svg`, `icon-192.png`, `icon-512.png` – Web-App-Manifest und Icon, damit sich die App auf dem Handy installieren lässt
- `.nojekyll` – GitHub Pages liefert die Dateien unverändert aus

## Inhalt
13 Lektionen, 936 eindeutige Wörter (1007 Einträge inkl. Wiederholungen), 265 Grammatikaufgaben, 13 Lesetexte, 13 Hördialoge, 86 Diktatsätze, 13 Schreib- und 13 Sprechaufgaben, 4 Simulationen.

## Auf dem Handy
Die App ist über GitHub Pages veröffentlicht (Repo `ciao-a1`).
- iPhone (Safari): Seite öffnen → Teilen → «Zum Home-Bildschirm».
- Android (Chrome): Menü ⋮ → «App installieren» bzw. «Zum Startbildschirm hinzufügen».

Der Fortschritt bleibt auf dem jeweiligen Gerät (localStorage) und wird nicht zwischen Computer und Handy abgeglichen. Auf dem iPhone hat die installierte App einen eigenen Speicher, getrennt von Safari. Einen Offline-Modus gibt es nicht; zum Öffnen braucht die App in der Regel Internet.
Beim Öffnen per Doppelklick (`file://`) lädt der Browser das Manifest nicht. Die App läuft trotzdem, ist dann aber nicht installierbar.

Namen und Geburtsdatum in den Musterantworten sind Übungswerte.

## Hinweise für die Weiterentwicklung
- Wortschatz-Schlüssel ist das italienische Wort (stabil bei Umsortierung). Wörter, die in mehreren Lektionen vorkommen, zählen für Karten nur in der ersten Lektion.
- Grammatikaufgaben sind über `Lektion|Frage` identifiziert.
- Hören nutzt `speechSynthesis` (it-IT). Echte Audiodateien könnten über ein Feld `audioUrl` ergänzt werden.
- Schreib- und Sprechaufgaben werden nur grob geprüft (Pflichtelemente per Regex, Selbstbewertung).
