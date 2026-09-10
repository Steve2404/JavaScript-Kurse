/**
 * EXERCICE 01 - Benutzerdaten richtig speichern
 * =============================================
 *
 * Niveau : leicht
 *
 * Hauptziel (= objectif principal) : let, const, Zuweisung (= affectation), Kopieren von Werten (= copie de valeurs)
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Benutzerdaten richtig speichern
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Ein Benutzerkonto hat einen festen Namen, aber einen Status, der sich ändern darf. Außerdem soll eine Kopie des alten Status erhalten bleiben.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * name = "Leonel"
 * status = "offline"
 * alterStatus = "offline"
 * status wird danach "online"
 * alterStatus bleibt "offline"
 *
 * -- Der Plan (= le plan) --
 * 1. Einen unveränderlichen Namen speichern.
 * 2. Einen veränderbaren Status speichern.
 * 3. Den alten Wert in eine zweite Variable kopieren.
 * 4. Nur den aktuellen Status ändern.
 * 5. Mit Tests prüfen, dass die Kopie unverändert blieb.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Nein. Hier sollst du bewusst direkt mit Variablen arbeiten. Die Aufgabe trainiert zuerst das Speichern und Ändern von Werten.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - const verhindert eine spätere Neuzuweisung (= réaffectation) des Variablennamens.
 * - let erlaubt eine spätere Neuzuweisung.
 * - Bei primitiven Werten kopiert `b = a` den aktuellen Wert.
 */

import { check, summary } from "../exerciseChecker.mjs";

// TODO 1: Verwende const für einen Wert, der nicht neu zugewiesen werden soll.
// TODO 2: Verwende let für den Status, weil er später geändert wird.
// TODO 3: Kopiere den alten Status in previousStatus.
// TODO 4: Ändere nur currentStatus auf "online".

throw new Error("TODO 1-4: Benutzerdaten implementieren");

// Die Variablen sollen danach existieren:
// check("Name bleibt Leonel", userName === "Leonel");
// check("Aktueller Status ist online", currentStatus === "online");
// check("Kopie bleibt offline", previousStatus === "offline");
// summary();
