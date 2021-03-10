import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const ABCarray = input.split(' ');
let A = parseInt(ABCarray[0]);
let B = parseInt(ABCarray[1]);
let C = parseInt(ABCarray[2]);

if (C === (A + B)) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}