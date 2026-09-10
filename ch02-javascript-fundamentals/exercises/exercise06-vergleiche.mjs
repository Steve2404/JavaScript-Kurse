/**
 * EXERCICE 06 - Zugang korrekt vergleichen
 * ========================================
 *
 * Niveau : mittel
 *
 * Hauptziel (= objectif principal) : Vergleiche, strikte Gleichheit === und lockere Gleichheit ==
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Zugang korrekt vergleichen
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Ein Zugangscode kommt als Text "18", während die erlaubte Zahl als Number 18 gespeichert ist. Du sollst bewusst entscheiden, wann Typen gleich sein müssen.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * "18" == 18  -> true durch Typkonvertierung
 * "18" === 18 -> false, weil Typen verschieden sind
 *
 * -- Der Plan (= le plan) --
 * 1. Prüfe beide Vergleiche.
 * 2. Konvertiere den Text bewusst zu Number.
 * 3. Prüfe danach strikt mit ===.
 * 4. Füge eine Altersgrenze mit >= hinzu.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Nein. Die Aufgabe soll den Unterschied der Vergleichsregeln sichtbar machen.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - `==` darf Typkonvertierung durchführen.
 * - `===` vergleicht ohne solche Konvertierung.
 * - `Number(enteredAge)` macht die Umwandlung ausdrücklich.
 */

import { check, summary } from "../exerciseChecker.mjs";
const enteredAge = "18";
const requiredAge = 18;

// TODO: Erzeuge looseMatch, strictMatch, convertedAge und allowed.
throw new Error("TODO: Vergleiche implementieren");
