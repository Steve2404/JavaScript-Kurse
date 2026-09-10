/**
 * Korrektur von Übung 19.
 * Erst ansehen, nachdem du exercises/exercise19-arrow-fehler.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; const calculateDouble=x=>{return x*2;}; const createIdObject=()=>({id:1}); check("Block gibt 6 zurueck", calculateDouble(3)===6); check("Objekt wird zurueckgegeben", createIdObject().id===1); summary();
