/**
 * EXERCICE 03 - Formulardaten richtig umwandeln
 * =============================================
 *
 * Niveau : leicht → mittel
 *
 * Hauptziel (= objectif principal) : String(), Number(), Boolean(), NaN und explizite Typkonvertierung (= conversion explicite)
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Formulardaten richtig umwandeln
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Formulardaten kommen oft als Text. Das Programm soll aus "25" eine Zahl machen, ungültige Zahlentexte erkennen und Boolean-Regeln bewusst anwenden.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * "25" -> Number("25") -> 25
 * "abc" -> Number("abc") -> NaN
 * "" -> Boolean("") -> false
 * "0" -> Boolean("0") -> true
 *
 * -- Der Plan (= le plan) --
 * 1. Konvertiere priceText in eine Number.
 * 2. Prüfe mit Number.isNaN, ob badPrice wirklich NaN ist.
 * 3. Konvertiere leeren und nichtleeren Text mit Boolean.
 * 4. Konvertiere eine Zahl mit String().
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Nein. Zuerst soll der Datenfluss Wert → Konvertierung → neuer Typ sichtbar bleiben.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - Number("25") erzeugt die Zahl 25.
 * - `NaN === NaN` ist nicht geeignet; nutze `Number.isNaN(...)`.
 * - Nichtleere Strings sind truthy (= évalués comme vrais), auch "0".
 */

import { check, summary } from "../exerciseChecker.mjs";
const priceText = "25";
const badPriceText = "abc";
const emptyText = "";
const zeroText = "0";
const orderId = 1042;

// TODO: Erzeuge price, badPrice, emptyAsBoolean, zeroAsBoolean und orderIdText.
throw new Error("TODO: Typkonvertierungen implementieren");

// Danach Tests mit check(...) schreiben und summary() aufrufen.
