const { solve } = require('./part1.js');
const fs = require('fs');
const input = fs.readFileSync('08/input.txt', 'utf8');

describe("Day 8 - part 1", () => {
  it("solve question from sample input: can get value of accumulator before any instruction is executed a second time", () => {
    expect(solve(sampleInput)).toBe(5);
  });

  it("solve question from input: can get value of accumulator before any instruction is executed a second time", () => {
    expect(solve(input)).toBe(2080);
  });
});

const sampleInput = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;