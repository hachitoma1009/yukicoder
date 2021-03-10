import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const array = input.split(' ');
const Aarray = [];
const Barray = [];
let nAarray =[];
let nBarray =[];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
        Barray.push(array[i]);
    } else {
        Aarray.push(array[i]);
    }
}

nAarray = Aarray.map(Number);
nBarray = Barray.map(Number);
// console.log(nAarray);
// console.log(nBarray);


// for (let j = 0; j < Aarray.length; j++) {
// sum = sum + Math.pow(nAarray[j], nBarray[j]);
// }

// if (sum % 2 === 0) {
//     console.log(':-)')
// } else {
//     console.log(':-(')
// }
let oddAarray = [];

for (let i = 0;i < Aarray.length; i++) {
    if (nAarray[i] % 2 !== 0) {
        oddAarray.push(nAarray[i]);
    }
}

if (oddAarray.length % 2 === 0) {
    console.log(':-)')
} else {
    console.log(':-(')
}