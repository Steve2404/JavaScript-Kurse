/**
 * Korrektur von Übung 20.
 * Erst ansehen, nachdem du exercises/exercise20-js-fallen.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; const priceFromForm="30", shipping=5, config=null, savedVolume=0, enteredId="42"; const total=Number(priceFromForm)+shipping; const configIsNull=config===null; const volume=savedVolume??50; const idMatches=Number(enteredId)===42; check("Total 35", total===35); check("null erkannt", configIsNull===true); check("0 bleibt 0", volume===0); check("ID nach Konvertierung strikt gleich", idMatches===true); summary();
