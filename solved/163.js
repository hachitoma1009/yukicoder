const input = require('fs').readFileSync('/dev/stdin', 'utf8');

//文字列を1文字ずつ分割して配列にする、改行の部分を削除
//const ary = input.match(/.{1}/g)
const arr = input.split('\n')[0];
//答えを入れる配列を生成
let arr2 = [];
//console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/^[A-Z]*$/)) {
        //小文字に変換した文字を返す、処理してるだけ。
        //ary[i]に代入して、新しく作った配列に追加
        arr2.push(arr[i].toLowerCase());
        //console.log('if 文に入りました');
    } else {
        //大文字に変換
        arr2.push(arr[i].toUpperCase());
    }
}

console.log(arr2.join(""));

// for (let i = 0; i < ary.length; i++) {
    //     console.log(ary[i])
    // }
    //const str = ary[0];
    
    //1文字(arr[0]から)ずつ大文字か小文字化判定し変換、くりかえし
    //for 文の中にif 文
    // function check(str) {
    //     let reg = new RegExp(/^[A-Z]*$/);
    //     let res = reg.test(str);
    //     return res;
    // }