import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr1 = input.split('\n');
const arr2 = [];
const rarr = [];

let n = parseInt(arr1[0]);
let result = 0;

for (let i = 1; i < n + 1; i++) {
    arr2.push(arr1[i]);
}
//console.log(arr2);とれてる

for (let j = 0; j < n; j++) {
    const arr3 = arr2[j].split(' ');
    //console.log(arr3);
    let result = parseInt(arr3[1]) -parseInt(arr3[0]);//要素は2つって決まってる
    rarr.push(result);
    //console.log(rarr);//ここがちがう
}

for (let k = 0; k < n; k++) {
    if (rarr[k] === rarr[k + 1]) {
        result = result + 1;
    }
}

if (result === (n - 1)) {
    if (rarr[0] <= 0) {
        console.log("-1");
    } else {
        console.log(rarr[0]);
    }
} else {
    console.log("-1");
}