/**
 * Korrektur von Übung 08.
 * Erst ansehen, nachdem du exercises/exercise08-logische-operatoren.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; const userName="Leonel", passwordOk=true, blocked=false; let checkCalls=0; function expensiveCheck(){checkCalls++;return true;} const allowed=Boolean(userName)&&passwordOk&&!blocked; const skipped=false&&expensiveCheck(); check("Login erlaubt", allowed===true); check("Short-Circuit Ergebnis false", skipped===false); check("Rechte Seite wurde nicht ausgefuehrt", checkCalls===0); summary();
