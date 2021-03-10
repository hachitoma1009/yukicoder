import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

//配列に名前をつけることを心がける

//正規表現つかって改行、半角一気に区切る
const arr = input.split(/[ \n]/);
//改行区切り
const arr1 = input.split('\n');
//半角スペース区切り
const arr2 = arr1[1].split(' ');
//1文字ずつの配列にする
const arr3 = arr2[1].split('');

//BigIntのn消す->文字列することで消える

//正規表現(163,)
// if (arr[i].match(/^[A-Z]*$/)) {
//         //小文字に変換した文字を返す、処理してるだけ。
//         //ary[i]に代入して、新しく作った配列に追加
//         arr2.push(arr[i].toLowerCase());
//         //console.log('if 文に入りました');
//     }

//バブルソート
// nABCDarray.sort(
//     function (a, b) {
//         if (a < b) return -1;
//         if (a > b) return 1;
//         return 0;
//     }
// );