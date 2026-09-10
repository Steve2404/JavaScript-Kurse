/**
 * EXERCICE 16 - Callbacks praktisch einsetzen
 * ===========================================
 *
 * Niveau : mittel
 *
 * Hauptziel (= objectif principal) : Callback-Funktionen und anonyme Funktionen
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Callbacks praktisch einsetzen
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Eine Funktion processLogin soll entscheiden, welche Aktion später ausgeführt wird. Die Aktionen werden als Funktionen übergeben, nicht sofort gestartet.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * processLogin(true, onSuccess, onFailure)
 * true -> onSuccess()
 * false -> onFailure()
 *
 * -- Der Plan (= le plan) --
 * 1. Schreibe processLogin(isValid, success, failure).
 * 2. Rufe nur den passenden Callback auf.
 * 3. Übergib einmal benannte Funktionen.
 * 4. Übergib danach anonyme Funktionen direkt.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Ja. processLogin ist die Steuerbox; die Callbacks sind austauschbare Aktionsboxen.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - `callback` übergibt die Funktion.
 * - `callback()` führt sie aus.
 * - Die empfangende Funktion entscheidet, wann der Callback läuft.
 */

import { check, summary } from "../exerciseChecker.mjs";
function processLogin(isValid, onSuccess, onFailure) {
  throw new Error("TODO: processLogin implementieren");
}

// TODO: Mit einem String result sichtbar machen, welcher Callback gelaufen ist.
