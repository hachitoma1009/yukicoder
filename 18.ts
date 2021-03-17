import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const Sarray = nlarray[0].split('');
const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ABCarray = ABC.split('');
let result = [];

//それをSarray全体やってもらうのにまわすfor 文は
for (let i = 0;i < Sarray.length; i++) {
    //ABCのどこに一致するか調べてインデックスを返してもらって、(i + 1)引く
    let result_index = (ABCarray.indexOf(Sarray[i]) - (i + 1)) % 26;
    //ABC配列の中でanswer番目のものを取得する
    //result_indexがマイナスの値になると文字を取ってこれないので、1周分多く足す
    if (result_index < 0) {
        result_index  = result_index + 26;
    }
    let answer = ABCarray[result_index];
    result.push(answer);
}
console.log(result.join(''));

//まず1文字目、ABCのどこに一致するか調べてインデックスを返してもらう
//let index0 = ABCarray.indexOf(Sarray[0])

//Zを通り越して遡るとき、うまくいかなくなる
