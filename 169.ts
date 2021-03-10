import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split('\n');
let K = parseInt(arr[0]);
let S = parseInt(arr[1]);

let answer = S * 100 / (100 - K);
console.log(Math.floor(answer));