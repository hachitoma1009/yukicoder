import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const ABarray = input.split(' ');
const A = parseInt(ABarray[0]);
const B = parseInt(ABarray[1]);
let sum = 0;

//AからBの範囲で、合計が3の倍数になるものをif 文で分岐
for (let i = A;i <= B; i++) {
    if ((A + B + i) % 3 === 0) {
        sum += 1;
    }
}

console.log(sum);