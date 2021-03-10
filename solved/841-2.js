const input = require('fs').readFileSync('/dev/stdin', 'utf8');


const arr = input.split(' ');
let S1 = arr[0];
let S2 = arr[1];
console.log(S1);
console.log(S2);

if (S1 === "Sat") {
    if (S2 === "Sat" || S2 === "Sun") {
      console.log("8/33");
    } else {
      console.log("8/32");
    }
  } else if (S1 === "Sun") {
    if (S2 === "Sat" || S2 === "Sun") {
      console.log("8/33");
    } else {
      console.log("8/32");
    }
  } else {
    console.log("8/31");
  }