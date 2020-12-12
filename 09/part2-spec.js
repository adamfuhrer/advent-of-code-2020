const { parse, getInvalidNumber } = require('./part1.js');
const { solve, sumOfSmallestAndLargest } = require('./part2.js');
const fs = require('fs');
const input = fs.readFileSync('09/input.txt', 'utf8');

describe("Day 9 - part 2", () => {
  it("solve question from sample: can get the sum of the smallest and largest from the contiguous range which add to the invalid num", () => {
    const numbers = parse(sampleInput);
    const invalidNum = getInvalidNumber(5, numbers);
    expect(sumOfSmallestAndLargest(invalidNum, numbers)).toBe(62);
  });

  it("solve question from input: can get the sum of the smallest and largest from the contiguous range which add to the invalid num", () => {
    expect(solve(input)).toBe(4830226);
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