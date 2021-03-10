import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

// let pattern1 = /\^\^\*/;
// let pattern2 = /\*\^\^/;

const array = input.split('');
let sum1 = 0;
let sum2 = 0;

// if (pattern1.test(input) === true) {
//     sum1 = sum1 + 1;
// } else if (pattern2.test(input) === true) {
//     sum2 = sum2 + 1;
// }

// console.log(`${sum1} ${sum2}`);

//matchメソッド

if (array[0].match(/\(\^\^\*\)/g)) {
    sum1 = array[0].match(/\(\^\^\*\)/g).length;
} else if (array[0].match(/\(\*\^\^\)/g)) {
    sum2 = array[0].match(/\(\^\^\*\)/g).length;
}