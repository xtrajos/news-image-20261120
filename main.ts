// News-image entry (Node 22, standard library only): the image is entry.png
// beside this file, and the program copies it to /output/entry.png. The copy
// is byte-for-byte, so running the program twice writes the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) throw new Error('entry.png is missing next to main.ts');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

