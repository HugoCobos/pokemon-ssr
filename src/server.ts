import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { render } from '@netlify/angular-runtime/common-engine.mjs';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));

const app = express();
const commonEngine = new CommonEngine();

export async function netlifyCommonEngineHandler(
  request: Request,
  context: any
): Promise<Response> {
  // Example API endpoints can be defined here.
  // Uncomment and define endpoints as necessary.
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from the API' });
  // }

  return await render(commonEngine);
}
