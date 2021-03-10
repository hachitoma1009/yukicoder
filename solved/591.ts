import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split('\n');
let T1 = arr[0];
let T2 = arr[1];

console.log(`(${T1}${T2}${T1})/`)