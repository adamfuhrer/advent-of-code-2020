const { generatePassports, parse } = require('./part1.js');

function getSortedPassportIds(passports) {
  return passports.sort((a, b) => {
    return a - b;
  });
}

function getMissingSeatId(sortedIds) {
  for (let i = sortedIds[0] + 1; i < sortedIds[sortedIds.length - 1]; i++) {
    if (sortedIds[i + 1] !== sortedIds[i] + 1) {
      return sortedIds[i] + 1; // the missing seat ID
    }
  }
  return '# ID not found #';
}

function solve(input) {
  const parsed = parse(input);
  const passports = generatePassports(parsed);
  const sorted = getSortedPassportIds(passports.map(p => p.id));
  return getMissingSeatId(sorted);
}

module.exports = { solve };