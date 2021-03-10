import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
let Work = parseInt(nlarray[0]);
let Day = parseInt(nlarray[1]);
let work_today = Math.floor(Work / Day * Day);
let N = (Work / work_today);//これは少数で答えが出る

if (Work === work_today * N) {
    console.log(work_today);
} else {
    console.log(Day - work_today * (N - 1));
}