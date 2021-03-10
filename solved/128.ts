import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split(/[ \n]/);
let N = parseInt(arr[0]);
let M = parseInt(arr[1]);
//何円あげられるか
let result = N / M;
//1000円単位でいくらあげられるか
let answer = 0;

if (result % 1000　=== 0) {
    //resultがそのままあげられる金額になる
    answer = result;
} else {
    //resultの中で1000円を何枚あげられるか計算して、1000円未満の端数を消す
    Math.floor(result / 1000);
    //求めた枚数に1000円をかけて、あげる金額にする
    answer = 1000 * Math.floor(result / 1000);
}
console.log(answer);