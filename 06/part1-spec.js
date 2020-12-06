const { solve, getAnswersByGroup, getUniqueAnswersByGroup, getSumOfUniqueAnswerCountByGroup } = require('./part1.js');
const fs = require('fs');
const input = fs.readFileSync('06/input.txt', 'utf8');

describe("Day 6 - part 1", () => {
  it("can get answers by group", () => {
    expect(getAnswersByGroup(sampleInput).length).toBe(5);
  });

  it("can get unique answers by group", () => {
    const answersByGroup = getAnswersByGroup(sampleInput);
    expect(getUniqueAnswersByGroup(answersByGroup)).toEqual([['a','b','c'],['a','b','c'],['a','b','c'],['a'],['b']]);
  });

  it("sample: can get sum of unique answer count by group", () => {
    const groups = getAnswersByGroup(sampleInput);
    const uniqueAnswersByGroup = getUniqueAnswersByGroup(groups);
    expect(getSumOfUniqueAnswerCountByGroup(uniqueAnswersByGroup)).toBe(11);
  });

  it("solve: can get sum of unique answer count by group from input", () => {
    expect(solve(input)).toBe(6551);
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