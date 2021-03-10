import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

let N = parseInt(input);

if (N % 6 === 1) {
    console.log('2');
} else if (N % 6 === 2) {
    console.log('8');
} else if (N % 6 === 3) {
    console.log('5');
} else if (N % 6 === 4) {
    console.log('7');
} else if (N % 6 === 5) {
    console.log('1');
} else if (N % 6 === 0) {
    console.log('4');
} 

/*rl.once("line",s=>{
	console.log("285714"[0|s%6-1]);
	process.exit();
})*/