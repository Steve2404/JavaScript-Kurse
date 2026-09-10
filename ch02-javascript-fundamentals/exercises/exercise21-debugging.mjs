/**
 * EXERCICE 21 - Ein kaputtes Mini-Programm retten
 * ===============================================
 *
 * Niveau : schwierig
 *
 * Hauptziel (= objectif principal) : SyntaxError, ReferenceError, TypeError und Logikfehler unterscheiden
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Ein kaputtes Mini-Programm retten
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Ein kleines Programm wurde von mehreren Personen verändert und enthält verschiedene Fehlerarten. Du sollst jeweils eine korrigierte, ausführbare Version herstellen.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * Syntaxfehler: Parser kann Struktur nicht bilden
 * ReferenceError: Name existiert beim Zugriff nicht
 * TypeError: Wert existiert, unterstützt die Operation aber nicht
 * Logikfehler: Programm läuft, Ergebnis ist falsch
 *
 * -- Der Plan (= le plan) --
 * 1. Korrigiere zuerst Syntax.
 * 2. Korrigiere dann falsche Variablennamen.
 * 3. Korrigiere eine falsche Methodenbenutzung.
 * 4. Korrigiere zuletzt eine fachlich falsche Bedingung.
 * 5. Schreibe zu jeder Korrektur einen kurzen Kommentar mit der Fehlerkategorie.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Nein. Das Ziel ist systematisches Debugging (= débogage systématique).
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - Repariere immer nur eine Fehlerklasse nach der anderen.
 * - `node --check datei.mjs` hilft speziell bei Syntaxfehlern.
 * - Danach normal ausführen, weil Runtime-Fehler erst dann sichtbar werden.
 */

import { check, summary } from "../exerciseChecker.mjs";

// TODO: Baue aus diesen kaputten Ideen eine funktionierende Version:
// const price = 20
// if (price > 10 { console.log("ok"); }          // SyntaxError
// console.log(customerName);                     // ReferenceError
// const code = 42; code.toUpperCase();            // TypeError
// const age = 16; const adult = age <= 18;         // Logikfehler

throw new Error("TODO: Debugging-Aufgabe reparieren");
