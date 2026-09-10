/**
 * Korrektur von Übung 03.
 * Erst ansehen, nachdem du exercises/exercise03-typkonvertierung.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs";
const price=Number("25"); const badPrice=Number("abc"); const emptyAsBoolean=Boolean(""); const zeroAsBoolean=Boolean("0"); const orderIdText=String(1042);
check("Preis wird 25", price===25); check("ungueltiger Preis ist NaN", Number.isNaN(badPrice)); check("leerer String ist false", emptyAsBoolean===false); check("String 0 ist true", zeroAsBoolean===true); check("ID wird String", orderIdText==="1042" && typeof orderIdText==="string"); summary();
