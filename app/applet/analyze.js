const fs = require('fs');
const js = fs.readFileSync('bundle.js', 'utf8');

const urls = [...js.matchAll(/https?:\/\/[^"'\\s)]+/g)].map(m => m[0]);
console.log('URLs:', [...new Set(urls)]);

const imgRegex = /["'\/][a-zA-Z0-9_\-./]+\.(png|jpg|jpeg|webp|svg)/g;
const imgs = [...js.matchAll(imgRegex)].map(m => m[0]);
console.log('Images:', [...new Set(imgs)]);
