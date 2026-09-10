/**
 * EXERCICE 20 - JavaScript-Fallen durch Reparieren verstehen
 * ==========================================================
 *
 * Niveau : schwierig
 *
 * Hauptziel (= objectif principal) : Typkonvertierung, typeof null, ==/===, ||/?? und String + Number
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - JavaScript-Fallen durch Reparieren verstehen
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Ein Konfigurationsprogramm enthält mehrere typische Anfängerfehler. Du musst jeden Fehler durch echten Code korrigieren und mit Tests absichern.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * "30" + 5 -> "305"
 * Number("30") + 5 -> 35
 * typeof null -> "object"
 * 0 || 50 -> 50
 * 0 ?? 50 -> 0
 *
 * -- Der Plan (= le plan) --
 * 1. Repariere die Preisaddition mit expliziter Konvertierung.
 * 2. Prüfe null nicht nur mit typeof.
 * 3. Bewahre Lautstärke 0 mit ?? auf.
 * 4. Verwende für eine ID nach Konvertierung einen strikten Vergleich.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Nein. Dies ist eine Reparaturwerkstatt (= atelier de réparation) für mehrere bereits bekannte Sprachregeln.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - Konvertiere absichtlich, statt auf zufällige implizite Regeln zu hoffen.
 * - Für null ist `value === null` eindeutig.
 * - `??` behandelt nur null/undefined als fehlend.
 */

import { check, summary } from "../exerciseChecker.mjs";
const priceFromForm = "30";
const shipping = 5;
const config = null;
const savedVolume = 0;
const enteredId = "42";

// TODO: total, configIsNull, volume und idMatches korrekt bilden.
throw new Error("TODO: JavaScript-Fallen reparieren");
