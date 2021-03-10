import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

//特定の文字列を含むか判定する、正規表現を使った判定方法
let pattern = /575/;
if (pattern.test(input) === true) {
    console.log('YES');
} else {
    console.log('NO');
}