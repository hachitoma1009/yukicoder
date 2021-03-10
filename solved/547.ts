import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const N = parseInt(nlarray[0]);
const Sarray = nlarray[1].split(' ');
const Tarray = nlarray[2].split(' ');

for (let i = 0;i < N; i++) {
    if (Sarray[i] !== Tarray[i]) {
        console.log(i + 1);
        console.log(Sarray[i]);
        console.log(Tarray[i]);
        break;
    }
}

// console.log(N);
// console.log(Sarray);
// console.log(Tarray);