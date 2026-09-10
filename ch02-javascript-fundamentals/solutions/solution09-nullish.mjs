/**
 * Korrektur von Übung 09.
 * Erst ansehen, nachdem du exercises/exercise09-nullish.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; const savedVolume=0, savedName="", missingTheme=null; const volume=savedVolume??50; const name=savedName??"Gast"; const theme=missingTheme??"light"; check("0 bleibt 0", volume===0); check("Leerer String bleibt erhalten", name===""); check("null bekommt Standard", theme==="light"); summary();
