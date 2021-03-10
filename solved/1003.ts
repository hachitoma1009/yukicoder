import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let N = parseInt(input);

if (N % 6 === 0) {
    console.log('Yes');
} else {
    console.log('No');
}