/**
 * Korrektur von Übung 07.
 * Erst ansehen, nachdem du exercises/exercise07-bedingungen.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; const priority="high"; let waitTime; if(priority==="high") waitTime=1; else if(priority==="medium") waitTime=4; else waitTime=24; const speed=waitTime<=4?"schnell":"normal"; check("high -> 1 Stunde", waitTime===1); check("Status schnell", speed==="schnell"); summary();
