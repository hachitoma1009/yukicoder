import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let incor = input.split('');
let cor = "yukicoder".split('');

for (let i = 0;i < incor.length; i++) {
    if (incor[i] === "?") {
        //また = と === をまちがえた
        console.log(cor[i]);
    }
}