/**
 * EXERCICE 9 - Audit conceptuel : langage, HTML ou environnement ?
 * ================================================================
 * Niveau : moyen / difficile
 *
 * But : ne plus apprendre des mots par coeur. Pour chaque element ci-dessous,
 * classe-le dans UNE des categories suivantes :
 *
 * A = langage JavaScript
 * B = HTML / integration du script
 * C = environnement d'execution
 * D = historique / legacy markup
 *
 * Puis explique en une phrase POURQUOI.
 *
 * STOP : ne regarde pas les reponses avant d'avoir tout classe.
 */

// 1. alert("Bonjour")
// 2. <script> ... </script>
// 3. Node.js
// 4. type="text/javascript"
// 5. src="js/app.js"
// 6. navigateur
// 7. language="javascript"
// 8. fichier .js contenant du code
// 9. <!-- ... //-->
// 10. type="module"
// 11. chemin /js/app.js
// 12. URL https://example.com/app.js

/*
REPONSES OFFICIELLES
====================
1 -> C. alert est fourni par le navigateur dans le contexte etudie ici.
2 -> B. script est un element HTML qui permet d'integrer JavaScript.
3 -> C. Node.js est un environnement d'execution JavaScript.
4 -> D. Ancien markup HTML, inutile pour un script classique moderne.
5 -> B. src est un attribut HTML qui indique ou trouver le script externe.
6 -> C. Le navigateur est un environnement d'execution.
7 -> D. Ancien attribut HTML devenu obsolete.
8 -> A. Le fichier contient du code JavaScript ; le fichier n'est pas lui-meme l'environnement.
9 -> D. Ancienne technique de compatibilite avec de tres vieux navigateurs.
10 -> B. type="module" est un cas moderne particulier de l'integration HTML des scripts.
11 -> B. C'est une adresse de ressource interpretee dans le contexte de la page/site.
12 -> B. C'est une adresse complete utilisee par src pour charger une ressource externe.

Point cle : une meme ligne peut CONTENIR du JavaScript et utiliser en meme temps
une capacite fournie par l'environnement. C'est exactement pourquoi il faut
separer "le langage" de "ce que l'environnement fournit".
*/
