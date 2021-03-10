import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const OXarray = input.split('');
let ans = null;

if (OXarray.length <= 2) {
    ans = 'NA';
}

for (let i = 0;i < OXarray.length - 2; i++) {
    if (OXarray[i] === OXarray[i + 1] && OXarray[i] === OXarray[i + 2]) {
        if (OXarray[i] === 'O') {
            ans = 'East';
        } else if (OXarray[i] === 'X') {
            ans = 'West';
        }
        break;
    } else {
        ans = 'NA';
    }
}
console.log(ans);

// for (let i = 0;i < OXarray.length - 2; i++) {
//     if (OXarray[i] === OXarray[i + 1] && OXarray[i] === OXarray[i + 2]) {
//         if (OXarray[i] === 'O') {
//             console.log('East');
//         } else if (OXarray[i] === 'X') {
//             console.log('West');
//         }
//         break;
//     } else {
//         console.log('NA');
//     }
// }