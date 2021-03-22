import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nl_array = input.split('\n');
const N = parseInt(nl_array[0]);
const a_array = nl_array[1].split(' ');
const n_a_array = a_array.map(Number);

n_a_array.sort(
    function (a,b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
);

const diff = [];
for (let i = 0; i < N - 1; i++) {
    diff.push(n_a_array[i + 1] - n_a_array[i]);
}

diff.sort(
    function (a,b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
);

console.log(diff[0]);
console.log(n_a_array[N - 1] - n_a_array[0]);