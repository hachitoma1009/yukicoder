import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const Aarray = nlarray[0].split('');
const Barray = nlarray[1].split('');

Aarray.sort();
Barray.sort();

// let sum = 0;
// for (let i = 0;i < Aarray.length; i++) {
//     if (Aarray[i] === Barray[i]) {
//         sum += 1;
//     }
// }
// if (sum === Aarray.length) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

let result = 'YES';

for (let i = 0;i < Aarray.length; i++) {
    if (Aarray[i] === Barray[i]) {
        continue;
    } else {
        result = 'NO';
    }
}
console.log(result);