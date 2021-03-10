import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const array = input.split('');
let resultarray = [];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i].match(/^[0-9]*$/)) {
        resultarray.push(parseInt(array[i]));
    }
}

for (let j = 0; j < resultarray.length; j++) {
    sum = sum + resultarray[j];
}
console.log(sum);