/**
 * Korrektur von Übung 16.
 * Erst ansehen, nachdem du exercises/exercise16-callbacks.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs"; function processLogin(isValid,onSuccess,onFailure){return isValid?onSuccess():onFailure();} function success(){return "OK";} function failure(){return "FAIL";} check("benannter Success-Callback", processLogin(true,success,failure)==="OK"); check("anonyme Callbacks", processLogin(false,()=>"YES",()=>"NO")==="NO"); summary();
