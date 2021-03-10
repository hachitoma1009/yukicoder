const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const arr1 = input.split('\n');
const arr2 = arr1[1].split(' ');
//数字の配列に変換
const arr3 = arr2.map(Number);

let N = parseInt(arr1[0]);
let answer = null;
//小さい順に並べ替え
// let num = arr3;
// function compareFunc(a, b) {
//     return a - b;
// }
// arr3.sort(compareFunc);

//小さい順に並べ替え(バブルソート)
for (let i = 0; i < arr3.length - 1; i++) {
    //for 文のまわる回数が減っていく
    for(let j = 0; j < (arr3.length - 1 - i); j++) {
        if(arr3[j] > arr3[j + 1]) {
            let tmp = arr3[j];
            arr3[j] = arr3[j + 1];
            arr3[j + 1] = tmp;

        }
    }
}
//中央値を求める
//(N % 2 === 0)のとき
//answer = (arr2[N / 2] - 1 + arr2[N / 2]) / 2;

//(N % 2 !== 0)のとき
//answer = Math.ceil(arr[N /2]);
if (N % 2 === 0) {
    answer = (arr3[N / 2 - 1] + arr3[N / 2]) / 2;
} else {
    //console.log('if 文に入りました');
    answer = arr3[Math.floor(N /2)];
}

console.log(answer);

