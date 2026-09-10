/**
 * EXERCICE 05 - Eine Rechnung korrekt berechnen
 * =============================================
 *
 * Niveau : leicht → mittel
 *
 * Hauptziel (= objectif principal) : arithmetische Operatoren, Priorität (= priorité), ++/-- und zusammengesetzte Zuweisung (= affectation composée)
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Eine Rechnung korrekt berechnen
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Eine Rechnung hat Grundpreis, Menge, Rabatt und Versand. Die Reihenfolge der Rechenoperationen muss eindeutig sein.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * 20 * 3 = 60
 * 60 - 10 = 50
 * 50 + 4.99 = 54.99
 *
 * -- Der Plan (= le plan) --
 * 1. Berechne subtotal = price * quantity.
 * 2. Ziehe discount mit -= ab.
 * 3. Addiere shipping mit +=.
 * 4. Erhöhe quantityTest einmal mit ++ und senke sie danach mit --.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Nein. Hier trainierst du bewusst Operatoren und Zwischenwerte.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - `*` wird vor `+` ausgewertet.
 * - `x -= y` bedeutet `x = x - y`.
 * - `++` erhöht um 1, `--` senkt um 1.
 */

import { check, summary } from "../exerciseChecker.mjs";
let price = 20;
let quantity = 3;
const discount = 10;
const shipping = 4.99;

// TODO: Berechne total schrittweise, nicht als riesigen Einzeiler.
throw new Error("TODO: Rechnung berechnen");
