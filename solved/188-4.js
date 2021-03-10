let answer = 0;
//まとめられる処理は関数にまとめてみよう
function check(i, j) {
    if( i === (Math.floor(j / 10) + (j % 10))) {
        //console.log(i + '/' + j)
        answer = answer + 1;
    }
}

for (let i = 1; i <= 12; i++) {
    if(i === 2) {
        for (let j = 1; j <= 28; j++)
            check(i, j);
    } else if (i === 4 || i === 6 || i === 9 || i === 11) {
        for (let j = 1; j <= 30; j++)
            check(i, j);
    } else {
        for (let j = 1; j <= 31; j++) {
            check(i, j);
        }
    }
}
console.log(answer);