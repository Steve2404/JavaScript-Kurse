/**
 * Korrektur von Übung 05.
 * Erst ansehen, nachdem du exercises/exercise05-operatoren.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; let price=20; let quantity=3; const discount=10, shipping=4.99; let total=price*quantity; total-=discount; total+=shipping; let quantityTest=quantity; quantityTest++; quantityTest--; check("Zwischensumme", price*quantity===60); check("Endpreis", Math.abs(total-54.99)<1e-10); check("++ und -- gleichen sich aus", quantityTest===3); summary();
