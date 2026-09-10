/**
 * EXERCICE 17 - Funktionsformen gezielt einsetzen
 * ===============================================
 *
 * Niveau : mittel → schwierig
 *
 * Hauptziel (= objectif principal) : Function Declaration vs Function Expression, Erzeugungszeit (= moment de création) und Block-Scope
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Funktionsformen gezielt einsetzen
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Du sollst zwei kleine Programme so schreiben, dass du bewusst entscheidest, wann eine Declaration vor ihrer sichtbaren Zeile nutzbar ist und wann eine Function Expression erst nach der Zuweisung verfügbar sein soll.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * Declaration: Aufruf kann im gültigen Scope vor der sichtbaren Deklaration stehen.
 * let + Function Expression: Zugriff vor Initialisierung ist nicht erlaubt.
 *
 * -- Der Plan (= le plan) --
 * 1. Rufe eine Function Declaration vor ihrer sichtbaren Zeile auf.
 * 2. Definiere danach eine Function Expression und rufe sie erst danach auf.
 * 3. Erzeuge innerhalb eines Blocks eine Declaration und benutze sie nur dort.
 * 4. Wenn eine Funktion außerhalb gebraucht wird, speichere sie in einer äußeren let-Variable.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Ja. Hier ist die Wahl der Funktionsform selbst Teil des Designs (= conception).
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - Declaration wird für ihren Scope vorbereitet.
 * - `let f = function(){}` ist vor der Initialisierung in der TDZ.
 * - Eine Block-Declaration bleibt im Strict Mode im Block.
 */

import { check, summary } from "../exerciseChecker.mjs";

// TODO: Vier kleine Fälle nach dem Plan implementieren.
throw new Error("TODO: Funktionsformen implementieren");
