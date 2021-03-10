import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const NGVarray = input.split(' ');
const N = parseInt(NGVarray[0]);
const G = parseInt(NGVarray[1]);
const V = parseInt(NGVarray[2]);

let answer = 0;
answer = G * (Math.floor(N / 5)) / V;
console.log(answer);