# Exercice 15 — Diagnostic final du chapitre

Niveau : difficile

Tu recuperes un mini-site casse. Tu dois le reparer **sans utiliser de notions qui arrivent plus tard dans le cours**.

Structure :

```text
exercise15-final-diagnostic/
├── index.html
├── pages/
│   └── help.html
└── js/
    ├── app.js
    └── help.js
```

## Mission

1. `index.html` doit charger `js/app.js`.
2. `pages/help.html` doit charger `js/app.js` puis `js/help.js`.
3. Aucun code inline ne doit rester dans le meme element `<script>` qu'un attribut `src`.
4. Le vieux markup inutile doit etre retire.
5. Explique pour chaque correction si tu corriges :
   - une regle HTML d'integration ;
   - un chemin de fichier ;
   - une confusion avec l'environnement ;
   - une forme legacy.
6. Avant de regarder le corrige, ecris sur papier l'ordre de tes decisions et la raison de chacune.

Le but est de combiner dans un seul probleme : environnement, HTML vs JavaScript, externalisation, chemins, legacy markup et plusieurs scripts externes.
