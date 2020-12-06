const { Passport, solve } = require('./part1.js');
const fs = require('fs');
const input = fs.readFileSync('05/input.txt', 'utf8');

describe("Day 5 - part 1", () => {
  it("can get a valid row from a boarding pass", () => {
    expect(Passport.getRow('BBBBBBB')).toBe(127); // upper
    expect(Passport.getRow('FFFFFFF')).toBe(0); // lower
    expect(Passport.getRow('FBBBBBB')).toBe(63);
    expect(Passport.getRow('BFFFBBF')).toBe(70);
    expect(Passport.getRow('FFFBBBF')).toBe(14);
    expect(Passport.getRow('BBFFBBF')).toBe(102);
  });

  it("can get a valid column from a boarding pass", () => {
    expect(Passport.getColumn('RRR')).toBe(7); // upper
    expect(Passport.getColumn('LLL')).toBe(0); // lower
    expect(Passport.getColumn('RLL')).toBe(4);
    expect(Passport.getColumn('RLR')).toBe(5);
  });

  it("can get a valid seat ID from a row and a column", () => {
    expect(Passport.getPassportID(Passport.getRow('BFFFBBF'), Passport.getColumn('RRR'))).toBe(567);
    expect(Passport.getPassportID(Passport.getRow('FFFBBBF'), Passport.getColumn('RRR'))).toBe(119);
    expect(Passport.getPassportID(Passport.getRow('BBFFBBF'), Passport.getColumn('RLL'))).toBe(820);
  });

  it("solve: can get the highest seat ID from a list of boarding passes", () => {
    expect(solve(input)).toBe(880);
  });
});
