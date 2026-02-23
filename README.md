# LeadWing AI Marketing Site

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`

## Notes

- Update metadata and analytics hooks in `app/layout.tsx` when going live.

## Voiceflow chatbot setup (site-wide)

1. Add these values to `.env.local`:
   - `NEXT_PUBLIC_VOICEFLOW_PROJECT_ID`
   - `NEXT_PUBLIC_VOICEFLOW_VERSION_ID` (usually `production`)
2. Restart dev server after adding env vars.
3. Open any route and confirm the floating chatbot appears.

### Vercel

1. Go to Project Settings -> Environment Variables.
2. Add both `NEXT_PUBLIC_VOICEFLOW_*` variables for Production (and Preview if needed).
3. Redeploy the project.
4. Confirm chatbot loads on `https://leadwing.ai`.

## Free trial lead setup (Supabase + SendGrid)

1. Create a Supabase project and a table named `free_trial_leads` with columns:
   - `id` uuid, primary key, default `gen_random_uuid()`
   - `created_at` timestamp, default `now()`
   - `name`, `business`, `phone`, `email`, `trade`, `suburb`, `website`, `message`
2. Create a SendGrid account, verify a sender, and generate an API key.
3. Add environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `SENDGRID_API_KEY`
   - `NOTIFY_EMAIL` (recipient)
   - `FROM_EMAIL` (verified sender)
4. Restart the dev server after setting env vars.
