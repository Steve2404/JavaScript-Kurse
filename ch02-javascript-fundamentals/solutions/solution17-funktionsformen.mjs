/**
 * Korrektur von Übung 17.
 * Erst ansehen, nachdem du exercises/exercise17-funktionsformen.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; const before=declared(); function declared(){return "bereit";} const expressed=function(){return "spaeter";}; let inside; { function onlyHere(){return "block";} inside=onlyHere(); } let chosen; if(true){chosen=function(){return "aussen nutzbar";};} check("Declaration vor Zeile", before==="bereit"); check("Expression nach Zuweisung", expressed()==="spaeter"); check("Block-Aufruf innen", inside==="block"); check("Aeussere Variable traegt Funktion", chosen()==="aussen nutzbar"); summary();
