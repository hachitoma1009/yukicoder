import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split(' ');
let S1 = arr[0];
let S2 = arr[1];

function is_holiday (day : string) : boolean {
  return day === "Sat" || day === "Sun";
}

// まず、「S1 が Sat か Sun である」かどうかで場合わけ
if (is_holiday(S1)) {
  // S1 が Sat か Sun である場合の記述
  if (is_holiday(S2)) {
    console.log("8/33");
  }
  else {
    console.log("8/32");
  }
}
else {
  // S1 が Sat でも Sun でもない場合の記述
  console.log("8/31");
}