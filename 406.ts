import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const N = parseInt(nlarray[0]);
const xarray = nlarray[1].split(' ');
let n_xarray = xarray.map(Number);

n_xarray.sort(
    function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
);

let result = 'YES';
for (let i = 0;i < N - 2; i++) {
    if (n_xarray[i + 2] - n_xarray[i + 1] === n_xarray[i + 1] - n_xarray[i] && n_xarray[i + 1] - n_xarray[i] !== 0) {
        continue;
    } else {
        result = 'NO';
    }
}
console.log(result);