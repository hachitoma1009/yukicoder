import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const incor = input.split(/[ \n]/);
//const cor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i <= 10; i++) {
    if (incor.includes(String(i)) === false) {
        console.log(String(i));
    } 
}