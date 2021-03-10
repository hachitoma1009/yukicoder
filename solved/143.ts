import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const KNFarray = nlarray[0].split(' ');
const Aarray = nlarray[1].split(' ');

let K = parseInt(KNFarray[0]);
let N = parseInt(KNFarray[1]);
let F = parseInt(KNFarray[2]);

let Asum = 0;

for (let i = 0; i < F; i++) {
    Asum = Asum + parseInt(Aarray[i]);
    //console.log('Asum:' + Asum);
}

let X = K * N - Asum;

if (X < 0) {
    console.log('-1');
} else {
    console.log(X);
}