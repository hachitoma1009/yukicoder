const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const arr = input.split(' ');
let me = parseInt(arr[0]);
let opp = parseInt(arr[1]);
//console.log(me);
//console.log(opp);

if ( me === opp ) {
    console.log('Drew');
} else if ((me === 0 && opp === 1) || (me === 1 && opp ===2) || (me === 2 && opp === 0)) {
    console.log('Won');
} else {
    console.log('Lost');
}