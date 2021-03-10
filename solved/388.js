const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const arr = input.split(' ');
let S = parseInt(arr[0]);
let F = parseInt(arr[1]);
let result = 0;

if (S < F) {
    result = 1;
} else if (( S >= F ) &&( S % F === 0 )) {
    result = (S / F) + 1;
} else {
    result = S / F;
    result = Math.floor(result) + 1;
}
console.log(result);
//console.log(result  +  \n );