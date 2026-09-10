/**
 * Korrektur von Übung 14.
 * Erst ansehen, nachdem du exercises/exercise14-robuste-funktionen.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; const rate=99; function calculateShipping(total, rate=5){if(total<0)return 0;if(total>=100)return 0;return rate;} check("Default 5", calculateShipping(50)===5); check("undefined aktiviert Default", calculateShipping(50,undefined)===5); check("explizite Rate", calculateShipping(50,8)===8); check("ab 100 gratis", calculateShipping(100)===0); check("aeusseres rate bleibt 99", rate===99); summary();
