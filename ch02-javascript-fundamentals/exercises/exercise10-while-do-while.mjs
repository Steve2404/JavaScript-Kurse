/**
 * EXERCICE 10 - Anmeldeversuche mit Schleifen steuern
 * ===================================================
 *
 * Niveau : mittel
 *
 * Hauptziel (= objectif principal) : while und do...while, Bedingung und Zustandsänderung
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Anmeldeversuche mit Schleifen steuern
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Ein System erlaubt genau drei Versuche. Du sollst sehen, wann die Bedingung geprüft wird und wie der Zähler Richtung Ende läuft.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * attempts = 0
 * while attempts < 3:
 *   Runde 1 -> 1
 *   Runde 2 -> 2
 *   Runde 3 -> 3
 * danach false
 *
 * -- Der Plan (= le plan) --
 * 1. Schreibe eine while-Schleife mit drei Durchläufen.
 * 2. Schreibe separat eine do...while-Schleife, deren Body mindestens einmal läuft.
 * 3. Zähle beide Durchläufe und teste sie.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Nein. Das Schleifenmodell selbst ist die Aufgabe.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - while prüft vor dem Body.
 * - do...while führt den Body zuerst aus.
 * - Vergiss die Zustandsänderung nicht, sonst droht eine Endlosschleife (= boucle infinie).
 */

import { check, summary } from "../exerciseChecker.mjs";
let whileRuns = 0;
let doRuns = 0;

// TODO: while und do...while implementieren.
throw new Error("TODO: Schleifen implementieren");
