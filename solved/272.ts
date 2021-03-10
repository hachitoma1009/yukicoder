import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const X = parseInt(input);

if(X === 0) {
    console.log("1");
} else if (X === 1) {
    console.log("0");
}