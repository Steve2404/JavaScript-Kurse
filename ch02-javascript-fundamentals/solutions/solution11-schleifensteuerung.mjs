/**
 * Korrektur von Übung 11.
 * Erst ansehen, nachdem du exercises/exercise11-schleifensteuerung.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; let found=0; for(let i=1;i<=10;i++){if(i%2===0)continue;if(i===5){found=i;break;}} let outerBreakCount=0; outer: for(let a=0;a<3;a++){for(let b=0;b<3;b++){outerBreakCount++; if(a===1&&b===1) break outer;}} check("Erster gesuchter ungerader Wert ist 5", found===5); check("Label beendet beide Schleifen", outerBreakCount===5); summary();
