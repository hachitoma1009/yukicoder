function calc() {
    var m = 1;
    var d = 1;
    var dMAX = 31;
    var happySum = 0;

    for (m = 1; m <= 12; m++) {

        if (m = 2) {
            dMAX = 28;
        } else if (m = 4 || 6 || 9) {
            dMAX = 30;
        }

        for (d = 1; d <= dMAX; d++) {
            if (m == Math.floor(d / 10) + d % 10) {
                happySum += 1;
            }
        }
    }

    console.log(happySum);
}

function Main(){
    calc();
}