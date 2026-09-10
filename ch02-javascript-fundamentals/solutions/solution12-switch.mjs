/**
 * Korrektur von Übung 12.
 * Erst ansehen, nachdem du exercises/exercise12-switch.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; const priority="high"; let responseHours; switch(priority){case "critical":responseHours=1;break;case "high":responseHours=4;break;case "normal":responseHours=24;break;default:responseHours=48;} let group; const p="normal"; switch(p){case "high":case "normal":group="standard-support";break;default:group="other";} check("high -> 4", responseHours===4); check("geteilter Fallthrough ist bewusst", group==="standard-support"); summary();
