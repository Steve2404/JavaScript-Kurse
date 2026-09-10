/**
 * EXERCICE 07 - Eine Entscheidungskette programmieren
 * ===================================================
 *
 * Niveau : mittel
 *
 * Hauptziel (= objectif principal) : if, else if, else und ternärer Operator
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Eine Entscheidungskette programmieren
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Ein Support-System ordnet eine Wartezeit nach Priorität zu und erzeugt zusätzlich einen kurzen Status mit dem ternären Operator.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * priority = "high" -> waitTime = 1
 * "medium" -> 4
 * alles andere -> 24
 *
 * -- Der Plan (= le plan) --
 * 1. Verwende if/else if/else für waitTime.
 * 2. Erzeuge mit ?: den Text "schnell" wenn waitTime <= 4, sonst "normal".
 * 3. Teste beide Ergebnisse.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Nein. Die Verzweigung (= branchement) selbst ist hier das Lernziel.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - `if` prüft zuerst.
 * - `else if` wird nur geprüft, wenn vorherige Bedingungen false waren.
 * - `condition ? a : b` liefert einen von zwei Werten.
 */

import { check, summary } from "../exerciseChecker.mjs";
const priority = "high";
let waitTime;

// TODO: Entscheidungskette implementieren.
throw new Error("TODO: Bedingungen implementieren");
