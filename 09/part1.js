function getInvalidNumber(preambleLength, nums) {
  checkNext: for (let checkNum = preambleLength; checkNum < nums.length; checkNum++) {
    const end = preambleLength + checkNum; 

    for (let start = checkNum - preambleLength; start < checkNum; start++) {
      let secondNum = start + 1; // start at the second number
      
      while (secondNum < end) {
        if (nums[start] + nums[secondNum] === nums[checkNum]) {
          // For first iteration: if preambleLength length is 25, check num would be the 26th num
          // Found two numbers in the range which add to the check number 
          continue checkNext; 
        }
        ++secondNum; // Iterate through the range of from the {start} to the {start} + {preambleLength}
      }
    }

    // The first number in the sequence which does not have two numbers in its previous {preambleLength} which equal it
    return nums[checkNum];
  }
}

function parse(input) {
  return input.split('\n').map((num) => Number(num));
}

function solve(input) {
  return getInvalidNumber(25, parse(input));
}

module.exports = { solve, parse, getInvalidNumber };