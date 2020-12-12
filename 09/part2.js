const { getInvalidNumber, parse } = require('./part1.js');

function sumOfSmallestAndLargest(invalidNum, nums) {
  for (let lower = 0; lower < nums.length - 1; lower++) {
    let sum = nums[lower]; // start the sum at our lower index
    let upper = lower + 1;
    
    while (sum < invalidNum) {
      sum += nums[upper]; // keep adding adding to the running sum for this range

      if (sum === invalidNum) { // a match
        let contiguousRange = [];
        for (let i = lower; i <= upper; i++) {
          contiguousRange.push(nums[i]);
        }

        return Math.min(...contiguousRange) + Math.max(...contiguousRange);
      }
      ++upper; // increment the upper index of our contiguous range
    }
  }
}

function solve(input) {
  const numbers = parse(input);
  const invalidNum = getInvalidNumber(25, numbers);
  return sumOfSmallestAndLargest(invalidNum, numbers);
}

module.exports = { solve, sumOfSmallestAndLargest };