/**
 * EXERCICE 1 - JavaScript, navigateur et Node.js (niveau: facile)
 * ==================================================================
 *
 * Il n'y a pas de main() a lancer ici.
 * Pour chaque bloc, lis le code, ecris ta prediction, puis teste-le
 * seulement apres avoir repondu.
 *
 * -- Rappel du decoupage en "boites magiques" --
 * Une fonction peut etre imaginee comme une boite magique : on lui donne
 * des ingredients et elle effectue un travail. Mais dans ce premier chapitre,
 * les fonctions ne sont pas encore le sujet. Utilise surtout cette image pour
 * separer les roles : le code JavaScript est la recette, l'environnement
 * d'execution est la cuisine qui sait faire fonctionner cette recette.
 *
 * Regles testees :
 * - JavaScript est le langage.
 * - Le navigateur et Node.js sont deux environnements d'execution possibles.
 * - alert(...) est fourni par le navigateur ; ce n'est pas un mot-cle ECMAScript.
 */

// ------------------------------------------------------------------
// Bloc A
//
// Histoire : Tu donnes a Node.js une instruction qui n'utilise qu'une
// fonctionnalite disponible dans cet environnement.
//
// Reponse : (a completer : que se passe-t-il exactement ?)
// ------------------------------------------------------------------
// console.log("Hello, world!");

// ------------------------------------------------------------------
// Bloc B
//
// Histoire : Tu prends maintenant le premier exemple du navigateur et tu le
// donnes directement a Node.js. La syntaxe ressemble toujours a du JavaScript.
// Cela suffit-il pour que l'environnement connaisse le nom alert ?
//
// Reponse : (a completer : sortie normale ou erreur ? laquelle ?)
// ------------------------------------------------------------------
// alert("Hello, world!");

/*
==================================================================
REPONSES OFFICIELLES
Ne regardez qu'apres avoir repondu vous-meme.
Verifie avec Node.js v22.16.0.
==================================================================

Bloc A
-------
Verdict : le programme s'execute normalement.
Sortie exacte :
Hello, world!

Pourquoi : console.log est disponible dans l'environnement Node.js utilise
pour cette verification.

Bloc B
-------
Verdict : le programme leve une ReferenceError.
Message utile observe :
ReferenceError: alert is not defined

Pourquoi : le code est syntaxiquement valide, mais Node.js ne fournit pas
la fonction de navigateur alert(). Le point important est de separer le
langage JavaScript de ce que l'environnement d'execution ajoute.
*/
