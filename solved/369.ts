import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const N = parseInt(nlarray[0]);
const v = parseInt(nlarray[2]);

const Aarray = nlarray[1].split(' ');
let sum = 0;
let result = null;

for (let i = 0; i < Aarray.length; i++) {
    sum = sum + parseInt(Aarray[i]);
}

result = sum - v;

console.log(result);