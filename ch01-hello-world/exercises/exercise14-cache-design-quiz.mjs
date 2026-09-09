/**
 * EXERCICE 14 - Architecture et cache : quel choix ferais-tu ?
 * ===========================================================
 * Niveau : difficile
 *
 * Ce n'est pas un quiz de syntaxe. Tu dois justifier une decision de conception
 * uniquement avec les notions du chapitre.
 */

// Scenario A
// Une seule page contient une unique ligne JavaScript utilisee une seule fois.
// Choix possibles : inline ou fichier externe ?
// Donne le choix le plus raisonnable ET explique pourquoi l'autre n'est pas forcement faux.

// Scenario B
// Cinq pages du meme site utilisent exactement le meme script principal.
// Faut-il recopier le meme code dans les cinq pages ou utiliser un fichier externe commun ?
// Explique le role possible du cache du navigateur.

// Scenario C
// Une page possede deja <script src="app.js"></script>.
// Un collegue ajoute 20 lignes de code entre les balises de CE MEME element script.
// Pourquoi son architecture est-elle mauvaise, meme si son intention etait de regrouper le code ?

// Scenario D
// Deux fichiers externes differents doivent etre charges sur la meme page.
// Un collegue propose un seul element <script src="a.js" src="b.js"></script>.
// Sans inventer de nouvelle syntaxe, quelle structure faut-il utiliser selon ce chapitre ?

// Scenario E
// Tu lis un vieux projet qui contient type="text/javascript" partout.
// Est-ce une raison suffisante pour conclure que le JavaScript du projet est "ancien" ?
// Distingue le markup HTML du code JavaScript lui-meme.

/*
REPONSES OFFICIELLES
====================
A : inline peut etre parfaitement raisonnable pour un script tres simple. Un fichier externe
    n'est pas interdit, mais ajoute une separation qui n'apporte pas necessairement beaucoup ici.
B : fichier externe commun. Plusieurs pages peuvent referencer la meme ressource et le navigateur
    peut la mettre en cache au lieu de devoir la telecharger completement a chaque fois.
C : quand src est present, le contenu interne de ce meme element script est ignore. Les deux effets
    doivent etre separes en elements script distincts ou places correctement dans un fichier externe.
D : utiliser plusieurs elements script, un par fichier externe.
E : non. type="text/javascript" est du vieux markup HTML. Le code JavaScript contenu dans le projet
    peut etre simple ou moderne ; il faut analyser les deux niveaux separement.
*/
