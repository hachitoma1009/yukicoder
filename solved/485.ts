import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let arr  = input.split(' ');
let A = parseInt(arr[0]);
let B = parseInt(arr[1]);
let x = B / A;

if ((B % A) === 0) {
    console.log(x);
} else {
    console.log("NO");
}