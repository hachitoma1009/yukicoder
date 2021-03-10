import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

//1989-1/8
//2019-4/30

const YMDarray = input.split(' ');
const Y = parseInt(YMDarray[0]);
const M = parseInt(YMDarray[1]);
const D = parseInt(YMDarray[2]);

//平成がはじまるまでに経った日にち
const start = (1989 - 1969) * 365 + (1 - 1) * 31 + 8;
//平成が終わるまでに経った日にち
const end = (2019 - 1969) * 365 + (4 - 1) * 31 + 30;
//取得した日までに経った日にち
const now = (Y - 1969) * 365 + (M - 1) * 31 + D;

if ((start <= now) && (now <= end)) {
    console.log('Yes');
} else {
    console.log('No');
}