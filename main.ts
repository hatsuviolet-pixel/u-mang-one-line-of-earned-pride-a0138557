import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
const dir = join(process.cwd(), 'output');
writeFileSync(join(dir, 'entry.txt'), "She held her first placed ribbon close, eyes fixed on the small hands that had stitched every seam through long nights alone.");
