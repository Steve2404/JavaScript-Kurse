/**
 * EXERCICE 11 - Detective des chemins src
 * ========================================
 * Niveau : difficile
 *
 * Structure du projet :
 *
 * site/
 * ├── index.html
 * ├── app.js
 * ├── js/
 * │   ├── main.js
 * │   └── admin.js
 * └── pages/
 *     ├── help.html
 *     └── admin/
 *         └── dashboard.html
 *
 * Pour CHAQUE cas :
 * 1. dis si le chemin pointe vers le fichier voulu ;
 * 2. sinon, donne le bon src ;
 * 3. explique d'ou commence la resolution du chemin.
 */

// A. Dans site/index.html, charger site/app.js
//    <script src="./app.js"></script>

// B. Dans site/pages/help.html, charger site/js/main.js
//    <script src="js/main.js"></script>

// C. Dans site/pages/help.html, charger site/js/main.js
//    <script src="../js/main.js"></script>

// D. Dans site/pages/admin/dashboard.html, charger site/js/admin.js
//    <script src="../../js/admin.js"></script>

// E. Dans site/pages/admin/dashboard.html, charger site/app.js
//    <script src="../../app.js"></script>

// F. Depuis n'importe quelle page du MEME site, on suppose que la racine web
//    correspond a site/. Que signifie :
//    <script src="/js/main.js"></script>

// G. Quelle difference conceptuelle y a-t-il entre :
//    src="../js/main.js"
//    src="/js/main.js"
//    src="https://cdn.example.com/main.js"

/*
REPONSES OFFICIELLES
====================
A : correct. ./ part du dossier de index.html, donc site/.
B : incorrect. Depuis site/pages/, "js/main.js" viserait site/pages/js/main.js.
    Le bon chemin relatif est ../js/main.js.
C : correct. .. remonte de pages/ vers site/, puis entre dans js/.
D : correct. dashboard.html est dans pages/admin/. Deux .. ramènent a site/.
E : correct pour la meme raison : ../../app.js atteint site/app.js.
F : le slash initial signifie : partir de la racine du site, pas du dossier de la page.
    Si la racine web correspond a site/, /js/main.js vise site/js/main.js.
G : ../ est relatif au dossier de la page ; / part de la racine du site ;
    https://... est une URL complete qui designe directement une autre adresse.

Le but n'est pas de retenir des chaines de caracteres, mais de toujours demander :
"Quel est mon point de depart ?" puis "quel chemin dois-je parcourir ?".
*/
