import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const array = nlarray[0].split('');
const number_array = array.map(Number);

let sum = 0;
for (let i = 1; i < number_array.length - 1; i++) {
    if (number_array[i] === number_array[i + 1]) {
        sum = sum + 1;
    }
}
if (number_array[0] === 1 && sum === number_array.length - 2 && 1 <= number_array[2] ) {
    console.log(number_array[2]);
} else {
    console.log('-1');
}