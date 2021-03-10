import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let n = parseInt(input);

if (n === 1) {
    console.log("square1001");
} else {
    console.log("Petr");
}