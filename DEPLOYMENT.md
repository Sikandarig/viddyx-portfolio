# Deploying to Vercel

Vercel runs `npm install --production` (or `npm install --omit=dev`) by default before invoking your build command. In this repository the build script (`npm run build`) executes `vite build` followed by an esbuild command, and both of those CLIs are declared in `devDependencies`.

When only production dependencies are installed the build fails with `sh: 1: vite: not found`, because the Vite binary is skipped. Ensure that Vercel installs the dev dependencies during the build step:

1. Open your project in the Vercel dashboard.
2. In **Settings → Build & Development Settings**, keep the **Root Directory** pointed at the repository root (not the `client/`
   folder). In the same section set the **Install Command** to one of:
   - `npm install --include=dev`
   - `npm install --production=false`
   Running the install command inside `client/` (for example `npm install --prefix client …`) will fail because there is no
   separate `client/package.json`.
3. Alternatively, add an environment variable `NPM_CONFIG_PRODUCTION=false` so that dev dependencies are included.
4. Keep the build command as `npm run build`.
5. Trigger a new deployment.

If you prefer to keep Vercel’s configuration in source control, add a `vercel.json` file at the repository root:

```json
{
  "installCommand": "npm install --include=dev",
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "framework": null
}
```

This mirrors the dashboard settings, ensuring that the install step runs from the project root, dev dependencies are available,
and the static output from Vite (`dist/public`) is published.

After Vercel installs the dev dependencies, the Vite and esbuild binaries are available and the build completes successfully.
