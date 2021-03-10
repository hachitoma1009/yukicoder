import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const N = parseInt(input);

if (N % 2 === 0) {
    console.log(N / 2);
} else {
    console.log(Math.ceil(N / 2));
}