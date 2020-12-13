
/**
 * This question was difficult.
 * Solution taken from here: https://github.com/pseale/advent-of-code/blob/main/src/day10/src/index.test.js
 */
const tribonacciSequence = [1, 1, 2, 4, 7, 13, 24, 44, 81, 149];

function getTribonacci(num) {
  if (num > tribonacciSequence.length) {
    throw `Can't calculate tribonacci number for ${num}`;
  }
  return tribonacciSequence[num - 1];
}

function getNum(adapters) {
  const maxJoltage = adapters.sort((x, y) => x - y)[adapters.length - 1];
  const a = adapters.concat([0, maxJoltage + 3]).sort((x, y) => x - y);

  let multiplier = 1;
  let current = 1;
  for (let joltage of a) {
    if (adapters.includes(joltage + 1)) {
      current++;
    } else {
      multiplier *= getTribonacci(current);
      current = 1;
    }
  }
  return multiplier;
}

function solve(input) {
  const adapters = input.split('\n').map((num) => Number(num));
  return getNum(adapters);
}

module.exports = { solve };