const { getAnswersByGroup } = require('./part1.js');
const { solve, getSumOfAllGroupConsensusAnswers } = require('./part2.js');
const fs = require('fs');
const input = fs.readFileSync('06/input.txt', 'utf8');

describe("Day 6 - part 2", () => {
  it("sample: can get the sum of all group consensus answers", () => {
    const groups = getAnswersByGroup(sampleInput);
    expect(getSumOfAllGroupConsensusAnswers(groups)).toBe(6);
  });

  it("solve: can get the sum of all group consensus answers (everyone in group has the letter)", () => {
    expect(solve(input)).toBe(3358);
  });
});

const sampleInput = `abc

a
b
c

ab
ac

a
a
a
a

b`;