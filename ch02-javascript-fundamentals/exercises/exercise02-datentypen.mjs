/**
 * EXERCICE 02 - Datentypen sicher erkennen
 * ========================================
 *
 * Niveau : leicht
 *
 * Hauptziel (= objectif principal) : primitive Datentypen, typeof, null und undefined
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Datentypen sicher erkennen
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Ein Diagnoseprogramm bekommt verschiedene Werte. Du sollst jeden Wert mit `typeof` untersuchen und Sonderfälle richtig behandeln.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * 42 -> number
 * "42" -> string
 * true -> boolean
 * undefined -> undefined
 * null -> typeof liefert historisch "object"
 *
 * -- Der Plan (= le plan) --
 * 1. Lege Werte verschiedener Datentypen an.
 * 2. Ermittle mit typeof ihren Typ.
 * 3. Prüfe den Sonderfall null zusätzlich mit === null.
 * 4. Prüfe auch BigInt und Symbol.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Nein. Der Schwerpunkt liegt auf Werten und Typprüfung (= vérification de type), nicht auf Funktionszerlegung.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - `typeof null` ist der historische Sonderfall "object".
 * - Für die echte null-Prüfung verwende zusätzlich `value === null`.
 * - `typeof 1n` ist "bigint" und `typeof Symbol()` ist "symbol".
 */

import { check, summary } from "../exerciseChecker.mjs";

const age = 42;
const ageText = "42";
const active = true;
let missing;
const emptyValue = null;
const big = 9007199254740993n;
const id = Symbol("id");

// TODO: Erzeuge für jeden Wert eine passende Typprüfung.
throw new Error("TODO: Datentypen pruefen");

// Nutze check(...) für mindestens sieben Prüfungen und rufe am Ende summary() auf.
