const input = require('fs').readFileSync('/dev/stdin', 'utf8');

//ここで定義するのは初期値
const arr1 = input.split('\n');
const arr2 = arr1[1].split(' ');
let N = parseInt(arr1[0]);
let sum = BigInt(0);

console.log(arr2);

//A1~Anまでの合計、足し算N回
//arr2[1]からarr2[n]までN回の足し算
//同じ名前の変数を作るのはすごく変
for(let i = 0; i < N; i++) {
    console.log('計算途中のsum：' + sum);
    sum = sum + BigInt(arr2[i]);
    console.log('加算するもの：' + arr2[i])
}
console.log('Nの値：' + N);
console.log(sum.toString());

/**var sum = sum + parseInt(arr2[i]);
*ってしてたけど、同じ名前の変数を作るのはすごく変
sumという変数の箱をfor文まわすごとに作ってる

変数定義の際には、ゆるゆるなvarよりもletを使おう
変なコードを書いてしまったときに、通すことなくちゃんとエラーを吐いてくれます*/