const { Passport, solve } = require('./part1.js');
const fs = require('fs');
const input = fs.readFileSync('05/input.txt', 'utf8');

describe("Day 5 - part 1", () => {
  it("can get a valid row from a boarding pass", () => {
    expect(Passport.getRowNumber('BBBBBBB')).toBe(127); // upper
    expect(Passport.getRowNumber('FFFFFFF')).toBe(0); // lower
    expect(Passport.getRowNumber('FBBBBBB')).toBe(63);
    expect(Passport.getRowNumber('BFFFBBF')).toBe(70);
    expect(Passport.getRowNumber('FFFBBBF')).toBe(14);
    expect(Passport.getRowNumber('BBFFBBF')).toBe(102);
  });

  it("can get a valid column from a boarding pass", () => {
    expect(Passport.getColumnNumber('RRR')).toBe(7); // upper
    expect(Passport.getColumnNumber('LLL')).toBe(0); // lower
    expect(Passport.getColumnNumber('RLL')).toBe(4);
    expect(Passport.getColumnNumber('RLR')).toBe(5);
  });

  it("can get a valid seat ID from a row and a column", () => {
    expect(Passport.getPassportID(Passport.getRowNumber('BFFFBBF'), Passport.getColumnNumber('RRR'))).toBe(567);
    expect(Passport.getPassportID(Passport.getRowNumber('FFFBBBF'), Passport.getColumnNumber('RRR'))).toBe(119);
    expect(Passport.getPassportID(Passport.getRowNumber('BBFFBBF'), Passport.getColumnNumber('RLL'))).toBe(820);
  });

  it("solve: can get the highest seat ID from a list of boarding passes", () => {
    expect(solve(input)).toBe(880);
  });
});
