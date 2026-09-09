# Exercice 13 — Un script partagé par plusieurs pages

Niveau : difficile

Tu dois faire fonctionner deux pages HTML avec **un seul fichier JavaScript partagé**.

Structure :

```text
exercise13-shared-script/
├── index.html
├── pages/
│   └── about.html
└── js/
    └── shared.js
```

Objectifs :

1. Corrige le `src` de `index.html` pour charger `js/shared.js`.
2. Corrige le `src` de `pages/about.html` pour charger **le même** fichier `js/shared.js`.
3. N'ajoute pas une copie de `shared.js` dans `pages/`.
4. Avant de modifier le code, dessine mentalement le chemin à partir du dossier de chaque page.
5. Explique ensuite pourquoi une ressource externe commune peut être intéressante quand plusieurs pages l'utilisent, notamment vis-à-vis du cache du navigateur.

Le but est de comprendre qu'un même fichier physique peut être référencé avec des chemins relatifs différents selon l'emplacement de la page HTML.
