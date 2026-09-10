/**
 * EXERCICE 08 - Login-Regeln kombinieren
 * ======================================
 *
 * Niveau : mittel
 *
 * Hauptziel (= objectif principal) : &&, ||, !, truthy/falsy und Short-Circuit-Auswertung (= évaluation court-circuitée)
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Login-Regeln kombinieren
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Ein Login ist nur erlaubt, wenn Benutzername vorhanden, Passwort gültig und Konto nicht gesperrt ist. Eine teure Prüfung soll nur laufen, wenn sie wirklich gebraucht wird.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * hasName = true
 * passwordOk = true
 * blocked = false
 * true && true && !false -> true
 *
 * -- Der Plan (= le plan) --
 * 1. Baue allowed mit && und !.
 * 2. Erzeuge eine Funktion expensiveCheck(), die einen Zähler erhöht.
 * 3. Zeige mit `false && expensiveCheck()`, dass die rechte Seite nicht läuft.
 * 4. Teste den Zähler.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Teilweise ja. `expensiveCheck` ist eine kleine Box, weil wir sichtbar machen wollen, ob sie ausgeführt wurde.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - `&&` stoppt beim ersten falsy Wert.
 * - `||` stoppt beim ersten truthy Wert.
 * - `!value` kehrt die Wahrheitseinschätzung um.
 */

import { check, summary } from "../exerciseChecker.mjs";
const userName = "Leonel";
const passwordOk = true;
const blocked = false;
let checkCalls = 0;

function expensiveCheck() {
  checkCalls++;
  return true;
}

// TODO: allowed und skipped so bilden, dass Short-Circuit wirklich getestet wird.
throw new Error("TODO: Logische Operatoren implementieren");
