import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const N = parseInt(nlarray[0]);
const K = parseInt(nlarray[1]);
let narray = [];
for (let i = 2;i < nlarray.length - 1; i++) {
    narray.push(nlarray[i]);
}
const n_narray = narray.map(Number);

n_narray.sort(
    function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
);

//3グループ以上であれば、{最小値}{その他}{最大値}とするのが最大の差なので、
//最も大きい差は、最大値 - 最小値
let result = 0;
result = n_narray[N - 1] - n_narray[0];

console.log(result);