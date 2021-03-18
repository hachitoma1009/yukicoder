import * as fs from 'fs';
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

let pass = 0;

//border を0 から400 まで設定してみて、合格人数を足していく
for (let i = 0;i < 400; i++) {
    for (let j = 0;j < N; j++) {
        if (n_parray[j] < i) {
            pass += 1;
        }
    }
}

if (pass <= K) {
    console.log(pass);
} else {
    //ここどうしたらいいのうおお
    console.log(K);
}