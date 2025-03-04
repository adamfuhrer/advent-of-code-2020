const { Passports } = require('./part1.js');

function getSortedPassportIds(passports) {
  return passports.sort((a, b) => {
    return a - b;
  });
}

function getMissingSeatId(sortedIds) {
  try {
    for (let i = sortedIds[0] + 1; i < sortedIds[sortedIds.length - 1]; i++) {
      if (sortedIds[i + 1] !== sortedIds[i] + 1) {
        return sortedIds[i] + 1; // the missing seat ID
      }
    }
    throw 'ID not found';
  } catch (e) {
    console.error(e);
  }
}

function solve(input) {
  const passports = new Passports(input);
  const sorted = getSortedPassportIds(passports.passportList.map(p => p.id));
  return getMissingSeatId(sorted);
}

module.exports = { solve };