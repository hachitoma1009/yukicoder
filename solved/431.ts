import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const array = input.split(' ');
const D1 = parseInt(array[0]);
const D2 = parseInt(array[1]);
const D3 = parseInt(array[2]);
const S = parseInt(array[3]);

const Darray = [];
Darray.push(D1);
Darray.push(D2);
Darray.push(D3);
//console.log(Darray);

let DEADsum = 0;

for (let i = 0; i < Darray.length; i++) {
    if (Darray[i] === 1) {
        DEADsum = DEADsum + 1;
    }
}
//console.log(DEADsum);

if (S === 1 || DEADsum === 1 || DEADsum === 0) {
    console.log('SURVIVED');
} else {
    console.log('DEAD');
}