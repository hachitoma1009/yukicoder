import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr1 = input.split('\n');
const arr2 = arr1[0].split(' ');

let a = arr2[0];
let b = arr2[1];

console.log(b +' '+ a);