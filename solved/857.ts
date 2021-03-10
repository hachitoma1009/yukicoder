import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split(/[ \n]/);
let X = BigInt(arr[0]);
let Y = BigInt(arr[1]);
let Z = BigInt(arr[2]);

if (Y <= Z) {
    console.log(String(Z - BigInt(2)));
} else if (X <= Z && Z < Y) {
    console.log(String(Z - BigInt(1)));
} else if (Z < X) {
    console.log(String(Z));
}

//85437892028849083