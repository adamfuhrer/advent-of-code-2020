const fs = require('fs');
const { argv } = process;
const day = argv[2];
const part = argv[3]; 

const input = fs.readFileSync(`${day}/input.txt`, 'utf8');
const { solve } = require(`./${day}/part${part}.js`);

console.log(solve(input));
