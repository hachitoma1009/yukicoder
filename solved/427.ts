import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let arr = input.split(' ');
let H = parseInt(arr[0]);
let W = parseInt(arr[1]);

if ((H / W) === (4 / 3)) {
    console.log('TATE');
} else {
    console.log('YOKO');
}