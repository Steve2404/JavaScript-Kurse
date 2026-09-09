# Chapitre 1 — Hello, world!

Ce chapitre pratique les notions vues dans le cours :

- différence entre JavaScript et environnement d'exécution ;
- navigateur vs Node.js ;
- `alert()` comme capacité fournie par le navigateur ;
- intégration inline avec `<script>` ;
- ancien markup (`type="text/javascript"`, `language="javascript"`, commentaires historiques) ;
- scripts externes avec `src` ;
- chemins relatifs, chemins depuis la racine du site et URL complète ;
- règle `src` + contenu inline ;
- plusieurs fichiers externes ;
- passage d'un script inline vers un fichier externe ;
- utilisation d'un même script externe par plusieurs pages ;
- intérêt du cache du navigateur ;
- diagnostic d'une structure de projet cassée.

## Progression pédagogique

Les exercices 1 à 8 servent surtout d'échauffement et d'application directe.

Les exercices 9 à 15 demandent davantage de raisonnement : classification des concepts, audit de vieux code, résolution de chemins dans des arborescences imbriquées, pièges `src` + inline, partage d'un script entre plusieurs pages, choix d'architecture et diagnostic final combinant plusieurs règles.

Le but est toujours :

**COMPRENDRE → RAISONNER À LA MAIN → PRÉDIRE → ÉCRIRE/CORRIGER → EXÉCUTER → EXPLIQUER.**

Les exercices HTML se testent dans un navigateur. Les quiz `.mjs` sont à lire et à résoudre avant toute exécution. Les comportements propres au navigateur ne doivent pas être présentés comme des comportements vérifiés avec Node.js.
