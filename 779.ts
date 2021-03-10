import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

//1989-1/8
//2019-4/30

const Timearray = input.split(' ');

let myT = //与えられた数字

let myT_y = parseInt(Timearray[0]);
let myT_m = parseInt(Timearray[1]);
let myT_d = parseInt(Timearray[2]);

let start = new Date(1989,0,08,0,0,0);

let myS = start.getTime();
let myS_y = start.getFullYear();
let myS_m = start.getMonth() + 1;
let myS_d = start.getDate();

let end = new Date(2019,3,30,0,0,0);

let myE = end.getTime();
let myE_y = end.getFullYear();
let myE_m = end.getMonth() + 1;
let myE_d = end.getDate();

if (myS <= myT && myT <= myE) {
    console.log('Yes');
} else {
    console.log('No');
}