import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const Y = parseInt(input);
console.log(2017 - Y);