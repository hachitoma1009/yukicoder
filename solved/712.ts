import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split(/[ \n]/);

let M = parseInt(arr[1]);
let N = parseInt(arr[0]);
let answer = 0;

for (let i = 2; i <= N + 2; i++) {
    //配列を分割したら、箱つくる。自動でarrに再代入されないし、できない。
    let row = arr[i].split('');
    for (let j = 0; j < M; j++) {
        if (row[j] === "W") {
            answer = answer + 1;
        }
    }
}
console.log(answer);