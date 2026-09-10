/**
 * Korrektur von Übung 02.
 * Erst ansehen, nachdem du exercises/exercise02-datentypen.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs";
const age=42, ageText="42", active=true; let missing; const emptyValue=null; const big=9007199254740993n; const id=Symbol("id");
check("age ist number", typeof age === "number");
check("ageText ist string", typeof ageText === "string");
check("active ist boolean", typeof active === "boolean");
check("missing ist undefined", typeof missing === "undefined");
check("typeof null ist object", typeof emptyValue === "object");
check("emptyValue ist wirklich null", emptyValue === null);
check("big ist bigint", typeof big === "bigint");
check("id ist symbol", typeof id === "symbol");
summary();
