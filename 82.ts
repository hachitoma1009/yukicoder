import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const WHCarray = input.split(' ');
const Width = parseInt(WHCarray[0]);
const Height = parseInt(WHCarray[1]);
const Color = WHCarray[2];

for (let i = 0;i < Height; i++) {
    if (Color === 'W') {
        for (let j = 0;j < Width; i++) {
            if (Width % 2 === 0) {
                console.log('wB' * Width / 2)
            }
        }
    } else if (Color === 'W') {
        for 
    }
}