import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
let length = parseInt(nlarray[0]);
let blocks = parseInt(nlarray[1]);
let sum = 0;
let result = 0;

let Warray = nlarray[2];
//ブロックの横幅をすべて数字にして配列に格納
let coordinate = Warray.split(' ').map(Number);

//ブロックの横幅が小さい順にソート
coordinate.sort(
    function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
);

//ブロックの横幅が、箱の横幅以下の限りブロックを入れつづける
for (let i = 0; sum <= length; i++) {
    sum = sum + coordinate[i];
    result = result + 1;
}

//一回余分にfor文がまわってしまうので、最後に-1 する
console.log(result - 1);