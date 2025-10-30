// api/index.ts – Vercel serverless entry that reuses your Express app/routes
import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import serverless from 'serverless-http';
import { registerRoutes } from '../server/routes.js'; // note the .js when "type": "module"

const app = express();

// keep the same rawBody capture used in dev server
declare module 'http' {
  interface IncomingMessage { rawBody: unknown }
}
app.use(express.json({
  verify: (req, _res, buf) => { (req as any).rawBody = buf; }
}));
app.use(express.urlencoded({ extended: false }));

// mount your existing routes on this express app
await registerRoutes(app);

// Vercel expects a default (req, res) handler.
// serverless-http returns a handler that matches (req, res).
const handler = serverless(app);

// Export default handler for Vercel
export default async function vercelHandler(req: VercelRequest, res: VercelResponse) {
  // All API calls come here, e.g. /api/*
  return handler(req as any, res as any);
}
