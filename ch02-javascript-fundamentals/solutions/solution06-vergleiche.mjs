/**
 * Korrektur von Übung 06.
 * Erst ansehen, nachdem du exercises/exercise06-vergleiche.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; const enteredAge="18", requiredAge=18; const looseMatch=enteredAge==requiredAge; const strictMatch=enteredAge===requiredAge; const convertedAge=Number(enteredAge); const allowed=convertedAge>=requiredAge; check("== konvertiert", looseMatch===true); check("=== unterscheidet Typen", strictMatch===false); check("Konvertierung ergibt 18", convertedAge===18); check("Zugang erlaubt", allowed===true); summary();
