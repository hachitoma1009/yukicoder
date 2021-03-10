import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const ABCDarray = input.split(' ');
let nABCDarray = [];
nABCDarray = ABCDarray.map(Number);
const A = nABCDarray[0];
const B = nABCDarray[1];
const C = nABCDarray[2];
const D = nABCDarray[3];

nABCDarray.sort(
    function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
);
//console.log(nABCDarray);

const a = nABCDarray[0];
const b = nABCDarray[1];
const c = nABCDarray[2];
const d = nABCDarray[3];

if ((a + 1 === b) && (b + 1 === c) && (c + 1 === d)) {
    console.log('Yes');
} else {
    console.log('No');
}