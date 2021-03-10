//小さい順に並べ替え(バブルソート)
//調べる範囲の先頭を1つずつ後ろへ移動するfor 文
// for(let i = 0;i < arr3.length; i++) {
//     //調べる範囲は先頭を除く要素、j 回のスキャンで...？
//     //このfor 文は、配列1番目からarray.length - 1 番目までまわす
//     for (let j = arr3.length - 1;j > i; j++) {
//         if(arr3[j] < arr3[j-1]) {
//             //隣り合う2つの値を比べて、後ろが小さければ交換
//             let tmp = arr3[j];
//             arr3[j] = arr3[j-1];
//             arr3[j-1] = tmp;
//         }
//     }
// }
let arr = [2, 1, 4, 5, 3];

for (let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < (arr.length - 1 - i); j++) {
        if(arr[j] > arr[j + 1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;

        }
    }
}
console.log(arr);