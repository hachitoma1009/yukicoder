//X月Y日についてYの数字の和がXと等しいときHAPPY DAY

//1/1から12/31までを出力
//2-28,4-30,6-30,9-30,11-30
//1,3,5,7,8,10,12

let answer = 0;

for (let i = 1; i <= 12; i++) {
    if(i === 2) {
        for (let j = 1; j <= 28; j++)
            if( i === (Math.floor(j / 10) + (j % 10))) {
                //console.log(i + '/' + j)
                answer = answer + 1;
        }
    } else if (i === 4 || i === 6 || i === 9 || i === 11) {
        for (let j = 1; j <= 30; j++)
            if(i === (Math.floor(j / 10) + (j % 10))) {
                //console.log(i + '/' + j)
                answer = answer + 1;
        }
    } else {
        for (let j = 1; j <= 31; j++) {
            if(i === (Math.floor(j / 10) + (j % 10))) {
                //console.log(i + '/' + j)
                answer = answer + 1;
            }
        }
    }
}
console.log(answer);