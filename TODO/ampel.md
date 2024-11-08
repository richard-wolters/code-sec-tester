# Anleitung: Visuelles Ampel-Feedback designen (3 Stufen: Schlecht, Auffällig, Gut)

## Ziel
Das visuelle Ampel-Feedback zeigt dem Benutzer in drei klaren Stufen den Zustand eines Prozesses oder einer Eingabe. Es soll aus den Farben **rot** (schlecht), **gelb** (auffällig) und **grün** (gut) bestehen und einfach in das Frontend integriert werden.

---

## Schritt 1: HTML-Struktur erstellen
Füge ein einfaches HTML-Element für das Ampel-Feedback hinzu:
```html
<div id="traffic-light">
    <div class="light red"></div>
    <div class="light yellow"></div>
    <div class="light green"></div>
</div>
