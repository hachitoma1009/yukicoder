
let result = 0;
//HAPPY DAYの条件を書く
//関数には引数を渡すのを忘れないこと
function check(m, d) {
    //console.log(m, d);
    if (m === Math.floor(d / 10) + d % 10) {
        result = result + 1;
    }
}

//365日すべてチェック
for (let m = 1; m <= 12; m++) {
    if (m === 2) {
        for (let d = 1; d <= 28; d++) {
            check(m, d);
        }
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
        for (let d = 1; d <= 30; d++) {
            check(m, d);
        }
    } else {
        for (let d = 1; d <= 31; d++) {
            check(m, d);
        }
    }
}
console.log(result);