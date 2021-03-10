import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const incor = input.split('');
const cor = 'abcdefghijklmnopqrstuvwxyz'.split('');

for (let i = 0;i < cor.length; i++) {
    if (incor[i] !== cor[i]) {
        console.log(`${cor[i]}to${incor[i]}`);
    }
}

//引数どうしたらいいかわからない

// function check () {
//     if (incor[i] !== cor[i]) {
//         console.log(`${cor[i]}to${incor[i]}`);
//      } else {
//          return
//      }
// }

// for (let i = 0; i < cor.length; i++) {
//     check(incor[i], cor[i])
// }