import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let N = parseInt(input);
let answer = Math.floor(1.5 * N /1)

console.log(answer);