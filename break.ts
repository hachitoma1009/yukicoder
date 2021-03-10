//break文とcontinue文

//break 文
/**
 * break 文は現在のループを中断し、
 * 中断した文の次の文にプログラムの制御を移す
 */

 for (let i = 0; i < 3; i++) {
    console.log('a');
    break;
    console.log('b');
}
/**
 * -> a
 */

//continue 文
/**
 * 現在のループを終了して、次の反復処理でループの実行を続ける
 */

 for (let i = 0; i < 3; i++) {
    console.log('a');
    continue;
    console.log('b');
}

/**
 * -> a
 * -> a
 * -> a
 */

//No.547

for (let i = 0;i < 5; i++) {
    if (i === 3) {
        console.log(i);
        break;
    }
}
/**
 * -> 3
 */

//No.69
let result = 'YES';

for (let i = 0;i < 5; i++) {
    if (i === 3) {
        continue;
    } else {
        result = 'NO';
    }
}
console.log(result);

/**
 * -> NO
 */