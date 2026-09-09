# Site TEDxPenfeld — version 1

Site statique, sans framework, sans dépendance externe. Neuf pages publiées, plus une page 404.
Aucune police externe, aucun script tiers, aucun traceur, aucun cookie.

---

## Le domaine

**`tedxpenfeld.com` est le domaine confirmé du site.** Ce n'est plus un placeholder :
il ne reste rien à y substituer. Il est écrit tel quel dans `CNAME`, dans `sitemap.xml`
(balises `<loc>` et `hreflang`), dans `robots.txt` (ligne `Sitemap:`) et dans chaque
fichier `.html` (`<link rel="canonical">`, `<link rel="alternate" hreflang="…">`,
`<meta property="og:url">`). Ne pas lancer de rechercher-remplacer dessus.

---

## Arborescence du dépôt

```
.
├── .nojekyll                 Désactive le traitement Jekyll de GitHub Pages
├── CNAME                     Domaine personnalisé (une ligne, rien d'autre)
├── robots.txt                Autorise l'indexation, déclare le sitemap
├── sitemap.xml               Les neuf pages, avec hreflang FR/EN
├── README.md                 Ce fichier
├── 404.html                  Page d'erreur (servie automatiquement par GitHub Pages)
│
├── index.html                FR — Accueil
├── le-projet.html            FR — Le projet
├── a-propos.html             FR — À propos
├── nous-soutenir.html        FR — Nous soutenir
├── contact.html              FR — Contact (deux formulaires)
├── mentions-legales.html     FR — Mentions légales
│
├── en/
│   ├── index.html            EN — Home
│   ├── the-project.html      EN — The project
│   └── about.html            EN — About
│
└── assets/
    ├── css/style.css         Feuille de style unique
    ├── js/main.js            Ouverture du menu mobile, rien d'autre
    └── img/                  Logos officiels (voir LISEZ-MOI.txt dans ce dossier)
```

Les pages anglaises sont volontairement plus courtes et plus stables. Tout ce qui bouge souvent — actualités, avancement, annonces — reste en français seulement. `Nous soutenir`, `Contact` et `Mentions légales` n'ont pas de version anglaise : les liens anglais pointent vers les pages françaises correspondantes.

---

## Chemins relatifs

Tous les liens internes et tous les appels de ressources (`assets/css/style.css`,
`assets/js/main.js`, le logo) utilisent des **chemins relatifs**, jamais des chemins
absolus commençant par `/`. Les pages du dossier `en/` remontent d'un cran avec `../`
pour atteindre la racine.

Conséquence : le site fonctionne à l'identique **à la racine d'un domaine**
(`https://tedxpenfeld.com/`) et **dans un sous-dossier**
(par exemple l'URL provisoire `https://<compte>.github.io/<depot>/`). Il se prévisualise
aussi **en ouvrant `index.html` directement depuis le disque**, sans serveur local :
un double-clic sur le fichier suffit, la navigation, la feuille de style et le menu
mobile fonctionnent.

Les URL absolues des balises `<link rel="canonical">`, `<link rel="alternate"
hreflang="…">` et `<meta property="og:url">`, ainsi que `sitemap.xml` et `robots.txt`,
ne sont pas concernées : ce sont des URL complètes en `https://tedxpenfeld.com/…`,
et elles doivent le rester.

**`404.html` fait exception et conserve des chemins absolus.** Cette page est servie
par le serveur depuis n'importe quelle URL inexistante, à n'importe quelle profondeur ;
un chemin relatif y serait résolu par rapport à l'URL demandée et casserait. Ne pas la
convertir.

---

## Activer GitHub Pages (déploiement depuis une branche)

1. Pousser le contenu de ce dossier à la **racine** d'un dépôt GitHub (le dépôt peut être public ou privé selon la formule du compte).
2. Dans le dépôt : **Settings → Pages**.
3. Section **Build and deployment**, champ **Source** : choisir **Deploy from a branch**.
4. Champ **Branch** : sélectionner `main`, et le dossier `/ (root)`. Valider avec **Save**.
5. Attendre la fin du déploiement (quelques minutes la première fois). L'URL provisoire `https://<compte>.github.io/<depot>/` s'affiche en haut de la page Settings → Pages.

Le fichier `.nojekyll` est présent pour que GitHub Pages serve les fichiers tels quels, sans passer par Jekyll.

## Brancher le domaine

1. Chez le registrar du domaine, créer les enregistrements DNS :
   - pour l'apex (`tedxpenfeld.com`), quatre enregistrements **A** vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (et, si le registrar le permet, les quatre AAAA correspondants) ;
   - pour `www.tedxpenfeld.com`, un enregistrement **CNAME** vers `<compte>.github.io`.
2. Dans **Settings → Pages → Custom domain**, saisir le domaine et valider. GitHub écrit ou met à jour le fichier `CNAME` du dépôt — vérifier après coup qu'il ne contient toujours qu'une seule ligne.
3. Attendre la propagation DNS, puis cocher **Enforce HTTPS** dès que la case devient disponible (le certificat est émis automatiquement).

---

## Liste des `[à compléter]` restants

À renseigner par l'équipe avant la mise en ligne.

**`mentions-legales.html`**
- Adresse du siège social de Penfeld Conférences (section « Éditeur du site »)
- Numéro RNA de l'association (section « Éditeur du site »)
- Adresse de contact (section « Éditeur du site »)
- Nom du directeur de la publication, président de l'association (section « Directeur de la publication »)
- Adresse de contact pour l'exercice des droits RGPD (section « Données personnelles »)

**`contact.html`**
- Adresse de contact dans le texte RGPD du formulaire de contact
- Adresse de contact dans le texte RGPD du formulaire de lettre d'information
- `action="#REMPLACER-PAR-URL-FORMULAIRE"` — URL du service de traitement du formulaire de contact
- `action="#REMPLACER-PAR-URL-BREVO"` — URL fournie par l'outil de newsletter

**`index.html` et `en/index.html`**
- `action="#REMPLACER-PAR-URL-BREVO"` — URL fournie par l'outil de newsletter

L'adresse de contact doit être au nom de l'événement, jamais une adresse personnelle.

**Autres emplacements en attente**
- Commentaire `FIL DE L'ÉDITION` dans `index.html` et `THEME` dans `en/index.html` : une phrase sur le fil de l'édition, à ajouter une fois le thème arrêté.
- Fichiers de logo dans `assets/img/` : l'en-tête de toutes les pages appelle désormais `logo-tedxpenfeld.svg`, à déposer là (voir la section « Le logo »).

---

## Textes officiels anglais : à insérer avant toute mise en ligne de `/en`

**Les pages `en/index.html` et `en/about.html` ne doivent pas être publiées en l'état.**

Trois blocs officiels TED y sont remplacés par un paragraphe temporaire `[Texte officiel TED à insérer avant la mise en ligne.]` :

| Fichier | Bloc à remplir |
|---|---|
| `en/index.html` | « What is TEDx? », avec TEDxPenfeld inséré aux emplacements prévus |
| `en/about.html` | « About TEDx, x = independently organized event » |
| `en/about.html` | « About TED », avec ses liens d'origine |

Ces textes doivent être **copiés mot pour mot depuis la source TED** (ressources organisateurs). Ils ne se traduisent pas depuis la version française et ne se réécrivent pas. Chaque emplacement est signalé dans le code par un commentaire HTML en majuscules.

Même remarque pour la version française du texte « À propos de TED » dans `a-propos.html` : elle comporte des liens dans la version d'origine (podcasts, séries, TED-Ed, Audacious Project, Countdown, TED Democracy, liste des programmes, réseaux sociaux). Les reprendre depuis la source TED plutôt que de les recréer.

---

## Checklist de conformité TEDx

À repasser avant la mise en ligne.

- [ ] `TEDxPenfeld` écrit en un seul mot partout, TED en majuscules, x minuscule. Aucune abréviation, jamais « TEDx » seul.
- [ ] Le logo est celui produit par le générateur officiel TEDx. Jamais le logo TED, nulle part.
- [ ] Lien visible vers le programme TEDx sur ted.com depuis la page d'accueil.
- [ ] Texte officiel « Qu'est-ce que TEDx ? » en page d'accueil, reproduit sans modification.
- [ ] Mention obligatoire en pied de page, sur toutes les pages.
- [ ] Textes officiels « À propos de TEDx » et « À propos de TED » sur la page À propos.
- [ ] Aucun logo partenaire en page d'accueil. Les logos vivent uniquement sur la page Nous soutenir, toujours plus petits que le logo TEDxPenfeld.
- [ ] Aucun nom d'intervenant, aucun lieu, aucun partenaire non signé.
- [ ] Aucun montant.
- [ ] Mention RGPD au moment de la collecte, pas seulement en mentions légales.

---

## Ce qui viendra en version 2

Une fois signé ou autorisé : le lieu, les premiers intervenants, le programme. Rien avant.

---

## Identité visuelle — « La faille »

Direction artistique retenue le 9 septembre 2026 (esquisse B).

**Le principe.** Brest a été reconstruite selon un plan orthogonal strict.
Ce plan est traversé en diagonale par la Penfeld, un fleuve antérieur au plan,
que la ville n'a pas pu redresser et que l'on ne voit pas depuis la rue.
Une grille rigoureuse, coupée par une seule diagonale : un cadre, et ce qui lui échappe.

**Les trois règles, et il n'y en a pas d'autres.**

1. **Un seul angle**, la variable CSS `--angle` (-24deg). Il pilote le trait rouge,
   la bande du bandeau, le bord du bouton, le pied de page et la coupe des futures
   photographies. Changer cette valeur change toute l'identité.
2. **Une seule diagonale par composition.** Deux, et ça devient du décor.
3. **Dominante claire.** Le béton des façades est la couleur de fond. L'ardoise
   sombre est réservée au pied de page et au texte. Le rouge TED reste un accent,
   jamais un aplat de fond.

**Les couleurs**

| Rôle | Valeur | Usage |
|---|---|---|
| Béton | `#f1eee8` | Fond dominant |
| Béton clair | `#faf8f5` | Bandeau |
| Ardoise | `#232b2c` | Texte et pied de page. Jamais le noir pur |
| Rouge TED | `#eb0028` | Accent seul, jamais en fond derrière le logo |

**Les photographies.** La classe `.image-faille` est prête : coupe sur le même angle,
contraste relevé, saturation abaissée. Tant qu'il n'y a pas de photographies de
l'équipe, l'identité repose sur la typographie et la grille — **ne pas combler avec
des images de banque**.

**Ce qu'on ne fait jamais.** Le gwenn ha du en aplat. Les phares, les goélands, les
bateaux. Les vues aériennes. L'imagerie militaire ou de surveillance. Le bleu marine.

**Un régime sombre** existe en réserve pour le fond de scène uniquement, où
l'obscurité est la règle de toute façon. Il ne descend pas sur les supports imprimés :
une dominante sombre coûte trois fois plus d'encre et rend mal sur papier non couché.

### Archive

`assets/css/style-neutre.css` conserve la première version, sobre et sans parti pris.
Elle n'est référencée par aucune page. Pour y revenir :

```bash
cp assets/css/style-neutre.css assets/css/style.css
```

---

## Le logo

Le logo vient du **générateur officiel TEDx**, et de lui seul. On ne le redessine pas,
on ne le recompose pas à la main, on n'utilise jamais le logo TED à sa place.

**Les deux fichiers attendus**, à déposer dans `assets/img/` :

| Fichier | Usage |
|---|---|
| `logo-tedxpenfeld.svg` | Version fond clair, TEDx en rouge et Penfeld en noir. C'est celle que le site appelle dans l'en-tête des dix pages. **Le nom de fichier est obligatoire**, il est référencé tel quel. |
| `logo-tedxpenfeld-blanc.svg` | Version fond sombre, Penfeld en blanc. Pour le pied de page, le fond de scène et tout support sombre. |

`favicon.svg` et `favicon.png` se génèrent à partir du logo, dans le même dossier.
`assets/img/LISEZ-MOI.txt` reprend ces consignes sur place.

**Fond blanc ou noir, jamais une couleur.** Le logo ne se pose que sur du blanc ou du
noir. C'est précisément pourquoi l'en-tête du site est blanc alors que la dominante du
site est le béton clair (`#f1eee8`) : l'en-tête est l'exception assumée à la dominante,
pour que le logo repose sur un fond conforme. Le rouge TED reste un accent, jamais un
aplat derrière le logo.

**Zone de protection.** Une marge libre entoure le logo. Aucun texte, aucun trait,
aucune image, aucune diagonale ne vient s'en approcher.

**Logos partenaires.** Toujours plus petits que le logo TEDxPenfeld, et jamais en page
d'accueil : ils vivent uniquement sur `nous-soutenir.html`.

**Le domaine.** `tedxpenfeld.com` est **confirmé**. Ce n'est plus un placeholder à
remplacer, ni dans les fichiers du site, ni dans les gabarits de communication.
