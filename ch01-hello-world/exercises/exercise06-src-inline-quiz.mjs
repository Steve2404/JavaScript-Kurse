/**
 * EXERCICE 6 - src et code interne dans le meme script (niveau: moyen)
 * STOP : predit le resultat avant de regarder les reponses.
 */
// Bloc A
// <script src="external.js">
//   alert("INLINE");
// </script>
// external.js contient : alert("EXTERNAL");

// Bloc B
// <script src="external.js"></script>
// <script>alert("INLINE");</script>

/*
REPONSES OFFICIELLES
Bloc A : le script externe est charge ; le code interne du meme element script est ignore.
Bloc B : les deux scripts sont dans des elements distincts ; les deux peuvent etre executes.
*/
