# Bella’Studio — site vitrine GitHub Pages

Site statique HTML/CSS/JS pour présenter l’univers Bella’Studio : Bella’Odyssée, Bella’Secret, Bella’Food, Bella’Even’s, Vilo’Assistance et Bella’Structure.

## Fichiers

- `index.html` : page principale du site
- `assets/styles.css` : design complet responsive
- `assets/script.js` : menu mobile + animation + année automatique
- `bella-secret-home.html` : page privée Bella’Secret Home avec vérification 18+
- `assets/secret-home.css` : design de la page Bella’Secret Home
- `assets/age-gate.js` : vérification déclarative de majorité via session navigateur
- `assets/logo-bella-secret-home.jpeg` : logo Bella’Secret Home
- `assets/favicon.svg` : favicon BØ
- `.nojekyll` : évite le traitement Jekyll si publication directe depuis la racine

## Publication rapide sur GitHub Pages

1. Créer un dépôt GitHub nommé `votre-nom-utilisateur.github.io` pour un site principal, ou `bellastudio` pour un site projet.
2. Importer tous les fichiers de ce dossier à la racine du dépôt.
3. Aller dans `Settings` → `Pages`.
4. Dans `Build and deployment`, choisir `Deploy from a branch`.
5. Sélectionner la branche `main` et le dossier `/root`, puis enregistrer.
6. Activer `Enforce HTTPS` quand l’option est disponible.

## Liens à personnaliser

Dans `index.html`, remplacez si besoin :

- WhatsApp : `https://wa.me/594694094705`
- SquareUp : `https://squareup.com/appointments/book/LV01B8ASSA2E2`
- SumUp : `https://bella-odyssee.sumupstore.com/page/bellaodyssee`
- Email : `bella.odyssee@hotmail.com`

## Prochaine évolution conseillée

- Ajouter les vrais logos Bella’Studio et Bella’Odyssée dans `assets/`.
- Ajouter des photos produits/prestations authentiques.
- Créer une page séparée par univers : `beaute.html`, `secret.html`, `food.html`, `events.html`, `admin.html`.
- Ajouter un domaine personnalisé quand la marque sera prête.


## Page Bella’Secret Home 18+

La page `bella-secret-home.html` s’ouvre depuis la vitrine principale. Elle affiche une vérification de majorité avant l’accès au contenu. Cette vérification est déclarative et améliore le parcours client, mais elle ne remplace pas les obligations légales, les contrôles commerciaux ou la vérification réglementaire des produits avant vente.

À personnaliser si besoin :

- Numéro WhatsApp Bella’Secret Home : `https://wa.me/594694356037`
- Prix produits vitrines : dans `bella-secret-home.html`
- Textes de conformité : section `Note importante`
