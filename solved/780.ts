import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const ABarray = input.split(' ');
const A = parseInt(ABarray[0]);
const B = parseInt(ABarray[1]);

if (A > B) {
    console.log('NO');
    console.log((A + 1 - B));
} else if (A === B) {
    console.log('NO');
    console.log('1');
} else if ((A + 1) === B) {
    console.log('YES');
    console.log(0);
} else {
    console.log('YES');
    console.log(B - A - 1);
}