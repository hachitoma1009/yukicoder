import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nl_array = input.split('\n');
const A_array = nl_array[0].split('');
const S_array = nl_array[1].split('');

const answer_array = [];

for (let i = 0; i < S_array.length; i++) {
    if (S_array[i].match (/^[a-z]/)) {
        answer_array.push(S_array[i]);
    } else {
        answer_array.push(A_array[parseInt(S_array[i])]);
    }
}
console.log(answer_array.join(''));