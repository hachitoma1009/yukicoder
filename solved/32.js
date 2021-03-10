const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const arr = input.split('\n');
let L = parseInt(arr[0]);
let M = parseInt(arr[1]);
let N = parseInt(arr[2]);


//change
let cha1 = 0;//両替できる1円玉の枚数
let cha2 = 0;//両替できる25円玉
let cha3 = 0;//両替できる100円玉

//surplus
let sur1 = 0;//両替後の1円玉
let sur2 = 0;//両替後の25円玉
let sur3 = 0;//両替後の100円玉

cha1 = Math.floor(N / 25);
//console.log(cha1);
sur1 = N - (25 * cha1);
//console.log(sur1);
cha2 = Math.floor((M + cha1) / 4);
sur2 = (M + cha1) - (4 * cha2);
//console.log(sur2);//ここちがう
cha3 = Math.floor((L + cha2) / 10);
sur3 = (L + cha2) - (10 * cha3);
//console.log(sur3);
console.log(sur1 + sur2 + sur3);