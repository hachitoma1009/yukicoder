import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr1 = input.split('\n');//['3', '1', '2', '1']
let n = parseInt(arr1[0]);
let result = 0;
let rarr = [];
let answer = 0;


for (let i = 1; i < n; i++) {//条件式はあってる
    result = parseInt(arr1[i + 1]) - parseInt(arr1[i]) 
    rarr.push(result);//差の配列に格納
}
//console.log(rarr);//差の配列はとれてる

for (let j = 0; j < n; j++) {
    if (Math.abs(rarr[j]) === 1) {
        answer = answer + 1;
    }
}
if (Math.abs(parseInt(arr1[1])) !== 1) {
    console.log("F");
} else if (answer === (n - 1)) {
    console.log("T");
} else {
    console.log("F");
}