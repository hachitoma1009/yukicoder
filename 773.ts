import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const ABarray = input.split(' ');
const A = parseInt(ABarray[0]);
const B = parseInt(ABarray[1]);

if (B <= 22 || A <= 26) {
    console.log('3');
} else if (B <= 23 || A <= 25) {
    console.log('2');
} else if (B <= 24 || A <= 24 ) {
    console.log('1');
} else if (A <= 22 || 26 <= B) {
    console.log('0');
}