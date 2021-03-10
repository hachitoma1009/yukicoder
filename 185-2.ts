import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

const NewLinearray = input.split('\n');
const horizontal1 = NewLinearray[0].split(' ');
const horizontal2 = NewLinearray[1].split(' ');
const horizontal3 = NewLinearray[2].split(' ');

const verrtical1 = [];
const verrtical2 = [];
const verrtical3 = [];

const obliqui1 = [];
const oblique2 = [];