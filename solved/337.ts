import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split(/[ \n]/);
let N = parseInt(arr[0]);
let P = parseInt(arr[1]);

// if (N === 0 && P === 0) {
//     console.log("=");
// } else if ( N !== 0 && P === 0) {
//     console.log("=");
// } else if (N === 1 && P !== 0) {
//     console.log("=");
// } else if (N === 0 && P !== 0) {
//     console.log("!=");
// } else {
//     console.log("!=");
// }
if (P === N * P) {
    console.log("=")
  }
  else {
    console.log("!=")
  }