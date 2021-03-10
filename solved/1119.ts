import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const XYZarray = input.split(' ');
let X = parseInt(XYZarray[0]);
let Y = parseInt(XYZarray[1]);
let Z = parseInt(XYZarray[2]);

if (X % 3 === 0 || Y % 3 === 0 || Z % 3 === 0) {
    console.log('Yes');
} else {
    console.log('No');
}