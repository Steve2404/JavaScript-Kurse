/**
 * EXERCICE 12 - Support-Tickets mit switch verarbeiten
 * ====================================================
 *
 * Niveau : mittel
 *
 * Hauptziel (= objectif principal) : switch, case, default, break und Fall-through (= enchaînement sans break)
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Support-Tickets mit switch verarbeiten
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Ein Ticket hat eine Priorität. Jede Priorität soll genau eine Reaktionszeit bekommen. Danach reparierst du bewusst einen Fall-through-Fehler.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * "critical" -> 1
 * "high" -> 4
 * "normal" -> 24
 * unbekannt -> 48
 *
 * -- Der Plan (= le plan) --
 * 1. Setze responseHours mit switch.
 * 2. Verwende break korrekt.
 * 3. Baue einen zweiten switch, in dem high und normal absichtlich denselben Block teilen dürfen.
 * 4. Teste default.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Nein. Die Fallauswahl (= sélection de cas) selbst ist der Schwerpunkt.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - switch vergleicht case-Werte strikt.
 * - Ohne break läuft die Ausführung in den nächsten case weiter.
 * - Fall-through kann Fehler sein oder bewusst genutzt werden.
 */

import { check, summary } from "../exerciseChecker.mjs";
const priority = "high";
let responseHours;

// TODO: switch implementieren.
throw new Error("TODO: switch implementieren");
