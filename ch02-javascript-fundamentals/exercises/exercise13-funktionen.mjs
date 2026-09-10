/**
 * EXERCICE 13 - Preisberechnung in Funktionen zerlegen
 * ====================================================
 *
 * Niveau : mittel
 *
 * Hauptziel (= objectif principal) : Function Declaration, Parameter, Argumente, lokale Variablen, return und Scope
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Preisberechnung in Funktionen zerlegen
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Eine Preisberechnung soll nicht als langer Block stehen. Du zerlegst sie in kleine Funktionen, die jeweils genau eine klare Aufgabe haben.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * calculateSubtotal(20, 3) -> 60
 * calculateDiscount(60, 10) -> 6
 * 60 - 6 -> 54
 *
 * -- Der Plan (= le plan) --
 * 1. Schreibe calculateSubtotal(price, quantity).
 * 2. Schreibe calculateDiscount(subtotal, percent).
 * 3. Schreibe calculateFinalPrice(subtotal, discount).
 * 4. Prüfe, dass lokale Zwischenwerte außerhalb der Funktion nicht gebraucht werden.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Ja. Genau hier wird die Metapher der magischen Box praktisch: jede fachliche Teilaufgabe (= sous-tâche métier) bekommt ihre eigene Funktion.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - Parameter stehen in der Funktionsdefinition.
 * - Argumente kommen beim Aufruf.
 * - `return` macht einen Wert zum Ergebnis des Aufrufs.
 */

import { check, summary } from "../exerciseChecker.mjs";

function calculateSubtotal(price, quantity) {
  throw new Error("TODO 1: calculateSubtotal implementieren");
}
function calculateDiscount(subtotal, percent) {
  throw new Error("TODO 2: calculateDiscount implementieren");
}
function calculateFinalPrice(subtotal, discount) {
  throw new Error("TODO 3: calculateFinalPrice implementieren");
}

// TODO 4: Funktionen aufrufen und Ergebnisse testen.
