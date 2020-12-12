const { solve, parse, getInvalidNumber} = require('./part1.js');
const fs = require('fs');
const input = fs.readFileSync('09/input.txt', 'utf8');

describe("Day 9 - part 1", () => {
  it("solve question from input: The first number in the sequence which does not have two numbers in its previous {preambleLength} which equal it", () => {
    expect(getInvalidNumber(5, parse(sampleInput))).toBe(127);
  });

  it("solve question from input: The first number in the sequence which does not have two numbers in its previous {preambleLength} which equal it", () => {
    expect(solve(input)).toBe(36845998);
  });
});

const sampleInput = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;