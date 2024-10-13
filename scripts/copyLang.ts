const fs = require('fs');

import * as data1 from '../src/definitions/en.json';
import * as data2 from '../src/definitions/en3.json';

// const data = JSON.parse(fs.readFileSync('../src/definitions/en.json', 'utf8'));
// const data2 = JSON.parse(fs.readFileSync('../src/definitions/en2.json', 'utf8'));

const keys = Object.keys(data1.default);
const keys2 = Object.keys(data2.default);

// show keys that are in data but not in data2
const diff = keys.filter(x => !keys2.includes(x));
console.log(diff);

const result = data2.default;
// console.log(result);

// add to data2
diff.forEach(key => {
  result[key] = data1[key];
});

fs.writeFileSync('../src/definitions/en4.json', JSON.stringify(result));
