import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const ABarray = input.split(' ');
const A = parseInt(ABarray[0]);
const B = parseInt(ABarray[1]);

//約数をぜんぶ配列に入れる関数
function divisor(num:number) {
    let a_results = [];
    for (let i = 1; i <= num; i++) {
        if ((num % i) === 0) {
            a_results.push(i);
        }
    }
    return a_results;
}

//Aの約数をぜんぶ配列に入れる
let r = null;
r = divisor(A);

let answer= 'NO';
for (let j = 0;j < r.length; j++) {
    if (r[j] % B === 0) {
        answer = 'YES';
        break;
    }
}
console.log(answer);