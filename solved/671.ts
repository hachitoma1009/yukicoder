import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const incorrect = nlarray[0].split('');
const correct = '1000000007';

console.log(Math.abs(incorrect.length - correct.length));