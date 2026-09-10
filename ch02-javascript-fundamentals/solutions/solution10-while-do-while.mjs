/**
 * Korrektur von Übung 10.
 * Erst ansehen, nachdem du exercises/exercise10-while-do-while.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; let whileRuns=0; while(whileRuns<3){whileRuns++;} let doRuns=0; do{doRuns++;}while(false); check("while laeuft dreimal", whileRuns===3); check("do...while laeuft mindestens einmal", doRuns===1); summary();
