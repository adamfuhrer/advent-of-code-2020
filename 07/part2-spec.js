const { solve } = require('./part2.js');
const fs = require('fs');
const input = fs.readFileSync('07/input.txt', 'utf8');

describe("Day 7 - part 2", () => {
  it("solve question from sample: can get amount of bags contained in a single shiny gold bag", () => {
    expect(solve(sampleInput)).toBe(126);
  });

  it("solve question from question input: can get amount of bags contained in a single shiny gold bag", () => {
    expect(solve(input)).toBe(29547);
  });
});

const sampleInput = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;