import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
// console.log(nlarray);
let REDsum = 0;
let BLUEsum = 0;
for (let i = 0; i < nlarray.length; i++) {
    if (nlarray[i] === 'RED') {
        REDsum = REDsum + 1;
    } else if (nlarray[i] === 'BLUE') {
        BLUEsum = BLUEsum + 1;
    }
}
// console.log(REDsum);
// console.log(BLUEsum);

if (REDsum > BLUEsum) {
    console.log('RED');
} else {
    console.log('BLUE');
}