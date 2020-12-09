/**
 * 🧳
 */
class Bag { 
  constructor(unparsedBag) {
    const b = unparsedBag.split(' contain ');
    this.color = b[0].replace(' bags', ''); // Color of bag { string }
    this.content = this.getBagContent(b[1]); // The content of each bag { Map }
  }

  getBagContent(unparsedContent) {
    const bagContent = unparsedContent.replace(/ bag[s]?[.]?/, '');
    let content = new Map();

    if (!bagContent.includes("no")) { // if the bag is not empty
      if (bagContent.includes(', ')) { // multiple bags of different colors
        bagContent.split(', ').forEach(bag => {
          const b = this.parseBag(bag);
          content.set(`${b.adjective} ${b.color}`, b.amount);
        })
      } else { 
        // only single type of bag in the content of the bag
        const b = this.parseBag(bagContent);
        content.set(`${b.adjective} ${b.color}`, b.amount);
      }
    }
    return content;
  }

  parseBag(bag) {
    const b = bag.split(' ');
    return { amount: Number(b[0]), adjective: b[1], color: b[2]};
  }
}

/**
 * 🛅🛅🛅
 */
class LuggageClaim {
  constructor(input, desiredBag) {
    this.bags = this.parseBags(input); // all bags in the luggage claim
    this.desiredBag = desiredBag; // the desried bag were looking for
    this.parentBags = []; // list of all possible bags containing the desired bag
    this.setContainingBags(this.getParentBagsContainingABag(this.desiredBag)); // start from inner most desired bag and go up the tree 
  }
  
  setContainingBags(parents) {
    parents.forEach(bag => {
      // Only store unique bags since multiple children can lead to the same parent
      if (!this.parentBags.includes(bag)) {
        this.parentBags.push(bag);
      }
  
      // Recursivley go up the tree of bags to see if the new parent bag has its own parents containing its color
      if (this.getParentBagsContainingABag(bag.color).length > 0) {
        this.setContainingBags(this.getParentBagsContainingABag(bag.color));
      }
    });
  }

  getParentBagsContainingABag(bag) {
    return this.bags.filter(b =>  b.content.has(bag));
  }

  findBag(bag) {
    return this.bags.find(b => b.color === bag);
  }

  parseBags(input) {
    return input.split('\n').map(b => new Bag(b));
  }
}

function solve(input) {
  const { parentBags } = new LuggageClaim(input, "shiny gold"); // 🏆
  return parentBags.length;
}

module.exports = { solve, Bag, LuggageClaim };