import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let N = parseInt(input);

if (N % 2 === 0) {
    console.log(N + 1);
} else {
    console.log(N);
}