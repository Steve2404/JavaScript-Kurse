/**
 * EXERCICE 15 - Eine Funktion als Wert speichern
 * ==============================================
 *
 * Niveau : mittel
 *
 * Hauptziel (= objectif principal) : Function Expression, Funktion als Wert, Kopie und func vs func()
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Eine Funktion als Wert speichern
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Ein Programm soll eine Aktion vorbereiten und erst später ausführen. Du musst unterscheiden, ob du die Funktion selbst speicherst oder sofort ihr Ergebnis berechnest.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * const action = greet; -> Funktion speichern
 * action() -> später ausführen
 * const value = greet(); -> sofort ausführen und Rückgabewert speichern
 *
 * -- Der Plan (= le plan) --
 * 1. Erzeuge greet als Function Expression.
 * 2. Kopiere die Funktion in action ohne ().
 * 3. Prüfe greet === action.
 * 4. Rufe action später auf.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Ja. greet ist die eigentliche Aktionsbox; action ist nur ein weiterer Name für denselben Funktionswert.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - Ohne `()` verwendest du den Funktionswert.
 * - Mit `()` führst du die Funktion aus.
 * - Funktionen können wie andere Werte zugewiesen werden.
 */

import { check, summary } from "../exerciseChecker.mjs";

// TODO: greet als Function Expression erzeugen.
// TODO: Funktionswert in action kopieren.
throw new Error("TODO: Funktionswerte implementieren");
