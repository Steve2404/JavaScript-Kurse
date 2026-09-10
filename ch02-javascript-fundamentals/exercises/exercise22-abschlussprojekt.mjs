/**
 * EXERCICE 22 - Abschlussprojekt: kleines Bestellsystem
 * =====================================================
 *
 * Niveau : mittel → schwierig
 *
 * Hauptziel (= objectif principal) : mehrere Kapitel-2-Regeln in einem zusammenhängenden Programm kombinieren
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Abschlussprojekt: kleines Bestellsystem
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Du baust ein vollständiges Bestellsystem für genau eine Bestellung. Keine Arrays und keine Objekte: nur die Konzepte aus Kapitel 2. Das Programm validiert Eingaben, berechnet Rabatt und Versand, wählt eine Meldung und gibt eine Zusammenfassung aus.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * unitPrice = "79.90" -> Number -> 79.9
 * quantity = "3" -> Number -> 3
 * subtotal = 239.7
 * premium 10% -> discount 23.97
 * afterDiscount = 215.73
 * ab 200 -> shipping 0
 * final = 215.73
 *
 * -- Der Plan (= le plan) --
 * 1. Konvertiere die Texteingaben in Number und validiere NaN.
 * 2. Berechne subtotal mit einer Funktion.
 * 3. Wähle den Rabatt mit if/else.
 * 4. Berechne Versand mit einer Arrow Function und ?: .
 * 5. Wähle den Ausgabetext mit switch.
 * 6. Nutze eine Function Expression als Formatter.
 * 7. Gib alle Zwischenwerte aus und teste sie.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Ja. Jetzt ist Zerlegung ausdrücklich erwünscht, weil alle Funktionsformen bereits gelernt wurden.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - Nutze Number(...) und Number.isNaN(...).
 * - Premium-Rabatt: 10 %, normal: 0 %.
 * - Versand: ab 200 kostenlos, sonst Germany 4.99, andere Länder 9.99.
 * - `toFixed(2)` liefert einen String für die Anzeige.
 */

import { check, summary } from "../exerciseChecker.mjs";
const customerName = "Leonel";
const customerType = "premium";
const unitPriceInput = "79.90";
const quantityInput = "3";
const country = "Germany";

function calculateSubtotal(price, quantity) {
  throw new Error("TODO 1: calculateSubtotal implementieren");
}

const calculateShipping = priceAfterDiscount => {
  throw new Error("TODO 2: calculateShipping implementieren");
};

const formatMoney = function(value) {
  throw new Error("TODO 3: formatMoney implementieren");
};

// TODO 4-8: Konvertieren, validieren, Rabatt, switch, Endpreis, Ausgabe und Tests.
throw new Error("TODO: Abschlussprojekt vervollstaendigen");
