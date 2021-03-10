"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var input = fs.readFileSync('/dev/stdin', 'utf8');
var arr = input.split(' ');
var A = parseInt(arr[0]);
var B = parseInt(arr[1]);
var x = B / A;
if ((B % A) === 0) {
    console.log(x);
}
else {
    console.log("NO");
}
var arr = input.split(' ');
var a = parseInt(arr[0]);
var b = parseInt(arr[1]);
var cha = 0;
var s = null;
if (a === b) {
    s = "0";
}
else if (a < b) {
    s = "+" + (b - a);
}
else {
    s = "" + (b - a);
}
console.log(s);
