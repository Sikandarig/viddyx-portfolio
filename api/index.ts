// api/index.ts — Vercel serverless entry that reuses your Express routes
import express from "express";
import serverless from "serverless-http";
import { registerRoutes } from "../server/routes.js"; // note .js because "type":"module"

const app = express();

// Keep rawBody behavior from your dev server
declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}
app.use(
  express.json({
    verify: (req, _res, buf) => {
        
      req.rawBody = buf;
    },
  })
);
app.use(express.urlencoded({ extended: false }));

await registerRoutes(app);

// Wrap Express with serverless-http and export a default handler
const expressHandler = serverless(app);

export default async (req: any, res: any) => {
  return expressHandler(req, res);
};
