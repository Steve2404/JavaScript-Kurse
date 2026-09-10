/**
 * Korrektur von Übung 01.
 * Erst ansehen, nachdem du exercises/exercise01-benutzerdaten.mjs selbst versucht hast.
 */

import { check, summary } from "../exerciseChecker.mjs";

const userName = "Leonel";
let currentStatus = "offline";
const previousStatus = currentStatus;
currentStatus = "online";

check("Name bleibt Leonel", userName === "Leonel");
check("Aktueller Status ist online", currentStatus === "online");
check("Kopie bleibt offline", previousStatus === "offline");
summary();
