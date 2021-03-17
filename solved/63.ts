import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const LKarray = input.split(' ');
const L = parseInt(LKarray[0]);
const K = parseInt(LKarray[1]);

let result = Math.floor(L / (2 * K));
let answer = null;

if (L % (2 * K) === 0) {
    answer = K * (result - 1);
} else {
    answer = K * result;
}

console.log(answer);