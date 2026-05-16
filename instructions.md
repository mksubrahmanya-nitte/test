# Hosting Instructions (Vercel)

Follow these steps to host your JG University redesign on Vercel.

## 1. Prepare your GitHub Repository
1. Initialize a git repository (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Host ready"
   ```
2. Create a new repository on GitHub.
3. Push your code:
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

## 2. Deploy to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** and select **"Project"**.
3. Import your GitHub repository.
4. **Framework Preset:** Select **Next.js** (it should be auto-detected).
5. **Root Directory:** `./`
6. **Build & Output Settings:** Default (Next.js settings).
7. **Environment Variables:**
   - For now, you don't need any for the frontend.
   - *Note: When you integrate Supabase later, you will add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` here.*
8. Click **Deploy**.

## 3. Verify Deployment
Once the build is complete, Vercel will provide you with a production URL (e.g., `your-project-name.vercel.app`).

## Future Steps (Supabase Integration)
When you are ready to integrate Supabase:
1. Create a Supabase project at [supabase.com](https://supabase.com).
2. Install the Supabase client: `npm install @supabase/supabase-js`.
3. Add your Supabase credentials to Vercel's environment variables.
4. Update your code to fetch data from Supabase.
