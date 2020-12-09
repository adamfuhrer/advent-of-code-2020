const { Bag, solve } = require('./part1.js');
const fs = require('fs');
const input = fs.readFileSync('07/input.txt', 'utf8');

describe("Day 7 - part 1", () => {
  it("can get the color of a bag", () => {
    const h1 = new Bag('drab tan bags contain 4 clear gold bags.'); 
    expect(h1.color).toBe('drab tan');

    const h2 = new Bag('pale lime bags contain 1 dim salmon bag, 5 faded salmon bags, 1 dim turquoise bag.'); 
    expect(h2.color).toBe('pale lime');
  });

  it("can get the content of a bag", () => {
    const c1 = new Map();
    c1.set('muted gold', 4);
    const h1 = new Bag('wavy turquoise bags contain 4 muted gold bags.'); 
    expect(h1.content).toEqual(c1);

    const c2 = new Map();
    c2.set('dull gray', 1);
    c2.set('posh silver', 3);
    c2.set('dark aqua', 3);
    const h2 = new Bag('pale lavender bags contain 1 dull gray bag, 3 posh silver bags, 3 dark aqua bags.'); 
    expect(h2.content).toEqual(c2);

    const c3 = new Map();
    c3.set('striped gold', 4);
    c3.set('striped silver', 5);
    c3.set('mirrored turquoise', 4);
    c3.set('striped turquoise', 5);
    const h3 = new Bag('drab coral bags contain 4 striped gold bags, 5 striped silver bags, 4 mirrored turquoise bags, 5 striped turquoise bags.'); 
    expect(h3.content).toEqual(c3);
  });

  it("can get an empty bag", () => {
    const h1 = new Bag('posh black bags contain no other bags.'); 
    expect(h1.content.size).toBe(0);
  });

  it("solve question from sample: can get all possible unique bags containing a bag", () => {
    expect(solve(sampleInput)).toBe(4);
  });

  it("solve question from question input: can get all possible unique bags containing a bag", () => {
    expect(solve(input)).toBe(370);
  });
});

const sampleInput = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;