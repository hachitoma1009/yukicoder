//変数と関数の定義
let m = 1;
let d = 1;
let answer = 0;

function check(m, d) {
    if (m === Math.floor(d / 10) + d % 10) {
        answer = answer + 1;
    }
}

//1年間のすべて調べる、関数で確認して成り立つときに数えていく
for (let m = 1;m <= 12; m++) {
    if (m === 2) {
        for (let d = 1;d <= 28;d++) {
            check(m, d);
        }
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
        for (let d = 1;d <= 30;d++) {
            check(m, d);
        }
    } else {
        for (let d = 1;d <= 31;d++) {
            check(m, d);
        }
    }
}
console.log(answer);

//変数が分かりにくかったのか、条件を書き上げる際にまちがえていた
//30日シリーズ月の条件でｍとかくべきところをdとしていた