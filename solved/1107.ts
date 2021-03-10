import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const Aarray = input.split(' ');
let A1 = parseInt(Aarray[0]);
let A2 = parseInt(Aarray[1]);
let A3 = parseInt(Aarray[2]);
let A4 = parseInt(Aarray[3]);

if ((A1 < A2) && (A3 > A4)) {
    console.log('YES');
} else {
    console.log('NO');
}