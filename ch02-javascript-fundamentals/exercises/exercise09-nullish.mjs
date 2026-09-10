/**
 * EXERCICE 09 - Standardwerte ohne Datenverlust wählen
 * ====================================================
 *
 * Niveau : mittel
 *
 * Hauptziel (= objectif principal) : Nullish Coalescing ?? gegen ||
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Standardwerte ohne Datenverlust wählen
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Ein Benutzer speichert Lautstärke 0. Das ist ein gültiger Wert und darf nicht durch den Standardwert 50 ersetzt werden.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * savedVolume = 0
 * 0 || 50 -> 50 (falsch für dieses Fachproblem)
 * 0 ?? 50 -> 0 (gewünschtes Verhalten)
 *
 * -- Der Plan (= le plan) --
 * 1. Erzeuge volume mit ??.
 * 2. Teste zusätzlich null und undefined.
 * 3. Zeige bewusst, dass ein leerer String mit ?? erhalten bleibt.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Nein. Der Schwerpunkt ist die Auswahl des richtigen Operators für fehlende Werte (= valeurs manquantes).
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - `a ?? b` benutzt b nur bei null oder undefined.
 * - `a || b` benutzt b bei jedem falsy Wert, also auch 0 und "".
 */

import { check, summary } from "../exerciseChecker.mjs";
const savedVolume = 0;
const savedName = "";
const missingTheme = null;

// TODO: volume, name und theme mit ?? sinnvoll setzen.
throw new Error("TODO: Nullish Coalescing implementieren");
