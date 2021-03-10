import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const array = nlarray[0].split('');
const narray = array.map(Number);

let score = 0;
for (let i = 0;i < narray.length; i++) {
    if (narray[i] === 0) {
        score += 10;
    } else {
        score = score + narray[i];
    }
}
console.log(score);