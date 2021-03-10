import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr1 = input.split('\n');
let N = arr1[0].length;
//console.log(N);
const arr2 = arr1[0].split('');
let result = 1;

for (let i = 0; i <= N; i++) {
    if (arr2[i] === "L") {
        result = 2 * result;
        //console.log("L");
    } else if (arr2[i] === "R") {
        result = 2 * result + 1;
        //console.log("R");
    }
}
console.log(result);