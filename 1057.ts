import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const ABarray = input.split(' ');
 let A = parseInt(ABarray[0]);
 let B = parseInt(ABarray[1]);

if (A === B) {
    console.log(A);
} else if (A > B) {
    console.log(B);
} else if (A < B) {
    console.log(A);
}