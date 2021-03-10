import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let N = parseInt(input);

console.log(N * 10);