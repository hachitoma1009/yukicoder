import * as fs from 'fs';
import { networkInterfaces } from 'os';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const NKarray = nlarray[0].split(' ');
const N = parseInt(NKarray[0]);
const K = parseInt(NKarray[1]);
const parray = nlarray[1].split(' ');
const n_parray = parray.map(Number);

n_parray.sort(
    function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
);

let members = 0;

for (let i = 0;i < K; i++) {
    members += 1;
}