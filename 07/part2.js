const { LuggageClaim } = require('./part1.js');

/**
 * 🧳 + 🧮
 */
class BagCounter extends LuggageClaim {
  constructor(...args) {
    super(...args);
    this.totalIncludedBagsCount = 0;
    // Start the count at 1 (the "shiny gold" bag)
    // and Call the function to start getting total number of bags included in a single bag
    this.setIncludedBagsCount(this.desiredBag, 1); // desiredBag is set in super class 
  }

  setIncludedBagsCount(bagColor, parentBagAmount) {
    // Find the bag object from the list of bags 
    let bag = this.findBag(bagColor); 

    if (bag.content.size > 0) {
      let currentBagCount = [...bag.content.values()].reduce((acc, val) => acc + val, 0);
      // parentBagAmount is the multiplier here to get the cumulative amount for all child bags
      this.totalIncludedBagsCount += (parentBagAmount * currentBagCount);

      // Do the same process with the rest of the bags inside the current one
      bag.content.forEach((amount, bagColor) => {
        this.setIncludedBagsCount(bagColor, parentBagAmount * amount);
      });
    }
  }
}

function solve(input) {
  const { totalIncludedBagsCount } = new BagCounter(input, "shiny gold");
  return totalIncludedBagsCount;
}

module.exports = { solve, BagCounter };