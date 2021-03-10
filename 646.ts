import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let N = parseInt(input);

// 1段ずつ出力するくりかえし
for (let i = N; i >= 1; i--) {
    let result = '';
    // 各段の文字列を作るための処理
    for (let j = 1; j <= i; j++) {
        result = result + N;
    }
    console.log(result);
}

// for(let i = N; i >= 1; i--) {
//     console.log(`${N}` * i)
// }