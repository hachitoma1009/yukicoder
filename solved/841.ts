import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');
//改行入力無視のコードかいておく

const arr1 = input.split('\n');
const arr2 = arr1[0].split(' ');
let S1 = arr2[0];
let S2 = arr2[1];
// console.log(S1);
// console.log(S2);

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

// if ((S1 === "Sun" || S1 === "Sat") && (S2 === "Sun" || S2 === "Sat")){
//     console.log("8/33");
//   } else if ((S1 === "Sun" || S1 === "Sat") && !(S2 === "Sun" || S2 === "Sat")){
//     console.log("8/32");
//   } else {
//     console.log("8/31");
//   }

//if 文の条件の順番が大切
// if (((S1 === "Sat") && (S2 === "Sun")) || ((S1 === "Sun") && (S2 === "Sat") || (S1 === "Sat" && S2 === "Sat" ) || S1 === "Sun" && S2 === "Sat") {
//     console.log("8/33");
//  } else if (((S1 === "Sat") && (S2 !== "Sun")) || ((S1 === "Sun") && (S2 !== "Sat"))) {
//     console.log("8/32")
// } else {
//     console.log("8/31");
// }