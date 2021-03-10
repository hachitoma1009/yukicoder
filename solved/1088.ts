import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const ABarray = input.split(' ');
const A = parseInt(ABarray[0]);
const B = parseInt(ABarray[1]);

console.log(A + B);