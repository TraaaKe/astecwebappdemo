Correctif Netlify

Si Netlify affiche : Couldn't find any `pages` or `app` directory, c'est que le dossier racine configuré dans Netlify ne pointe pas sur le projet Next.js.

Solution recommandée :
- Pousser directement le contenu de ce dossier à la racine GitHub : app/, lib/, package.json, netlify.toml, etc.
- Ne pas pousser un dossier parent contenant seulement cdg-spotting-shop/.

Paramètres Netlify :
- Base directory : vide
- Build command : npm run build
- Publish directory : .next

Si tu gardes un sous-dossier cdg-spotting-shop dans ton repo GitHub :
- Base directory : cdg-spotting-shop
- Build command : npm run build
- Publish directory : .next
