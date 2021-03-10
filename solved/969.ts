import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let X  = parseInt(input);

if (X === 0 || X === 4 || X === 10) {
    console.log('Yes');
} else {
    console.log('No');
}