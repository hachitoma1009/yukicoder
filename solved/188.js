//1-31,2-28,3-31,4-30,5-31,6-30,7-31,8-31,9-30,10-31,11-30,12-31

/**month = 1/01,10
 * month = 2/02,11,20
 * month =3/03,12,21,30
 * month = 4/04,13,22
 * month = 5/05,14,23
 * month = 6/06,15,24
 * month = 7/07,16,25
 * month = 8/08,17,26
 * month = 9/09,18,27
 * month = 10/19
 * month = 11/11,29
 * month = 12/
 * */

//2015年の一年の日付すべてを書き出す

//入力がなく自分で関数を実行するプログラムを書かなきゃ
//関数定義→関数実行

//let m = 1;
//let d = 1;
//let day = 0;

/*for (let i = 1; i <= 12; i++) {
    m = i;
    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
        for (let j = 1; j <= 31; j++) {
            d = j;
            console.log(m + d);
        }  
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
        for (let j = 1; j <= 30; j++) function check(month, day) {
        // 課題1. happy day なら日付を出力するコードを書いてみよう
        if (Math.floor(m / 10) + (m % 10) === Math.floor(d / 10) + (m % 10)) {
            console.log(m + ' ' + d);
        }
      }{
            d = j;
            console.log(m + d);
    } else {
            for (let j = 1; j <= 28; j++)
            d = j;
            console.log(m + d);
        }
    }*/


    /*for(let i = 1; i <= 12; i++) {
        m = i;
        if (m === 1 || m === 3 ||m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
            for (let j = 1; j <= 31; j++) {
                d = j;
                console.log(m + d);
            }
        } else if (m === 4 || m === 6 || m === 9 || m === 11) {
            for (let j = 1; j <= 30; j++) {
                d = j;
                console.log(m + d);
            }
        } else {
            for (let j = 1; j <= 28; j++) {
                d =j;
                console.log(m + d);
            }
        }
    }*/

let answer = 0;

// function check(m, d) {
//     //console.log(m);
//    // console.log( d + 'の分解：' + Math.floor(d / 10) + ' , ' + d % 10);
//   //課題1. happy day なら日付を出力するコードを書いてみよう
//      if (m === Math.floor(d / 10) + (d % 10)) {
//         //console.log(m + ' ' + d);
//         answer = answer + 1;
//     }
// }

for (let m = 1; m <= 12; m++) {
    if (m === 1 || m === 3 ||m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
        for (let d = 1; d <= 31; d++) {
            if (m === Math.floor(d / 10) + (d % 10)) {
                //console.log(m + ' ' + d);
                answer = answer + 1;
            }
        }
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
        for (let d = 1; d <= 30; d++) {
            if (m === Math.floor(d / 10) + (d % 10)) {
                //console.log(m + ' ' + d);
                answer = answer + 1;
            }
        }
    } else {
        for (let d = 1; d <= 28; d++) {
            if (m === Math.floor(d / 10) + (d % 10)) {
                //console.log(m + ' ' + d);
                answer = answer + 1;
            }
        }
    }
}

console.log(answer);

    //mの十の位と一の位
    //mの十の位：Math.floor(m / 10)
    //mの一の位：m % 10

    //dの十の位：Math.floor(d / 10)
     //dの一の位：d % 10

     //HAPPY DAY の条件
     //Math.floor(m / 10) + (m % 10) === Math.floor(d / 10) + (m % 10)


