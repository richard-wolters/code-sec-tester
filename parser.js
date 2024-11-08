function parse(s) {
    // Array für die aufgeteilten Strings
    const ret = [];

    // Grenzen für die Länge der Strings
    const minLength = 400;
    const maxLength = 800;

    while (s.length > 0) {
        if (s.length <= maxLength) {
            // Wenn die verbleibende Länge kleiner als maxLength ist, alles hinzufügen und beenden
            ret.push(s);
            s = "";
        } else {
            // Zähler für die Tiefe der geschachtelten Klammern
            let depth = 0;

            // Beste Position zum Schneiden speichern
            let tmpBest = minLength;
            let tmpBestDepth = -1;

            // Durchlaufen der ersten maxLength Zeichen von s
            for (let i = 0; i < maxLength; i++) {
                if (s[i] === '{') {
                    depth++;
                }
                if (s[i] === '}') {
                    depth--;

                    // Beste Position zum Schneiden aktualisieren, wenn Bedingungen erfüllt sind
                    if ((tmpBestDepth === -1 || tmpBestDepth >= depth) && i >= minLength) {
                        tmpBest = i;
                        tmpBestDepth = depth;
                    }
                }
            }

            // Das beste gefundene Teilstück zur Ergebnisliste hinzufügen und von s entfernen
            ret.push(s.substring(0, tmpBest));
            s = s.substring(tmpBest);
        }
    }
    return ret;
}
