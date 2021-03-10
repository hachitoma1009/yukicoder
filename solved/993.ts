import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const array = input.split('\n');

let result = array[0].replace(/ao/g, 'ki');
console.log(result);//->改行が2つ入ってしまう
//process.stdout.write(result);