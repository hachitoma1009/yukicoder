import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split(' ');
let D = parseInt(arr[0]);
// let p = parseInt(arr[1]) / 100;

// //定価 * 消費税の小数点以下切りすて
// //console.log(D * (1 + p));//この小数点処理ができず詰んだ
// //let result = Math.floor(D * (1 + p));
// let result = Math.floor(D + D * 100 * p / 100);
let P = parseInt(arr[1]);
let result = Math.floor(D + D * P /100);
console.log(result);