import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

//基数が偶数のときは累乗してもしなくても2で割り切れるので計算をしなくてよい
//基数が奇数のときは、基数が奇数のものが偶数個あれば2で割り切れるとわかるので累乗の計算をしなくてよい
//->Bの値の取得は不要
const array = input.split(' ');
const Aarray = [];
let nAarray =[];
let sum = 0;

//Aの値を取得
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        Aarray.push(array[i]);
    }
}
//数字に変換
nAarray = Aarray.map(Number);
let oddAarray = [];

//基数が奇数のものを配列に入れて、
for (let i = 0;i < Aarray.length; i++) {
    if (nAarray[i] % 2 !== 0) {
        oddAarray.push(nAarray[i]);
    }
}
//個数を数える
if (oddAarray.length % 2 === 0) {
    console.log(':-)')
} else {
    console.log(':-(')
}