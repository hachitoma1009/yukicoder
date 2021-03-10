import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const N = parseInt(input);

if (N === 2 || N === 3 || N === 5 || N === 7 || N === 11 || N === 13 || N === 17 || N === 19 || N === 23 || N === 29 || N === 31 || N === 37 || N === 41 || N === 43 || N === 47 || N === 53 || N === 59 || N === 61) {
    console.log('Sosu!');
} else if (N === 4 || N === 9 || N === 16 || N === 25 || N === 36 || N === 49) {
    console.log('Heihosu!');
} else if (N === 8 ||N === 27) {
    console.log('Ripposu!');
} else if (N === 6 || N === 28) {
    console.log('Kanzensu!')
} else {
    console.log(N);
}