/**
 * Korrektur von Übung 13.
 * Erst ansehen, nachdem du exercises/exercise13-funktionen.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; function calculateSubtotal(price,quantity){return price*quantity;} function calculateDiscount(subtotal,percent){const value=subtotal*percent/100; return value;} function calculateFinalPrice(subtotal,discount){return subtotal-discount;} const subtotal=calculateSubtotal(20,3); const discount=calculateDiscount(subtotal,10); const finalPrice=calculateFinalPrice(subtotal,discount); check("Subtotal 60", subtotal===60); check("Rabatt 6", discount===6); check("Endpreis 54", finalPrice===54); summary();
