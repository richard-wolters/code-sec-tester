# Anleitung: Erstellung von Test-Sourcecode für die Webapp

## Ziel
Unsere Webapp analysiert Quellcode und überprüft, ob dieser sicher oder unsicher ist. Für die Vorführung benötigen wir drei Kategorien von Code-Beispielen:

1. **Sehr unsicherer Sourcecode** (kritische Sicherheitslücken)
2. **Auffälliger Sourcecode** (geringe Sicherheitsrisiken)
3. **100% sicherer Sourcecode**

In dieser Anleitung lernst du, wie du mit **ChatGPT** diese Beispiele erstellen kannst.

---

## Schritt 1: Vorbereitung
1. **Öffne ChatGPT** (oder ein vergleichbares Tool).
2. Überlege dir zunächst, in welcher Programmiersprache der Quellcode geschrieben werden soll. Beispiele:
   - **Python**
   - **JavaScript**
   - **Java**
   - **C#**

> 💡 **Tipp**: Wir empfehlen einfache Sprachen wie Python oder JavaScript, da diese für Anfänger leichter verständlich sind.

---

## Schritt 2: Unsicheren Sourcecode erstellen
### Beispiel-Prompt für **sehr unsicheren Sourcecode**:
```markdown
Erstelle ein Beispiel in [Programmiersprache], das typische Sicherheitslücken enthält. Der Code sollte kritische Fehler haben, wie z. B.:
- SQL-Injections
- Harcodierte Passwörter
- Fehlende Input-Validierung
- Veraltete Verschlüsselung


## Schritt 3: Auffälligen Sourcecode erstellen
### Beispiel-Prompt für auffälligen Sourcecode mit geringen Unsicherheiten:
```markdown
Erstelle ein Beispiel in [Programmiersprache], das kleine Sicherheitsrisiken enthält. Der Code sollte Folgendes beinhalten:
- Leichte Unsicherheiten (z. B. schwache Passwortrichtlinien)
- Mögliche Fehlkonfigurationen
- Verbesserbare Logik

## Schritt 4: Sicheren Sourcecode erstellen
### Beispiel-Prompt für 100% sicheren Sourcecode:
```markdown
Erstelle ein Beispiel in [Programmiersprache], das vollständig sicher ist. Der Code sollte:
- Sicherheitsstandards einhalten
- Keine bekannten Schwachstellen enthalten
- Klar strukturiert sein
