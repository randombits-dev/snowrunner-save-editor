const fs = require('fs');

const data = fs.readFileSync('../src/definitions/en2.json', 'utf8');
const lines = data.split('\n');
// remove duplicates
const uniqueLines = Array.from(new Set(lines));
fs.writeFileSync('../src/definitions/en3.json', uniqueLines.join('\n'));
