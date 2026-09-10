/**
 * Korrektur von Übung 21.
 * Erst ansehen, nachdem du exercises/exercise21-debugging.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; const price=20; let syntaxWorked=false; if(price>10){syntaxWorked=true;} const customerName="Leonel"; const code="42"; const upper=code.toUpperCase(); const age=16; const adult=age>=18; check("Syntax repariert", syntaxWorked===true); check("Name deklariert", customerName==="Leonel"); check("Methode auf String", upper==="42"); check("Alterslogik", adult===false); summary();
