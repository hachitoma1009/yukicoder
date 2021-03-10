import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const N = parseInt(nlarray[0]);
const x_array = nlarray[1].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < N; i++) {
    sum = sum + x_array[i];
}

let average = 0;
    average = sum / N;

for (let j = 0; j < N; j++) {
    let deviation = 0;
    deviation = Math.floor(50 - (average - x_array[j]) / 2);
    console.log(deviation);
}