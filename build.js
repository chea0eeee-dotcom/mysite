const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const output = path.join(root, 'dist');
const assets = ['index.html', 'styles.css', 'script.js'];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const asset of assets) {
  fs.copyFileSync(path.join(root, asset), path.join(output, asset));
}

console.log(`Built ${assets.length} static assets into dist/`);
