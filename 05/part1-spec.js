const { Passport, solve, Passports } = require('./part1.js');
const fs = require('fs');
const input = fs.readFileSync('05/input.txt', 'utf8');

describe("Day 5 - part 1", () => {
  it("can get a valid row from a boarding pass", () => {
    let p = new Passports("");
    expect(p.getRowNumber('BBBBBBB')).toBe(127); // upper
    expect(p.getRowNumber('FFFFFFF')).toBe(0); // lower
    expect(p.getRowNumber('FBBBBBB')).toBe(63);
    expect(p.getRowNumber('BFFFBBF')).toBe(70);
    expect(p.getRowNumber('FFFBBBF')).toBe(14);
    expect(p.getRowNumber('BBFFBBF')).toBe(102);
  });

  it("can get a valid column from a boarding pass", () => {
    let p = new Passports("");
    expect(p.getColumnNumber('RRR')).toBe(7); // upper
    expect(p.getColumnNumber('LLL')).toBe(0); // lower
    expect(p.getColumnNumber('RLL')).toBe(4);
    expect(p.getColumnNumber('RLR')).toBe(5);
  });

  it("can get a valid seat ID from a row and a column", () => {
    let p = new Passports("");
    expect(p.getPassportID(p.getRowNumber('BFFFBBF'), p.getColumnNumber('RRR'))).toBe(567);
    expect(p.getPassportID(p.getRowNumber('FFFBBBF'), p.getColumnNumber('RRR'))).toBe(119);
    expect(p.getPassportID(p.getRowNumber('BBFFBBF'), p.getColumnNumber('RLL'))).toBe(820);
  });

  it("solve: can get the highest seat ID from a list of boarding passes", () => {
    expect(solve(input)).toBe(880);
  });
});
