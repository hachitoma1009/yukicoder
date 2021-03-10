import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const arr = input.split(':');
let hh = parseInt(arr[0]);
let mm = parseInt(arr[1]);

if (mm >= 55) {
    if (hh === 23) {
        //hh = 0o0;
        mm = (mm + 5) - 60;
        console.log("00" + ':' +  "0" + String(mm));
    } else if (String(hh).length === 1) {
        hh = hh + 1;
        mm = (mm + 5) - 60;
        console.log("0" + String(hh) + ':' + "0" + String(mm));
    } else {
        hh = hh + 1;
        mm = (mm + 5) - 60;
        console.log(String(hh) + ':' + "0" + String(mm));
    }
} else if (String(hh).length === 1  && String(mm + 5).length === 1) {
    mm = mm + 5;
    console.log("0" +String(hh) + ':' + "0" + String(mm));
} else if (String(hh).length === 1) {
    mm = mm + 5;
    console.log("0" +String(hh) + ':' + String(mm));
} else if (String(mm + 5).length === 1) {
    mm = mm + 5;
    console.log(String(hh) + ':' + "0" +String(mm));
} else {
    mm = mm + 5;
    console.log(String(hh) + ':' + String(mm));
}