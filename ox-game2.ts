import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const NewLinearray = input.split('\n');
//ヨコ
const horizontal1 = NewLinearray[0].split(' ');
const horizontal2 = NewLinearray[1].split(' ');
const horizontal3 = NewLinearray[2].split(' ');

//すべてのoxの入力をに対して左上から順に0から8までのインデックスをつける
const whole_array = horizontal1.concat(horizontal2, horizontal3);

//タテ
const vertical1 = [];
const vertical2 = [];
const vertical3 = [];

vertical1.push(whole_array[0],whole_array[3],whole_array[6]);
vertical2.push(whole_array[1],whole_array[4],whole_array[7]);
vertical3.push(whole_array[2],whole_array[5],whole_array[8]);

//ナナメ
const oblique1 = [];
const oblique2 = [];

oblique1.push(whole_array[0],whole_array[4],whole_array[8]);
oblique2.push(whole_array[2],whole_array[4],whole_array[6]);

// for (let i = 0; i < 2; i++) {
//     if (horizontal1[i] === 'o' && horizontal1[i + 1] === 'o') {
//         console.log('win');
//     } else if (vertical1[i] === 'o' && vertical1[i + 1] === 'o') {
//         console.log('win');
//     } else if (oblique1[i] === 'o' && oblique1[i + 1] === 'o') {
//         console.log('win');
//     }
// }

//oが勝っているかの判定
//0のコマのヨコを調べる
let sum1 = 0;
for (let i = 0; i < 2; i++) {
    if (horizontal1[i] === 'o' && horizontal1[i + 1] === 'o') {
        sum1 = sum1 + 1;
    }
}
if (sum1 === 2) {
    console.log('win');
}

//0のコマのタテを調べる
let sum2 = 0;
for (let j = 0; j < 2; j++) {
    if (vertical1[j] === 'o' && vertical1[j + 1] === 'o') {
        sum2 = sum2 + 1;
    }
}
if (sum2 === 2) {
    console.log('win');
}

//0のコマのナナメを調べる
let sum3 = 0;
for (let k = 0; k < 2; k++) {
    if (oblique1[k] === 'o' && oblique1[k + 1] === 'o') {
        sum3 = sum3 + 1;
    }
}
if (sum3 === 2) {
    console.log('win');
}

//1のコマのタテを調べる
let sum4 = 0;
for (let l = 0; l < 2; l++) {
    if (vertical2[l] === 'o' && vertical2[l + 1] === 'o') {
        sum4 = sum4 + 1;
    }
}
if (sum4 === 2) {
    console.log('win');
}

//2のコマのタテを調べる
let sum5 = 0;
for (let m = 0; m < 2; m++) {
    if (vertical3[m] === 'o' && vertical3[m + 1] === 'o') {
        sum5 = sum5 + 1;
    }
}
if (sum5 === 2) {
    console.log('win');
}

//3のコマのヨコを調べる
let sum6 = 0;
for (let n = 0; n < 2; n++) {
    if (horizontal2[n] === 'o' && horizontal2[n + 1] === 'o') {
        sum6 = sum6 + 1;
    }
}
if (sum6 === 2) {
    console.log('win');
}

//6のコマのヨコを調べる
let sum7 = 0;
for (let o = 0; o < 2; o++) {
    if (horizontal2[o] === 'o' && horizontal2[o + 1] === 'o') {
        sum7 = sum7 + 1;
    }
}
if (sum7 === 2) {
    console.log('win');
}

//2のコマのナナメを調べる
let sum8 = 0;
for (let p = 0; p < 2; p++) {
    if (vertical3[p] === 'o' && vertical3[p + 1] === 'o') {
        sum8 = sum8 + 1;
    }
}
if (sum8 === 2) {
    console.log('win');
}