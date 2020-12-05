const { Passport } = require('./part1');

describe("Passport", function() {
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
});
