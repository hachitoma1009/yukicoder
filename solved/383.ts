
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

let arr = input.split(' ');
let a = parseInt(arr[0]);
let b = parseInt(arr[1]);

let cha = 0;
let s = null;


if (a === b) {
    s = "0";
} else if (a < b) {
    s = `+${b-a}`
} else {
    s = `${b-a}`
}
console.log(s);