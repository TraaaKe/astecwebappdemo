# CDG Spotting Shop

MVP Next.js pour vendre des vidéos de spotting CDG : catalogue public filtrable, paiement Stripe Checkout, back office protégé par mot de passe, upload aperçu/miniature via Supabase Storage et livraison manuelle du lien SwissTransfer avec email automatique Resend.

## Stack

- Next.js App Router
- Supabase Postgres + Storage
- Stripe Checkout + Webhook
- Resend
- Netlify avec `@netlify/plugin-nextjs`

## Installation locale

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Configuration Supabase

1. Créer un projet Supabase.
2. Ouvrir SQL Editor.
3. Exécuter `supabase/schema.sql`.
4. Vérifier que le bucket `video-assets` existe et est public.
5. Renseigner dans `.env.local` :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

## Configuration Stripe

Créer un webhook vers :

```txt
https://ton-domaine.netlify.app/api/stripe/webhook
```

Événement à écouter :

```txt
checkout.session.completed
```

Variables à ajouter :

```txt
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Configuration Resend

Variables :

```txt
RESEND_API_KEY=
FROM_EMAIL="CDG Spotting <ton-email@ton-domaine.fr>"
ADMIN_NOTIFICATION_EMAIL=ton-email@ton-domaine.fr
```

En test, Resend autorise souvent `onboarding@resend.dev`. En production, il faut valider ton domaine.

## Admin

URL :

```txt
/admin/login
```

Variables :

```txt
ADMIN_PASSWORD=mot-de-passe-fort
ADMIN_SESSION_SECRET=chaine-longue-aleatoire
```

## Déploiement Netlify

1. Push le repo sur GitHub.
2. Dans Netlify, créer un nouveau site depuis ce repo.
3. Build command : `npm run build`.
4. Publish directory : `.next`.
5. Ajouter toutes les variables d’environnement dans Netlify.
6. Redéployer.
7. Mettre à jour `NEXT_PUBLIC_SITE_URL` avec l’URL Netlify finale.
8. Créer le webhook Stripe avec l’URL finale.

## Flux commande

1. Le visiteur sélectionne une vidéo.
2. Stripe Checkout encaisse le paiement.
3. Le webhook crée une commande `paid_awaiting_delivery`.
4. L’admin colle un lien SwissTransfer dans `/admin/orders`.
5. Resend envoie le lien à l’acheteur et la commande passe en `delivered`.
