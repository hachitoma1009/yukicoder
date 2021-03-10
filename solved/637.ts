import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split(' ');
let arr2 = [];
let N = 0;
let result = null;
let answer = 0;

for (let i = 0; i < arr.length; i++) {
    //console.log(parseInt(arr[i]));
    let N = parseInt(arr[i]);
    if ((N % 3 === 0) && (N % 5 === 0)) {
        result = "FizzBuzz";
        arr2.push(8);
    } else if ((N % 3 === 0) && (N % 5 !== 0)) {
        result = "Fizz";
        //console.log(result);
        arr2.push(4);
    } else if ((N % 3 !== 0) && (N % 5 === 0)) {
        result = "Buzz";
        arr2.push(4);
    } else {
        //ここがちがう
        result = "N";
        arr2.push(String(parseInt(arr[i])).length);
    }
}
answer = arr2[0] + arr2[1] + arr2[2] + arr2[3] + arr2[4];
console.log(answer);