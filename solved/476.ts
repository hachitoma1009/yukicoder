import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const na_array = nlarray[0].split(' ');
let n = parseInt(na_array[0]);
let a = parseInt(na_array[1]);
const x_array = nlarray[1].split(' ');
let n_x_array = [];

//x_arrayの平均を求める
n_x_array = x_array.map(Number);
let x_array_sum = 0;
for (let i = 0; i < x_array.length; i++) {
    x_array_sum = x_array_sum + n_x_array[i];
}

let average = null;
average = x_array_sum / n;

if (average === a) {
    console.log('YES');
} else {
    console.log('NO');
}