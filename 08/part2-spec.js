const { solve } = require('./part2.js');
const fs = require('fs');
const input = fs.readFileSync('08/input.txt', 'utf8');

describe("Day 8 - part 2", () => {
  it("solve question from sample input: can get value of accumulator when we have reached termination of the program", () => {
    expect(solve(sampleInput)).toBe(8);
  });

  it("solve question from input: can get value of accumulator when we have reached termination of the program", () => {
    expect(solve(input)).toBe(2477);
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