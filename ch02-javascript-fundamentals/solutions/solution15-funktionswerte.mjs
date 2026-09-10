/**
 * Korrektur von Übung 15.
 * Erst ansehen, nachdem du exercises/exercise15-funktionswerte.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; const greet=function(name){return `Hallo ${name}`;}; const action=greet; check("gleicher Funktionswert", action===greet); check("spaeterer Aufruf", action("Leonel")==="Hallo Leonel"); summary();
