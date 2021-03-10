import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlarray = input.split('\n');
//1文字ずつ分割して格納
const array = nlarray[0].split('');

//文字列を反転させる(インデックスを反転させる)
let coordinate_array = [];
for (let i = array.length - 1; i >= 0; i--) {
    coordinate_array.push(array[i]);
}

//<を>に、>を<に置換する処理
for (let j = 0; j < coordinate_array.length; j++) {
    if (coordinate_array[j] === '<') {
        coordinate_array[j] = '>';
    } else if (coordinate_array[j] === '>') {
        coordinate_array[j] = '<';
    }
}

console.log(coordinate_array.join(''));

//replaceメソッドつかえんかった
// let result = ' ';
// result = coordinate_array.join('');