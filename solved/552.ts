import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let N = BigInt(input);

console.log(String(N * BigInt(10)));