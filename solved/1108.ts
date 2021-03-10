import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr1 = input.split('\n');
const arr2 = arr1[0].split(' ');
let N = parseInt(arr2[0]);
let H = parseInt(arr2[1]);
const arr3 = arr1[1].split(' ');

let result = null;
let rarr = [];

for (let i = 0; i < N ; i++) {
    result = parseInt(arr3[i]) + H;
    rarr.push(result);
}
console.log(rarr.join(' '));