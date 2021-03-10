const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const arr = input.split(' ');
let A = parseInt(arr[0]);
let B = parseInt(arr[1]);


for(let i = A; i <= B; i++) {
    if ((i % 3 === 0) || (String(i).indexOf("3") !== -1)) {
        console.log(i);
    }
}

//console.log()はconsole.log()するたびに改行してる
//から「改行してください」の問題文の条件は改行処理しなくても満たしてる
// String(i).indexOf("3") >= 0
// String(i).indexOf("3") !== -1
// /3/.test(i)