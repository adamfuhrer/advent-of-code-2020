const { solve } = require('./part2.js');
const fs = require('fs');
const input = fs.readFileSync('05/input.txt', 'utf8');

describe("Day 5 - part 2", () => {
  it("solve: can get missing seat ID", () => {
    expect(solve(input)).toBe(731);
  });
});