/**
 * EXERCICE 11 - Eine Schleife gezielt steuern
 * ===========================================
 *
 * Niveau : mittel
 *
 * Hauptziel (= objectif principal) : for, break, continue und Labels (= étiquettes)
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Eine Schleife gezielt steuern
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Ein Nummernbereich wird durchsucht. Ungültige Nummern sollen übersprungen werden; beim ersten Treffer soll die Suche enden. Danach übst du ein Label mit zwei verschachtelten Zahlenschleifen.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * 1,2,3,4,5,6
 * gerade Zahlen -> continue
 * 5 -> Treffer -> break
 *
 * -- Der Plan (= le plan) --
 * 1. Nutze for von 1 bis 10.
 * 2. Überspringe gerade Zahlen mit continue.
 * 3. Beende bei 5 mit break.
 * 4. Schreibe danach zwei verschachtelte for-Schleifen und verlasse beide mit `break outer`.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Nein. Hier steht der Kontrollfluss (= flux de contrôle) im Mittelpunkt.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - continue überspringt den Rest der aktuellen Iteration.
 * - break verlässt die aktuelle Schleife.
 * - `break outer` kann eine benannte äußere Schleife verlassen.
 */

import { check, summary } from "../exerciseChecker.mjs";
let found = 0;
let outerBreakCount = 0;

// TODO: for + continue + break und danach Label implementieren.
throw new Error("TODO: Schleifensteuerung implementieren");
