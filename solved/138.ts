import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split('\n');
const arr1 = arr[0].split('.');
const arr2 = arr[1].split('.');

let A0 = parseInt(arr1[0]);
let B0 = parseInt(arr1[1]);
let C0 = parseInt(arr1[2]);

let A1 = parseInt(arr2[0]);
let B1 = parseInt(arr2[1]);
let C1 = parseInt(arr2[2]);

if (A1 < A0) {
    console.log('YES');
} else if (A1 === A0 && B1 < B0) {
    console.log('YES');
} else if (A1 === A0 && B1 === B0 && C1 < C0) {
    console.log('YES');
} else if (A1 === A0 && B1 === B0 && C1 === C0) {
    console.log('YES');
} else {
    console.log('NO');
}
//A1 <= A0
//A1 === A0 && B1 <= B0
//A1 === A0 && B1 === B0 && C1 <= C0
//場合分けに穴がある...