/** EXERCICE 5 - Comprendre les chemins de src (niveau: moyen) */
// Structure : site/index.html, site/app.js, site/js/main.js
// Bloc A : <script src="app.js"></script>      Reponse : quelle cible ?
// Bloc B : <script src="./app.js"></script>    Reponse : meme cible que A ?
// Bloc C : <script src="js/main.js"></script>  Reponse : quelle cible ?
// Bloc D : <script src="/js/main.js"></script> Reponse : d'ou commence la recherche ?
// Bloc E : <script src="https://example.com/lib.js"></script> Reponse : quel type d'adresse ?
/*
REPONSES OFFICIELLES
A : app.js dans le dossier courant de la page.
B : meme idee que A ; ./ indique explicitement le dossier courant.
C : main.js dans le sous-dossier js relatif a la page.
D : chemin depuis la racine du site.
E : URL complete.
*/
