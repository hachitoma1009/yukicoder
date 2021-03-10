import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const N = parseInt(nlarray[0]);
let darray = [];

for (let i = 1; i < (N + 1); i++) {
    darray.push(nlarray[i]);
}
let n_darray = [];
n_darray = darray.map(Number);
//console.log(n_darray);

let result_array = [];

for (let j = 0; j < N; j++) {
    result_array.push('9');
    for (let k = 0; k < (n_darray[j] - 1); k++) {
        result_array.push('0');
    }
    console.log(result_array.join(''));
}
//console.log('9' + '0' * (N - 1));