import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split(' ');
let A = BigInt(arr[0]);
let B = BigInt(arr[1]);

console.log(String((A * B) % BigInt(1000000007)));