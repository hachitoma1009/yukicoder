import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const nlallay = input.split('\n');
const N = parseInt(nlallay[0]);
const Xallay = nlallay[1];

//座標点を文字列から数字に変換してひとつずつ配列に格納
let coordinate = Xallay.split(' ').map(Number);
//console.log(coordinate);

//座標点をソート、関数を定義して呼び出しまでしてる
coordinate.sort(
    function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
);

//座標点の最小値をcountに代入し、更新していく。初期値を座標間の最大値の+1にしておく
let count = 1000001;
for (let i = 0;i < N - 1; i++) {
    let coordinate_differrence = coordinate[i + 1] - coordinate[i];
    //これまでの最小値よりも小さく、かつ距離がゼロじゃないとき
    if (coordinate_differrence < count && coordinate_differrence !== 0) {
        count = coordinate_differrence;
    }
}
//座標間の最小値を出力、座標間が0のみであったり、座標点が1つであったりした場合は0を出力
if (count === 1000001) {
    console.log(0);
} else {
    console.log(count);
}