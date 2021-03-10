const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const arr = input.split(' ');
let a = parseInt(arr[0]);
let b = parseInt(arr[1]);
let result = 0;

//console.log("aの値：" + a);
//console.log("bの値：" + b);
if ( a >= b ) {
    result = 1;
} else if ((a < b) && (b % a === 0)) {
    result = (b / a);
} else {
    result = (b / a) + 1;
    //小数点以下切り捨て
    result = Math.floor(result);
    //console.log("if文に入りました");
}
console.log(result);