/**
 * EXERCICE 19 - Fehlerhafte Arrow Functions reparieren
 * ====================================================
 *
 * Niveau : mittel → schwierig
 *
 * Hauptziel (= objectif principal) : Blockform, return und Objektliteral-Rückgabe
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Fehlerhafte Arrow Functions reparieren
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Drei Arrow Functions sehen plausibel aus, liefern aber falsche Werte. Du sollst den Datenfluss reparieren, nicht nur Syntax auswendig lernen.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * x => { x * 2; } -> berechnet intern, gibt aber undefined zurück
 * () => { id: 1 } -> Block, kein Objekt-Rückgabewert
 * korrekt: x => { return x * 2; } und () => ({ id: 1 })
 *
 * -- Der Plan (= le plan) --
 * 1. Repariere calculateDouble.
 * 2. Repariere createIdObject.
 * 3. Erkläre in einem Kommentar, warum die ursprünglichen Formen falsch waren.
 * 4. Teste beide Rückgabewerte.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Ja. Beide Funktionen sind kleine Boxen; die Aufgabe ist zu verstehen, wie der Wert die Box verlässt.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - Blockform `{ ... }` hat keine automatische Rückgabe.
 * - Ein Objektliteral direkt nach => braucht Klammern: `({ ... })`.
 */

import { check, summary } from "../exerciseChecker.mjs";

const calculateDouble = x => {
  x * 2; // TODO: reparieren
};

const createIdObject = () => { id: 1 }; // TODO: reparieren

// TODO: Tests aktivieren und erklären.
throw new Error("TODO: Arrow-Fehler reparieren");
