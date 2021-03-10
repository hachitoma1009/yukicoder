import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let N = parseInt(input);

if (N === 1) {
    console.log('Shiitakerando');
} else if (N === 2) {
    console.log('Otsukakokusaibijutsukan');
} else {
    console.log('Spring-8');
}