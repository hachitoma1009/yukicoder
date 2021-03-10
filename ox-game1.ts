import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
const line1array = nlarray[0].split(' ');
const line2array = nlarray[1].split(' ');
const line3array = nlarray[2].split(' ');

//すべてのoxの入力をに対して左上から順に0から8までのインデックスをつける
const whole_array = line1array.concat(line2array, line3array);


//判定
if ((whole_array[0] === 'o' && whole_array[1] === 'o' && whole_array[2] === 'o') || 
 (whole_array[0] === 'o' && whole_array[1] === 'o' && whole_array[2] === 'o') ||
 (whole_array[3] === 'o' && whole_array[4] === 'o' && whole_array[5] === 'o') || 
 (whole_array[6] === 'o' && whole_array[7] === 'o' && whole_array[8] === 'o') ||
 (whole_array[0] === 'o' && whole_array[3] === 'o' && whole_array[6] === 'o') || 
 (whole_array[1] === 'o' && whole_array[4] === 'o' && whole_array[7] === 'o') ||
 (whole_array[2] === 'o' && whole_array[5] === 'o' && whole_array[8] === 'o') ||
 (whole_array[0] === 'o' && whole_array[4] === 'o' && whole_array[8] === 'o') ||
 (whole_array[2] === 'o' && whole_array[4] === 'o' && whole_array[6] === 'o')) {
    console.log('win');
} else if ((whole_array[0] === 'x' && whole_array[1] === 'x' && whole_array[2] === 'x') || 
 (whole_array[0] === 'x' && whole_array[1] === 'x' && whole_array[2] === 'x') ||
 (whole_array[3] === 'x' && whole_array[4] === 'x' && whole_array[5] === 'x') ||
 (whole_array[6] === 'x' && whole_array[7] === 'x' && whole_array[8] === 'x') ||
 (whole_array[0] === 'x' && whole_array[3] === 'x' && whole_array[6] === 'x') ||
 (whole_array[1] === 'x' && whole_array[4] === 'x' && whole_array[7] === 'x') ||
 (whole_array[2] === 'x' && whole_array[5] === 'x' && whole_array[8] === 'x') ||
 (whole_array[0] === 'x' && whole_array[4] === 'x' && whole_array[8] === 'x') ||
 (whole_array[2] === 'x' && whole_array[4] === 'x' && whole_array[6] === 'x')) {
    console.log('lose');
} else {
    console.log('draw');
}