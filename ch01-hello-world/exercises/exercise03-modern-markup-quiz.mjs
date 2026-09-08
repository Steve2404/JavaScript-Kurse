/**
 * EXERCICE 3 - Markup moderne et ancien (niveau: facile)
 * =======================================================
 * Rappel express du decoupage en "boites magiques" : voir Exercise 01.
 * Il n'y a rien a executer automatiquement. Pour chaque bloc, decide si la
 * forme appartient au HTML moderne normal, a un ancien style encore visible
 * dans du legacy code, ou a un cas moderne particulier.
 */
// Bloc A - Reponse : necessaire aujourd'hui ou ancien markup ?
// <script type="text/javascript"> ... </script>

// Bloc B - Reponse : moderne ou obsolete ?
// <script language="javascript"> ... </script>

// Bloc C - Reponse : technique moderne ou historique ?
// <!--
// alert("Hello");
// //-->

// Bloc D - Reponse : obsolete ou cas moderne particulier ?
// <script type="module" src="app.js"></script>

/*
REPONSES OFFICIELLES
Bloc A : ancien markup ; type="text/javascript" n'est pas requis pour un script normal moderne.
Bloc B : obsolete ; language="javascript" est un ancien attribut HTML.
Bloc C : technique historique de compatibilite avec de tres vieux navigateurs.
Bloc D : cas moderne particulier. type="module" a une signification actuelle pour les modules JavaScript.
*/
