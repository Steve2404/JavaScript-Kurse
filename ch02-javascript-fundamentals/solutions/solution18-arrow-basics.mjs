/**
 * Korrektur von Übung 18.
 * Erst ansehen, nachdem du exercises/exercise18-arrow-basics.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; const double=n=>n*2; const add=(a,b)=>a+b; const systemName=()=>"ITL"; check("double", double(4)===8); check("add", add(2,3)===5); check("systemName", systemName()==="ITL"); summary();
