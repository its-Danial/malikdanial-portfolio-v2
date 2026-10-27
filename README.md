# Portfolio v2

Personal portfolio built with Next.js 14 (App Router), Tailwind CSS and Sanity CMS. The Sanity Studio is embedded at `/cms-studio`, and analytics run on Umami.

## Scripts

```bash
npm run dev      # local dev server
npm run build    # production build
npm run lint
npm run format
npx sanity schema extract --path schema.json && npx sanity typegen generate   # regenerate sanity.types.ts
```

## Environment variables

| Name                             | Required | Purpose                                                    |
| -------------------------------- | -------- | ---------------------------------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | yes      | Sanity project                                             |
| `NEXT_PUBLIC_SANITY_DATASET`     | yes      | Sanity dataset                                             |
| `NEXT_PUBLIC_SANITY_API_VERSION` | no       | Defaults to `2024-04-19`                                   |
| `NEXT_PUBLIC_UMAMI_ID`           | no       | Umami website id; the script is skipped when unset         |
| `NEXT_PUBLIC_SITE_URL`           | no       | Canonical URL, defaults to `https://www.malikdanial.xyz`   |
| `SANITY_REVALIDATE_SECRET`       | no       | Secret for the Sanity webhook that calls `/api/revalidate` |

## Instant content updates

Pages revalidate every 60 seconds. To publish instantly, add a Sanity GROQ webhook:

- URL: `https://www.malikdanial.xyz/api/revalidate`
- Trigger on: create, update, delete
- Projection: `{_type}`
- Secret: same value as `SANITY_REVALIDATE_SECRET`
