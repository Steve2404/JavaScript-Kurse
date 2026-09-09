/**
 * EXERCICE 12 - Les pieges de src + code inline
 * ==============================================
 * Niveau : difficile
 *
 * Pour chaque bloc, ne dis pas seulement "ca marche / ca ne marche pas".
 * Ecris exactement :
 * - quel fichier externe est charge ;
 * - quel code inline est execute ou ignore ;
 * - combien de messages apparaissent ;
 * - pourquoi.
 *
 * On suppose :
 * external.js contient : alert("EXTERNAL");
 * second.js   contient : alert("SECOND");
 */

// Bloc A
// <script src="external.js">
//   alert("INLINE-A");
// </script>

// Bloc B
// <script src="external.js"></script>
// <script>
//   alert("INLINE-B");
// </script>

// Bloc C
// <script src="external.js">
//   alert("INLINE-C1");
//   alert("INLINE-C2");
// </script>
// <script src="second.js"></script>

// Bloc D
// <script>
//   alert("INLINE-D1");
// </script>
// <script src="external.js"></script>
// <script>
//   alert("INLINE-D2");
// </script>

// Bloc E
// Un collegue veut "economiser un element script" et ecrit :
// <script src="external.js">alert("BONUS");</script>
// Explique pourquoi cette idee est conceptuellement mauvaise et propose
// la structure correcte sans changer les deux effets voulus.

/*
REPONSES OFFICIELLES
====================
A : external.js est charge. INLINE-A est ignore dans ce meme element script.
B : external.js est charge puis le second element script contient son propre code inline.
    Les deux effets sont donc separes et peuvent etre executes.
C : le contenu inline C1/C2 du premier element est ignore ; external.js est charge.
    Le deuxieme element charge second.js.
D : trois elements distincts : INLINE-D1, external.js puis INLINE-D2 appartiennent
    a trois blocs separes. La regle src + contenu ignore ne s'applique pas aux voisins.
E : src et code inline ne doivent pas etre combines dans le meme element pour obtenir
    les deux effets. Il faut deux elements script distincts : un avec src, un inline.

Piege central : la regle concerne LE MEME element script. Elle ne signifie pas
"des qu'une page contient src, tout le JavaScript inline de la page est ignore".
*/
