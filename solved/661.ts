import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split(/[ \n]/);
//let N = parseInt(arr[i]);//Nの宣言を間違えていたし、宣言する場所もおかしかった

for (let j = 1; j < arr.length - 1 ; j++) {
    let N = parseInt(arr[j]);
    if (N % 40 === 0) {
        console.log("ikisugi");
    } else if (N % 8 === 0) {
        console.log("iki");
    } else if (N % 10 === 0) {
        console.log("sugi");
    } else {
        console.log(N / 3);
    }
}