import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const N = parseInt(nlarray[0]);
const Aarray = nlarray[1].split(' ');
const nAarray = Aarray.map(Number);


//N の倍数が、Asum 以上Asum + 100 以下の範囲でいくつあるかを求める
let Asum = 0;
for (let i = 0; i < nAarray.length; i++) {
    Asum = Asum + nAarray[i];
}
//console.log(Asum);

let multiple = 0;

for (let i = Asum; i <= (Asum + 100); i++) {
    if (i % N === 0) {
        multiple = multiple + 1;
    }
}

console.log(multiple);

//これではN の倍数が何個あるか、求まらない

// let lower = null;
// let upper = null;

// lower = Math.floor(Asum / N);
// upper = Math.floor((Asum + 100) / N);
// answer = upper - lower;