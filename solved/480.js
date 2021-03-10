//1からNまでの合計を求める
/*
var sum = 0;

for (var i = 1; i <= N; i++) {
    sum = sum + i;
}
console.log(sum);
*/
const input = require('fs').readFileSync('/dev/stdin', 'utf8');

var sum = 0;
var N = parseInt(input);
for (var i = 1; i <= N; i++) {
    sum = sum + i;
}
console.log(sum);