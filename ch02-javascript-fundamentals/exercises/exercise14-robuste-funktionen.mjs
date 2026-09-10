/**
 * EXERCICE 14 - Robuste Funktionen schreiben
 * ==========================================
 *
 * Niveau : mittel
 *
 * Hauptziel (= objectif principal) : Default-Parameter, undefined, mehrere return-Wege und Shadowing (= masquage)
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Eine Funktion ist wie eine magische Box (= boîte magique) : Sie bekommt Zutaten
 * (= ingrédients / Parameter), macht eine klar begrenzte Arbeit und kann ein Ergebnis
 * zurückgeben. Bei jeder Teilaufgabe frage dich: Hat sie eine eigene kleine Aufgabe?
 * Kommt sie mehrfach vor? Versteckt sie eine eigene kleine Regel?
 *
 * ==================================================================
 * TODO - Robuste Funktionen schreiben
 * ==================================================================
 *
 * -- Das Problem, wie für ein kleines Kind erklärt (= problème expliqué simplement) --
 * Eine Versandfunktion soll einen Standardpreis verwenden, bei ungültiger Menge früh abbrechen und eine lokale Variable benutzen, ohne eine äußere Variable versehentlich zu verändern.
 *
 * -- Probieren wir es zuerst von Hand (= essayons d'abord à la main) --
 * shipping(100) mit default rate 5 -> 5
 * quantity <= 0 -> return 0
 * lokale Variable mit gleichem Namen verdeckt äußere Variable
 *
 * -- Der Plan (= le plan) --
 * 1. Schreibe calculateShipping(total, rate = 5).
 * 2. Bei total >= 100 früh return 0.
 * 3. Bei negativem total ebenfalls return 0.
 * 4. Demonstriere Shadowing mit einer lokalen Variable.
 *
 * -- Braucht dieser Plan eine eigene magische Box? --
 * Ja. Die Regeln gehören zusammen in eine robuste Berechnungsbox.
 *
 * Bevor du Node.js startest: Schreibe zuerst deine erwarteten Zwischenwerte
 * (= valeurs intermédiaires attendues) auf Papier. Danach erst ausführen.
 *
 * Technische Hinweise (= indices techniques) :
 * - Ein Default greift bei fehlendem Argument oder explizitem undefined.
 * - return beendet die aktuelle Funktionsausführung sofort.
 * - Ein lokaler Parameter kann einen äußeren Namen verdecken (= masquer).
 */

import { check, summary } from "../exerciseChecker.mjs";
const rate = 99;
function calculateShipping(total, rate = 5) {
  throw new Error("TODO: calculateShipping implementieren");
}

// TODO: Teste Default, explizites undefined, frühe Rückgabe und unverändertes äußeres rate.
