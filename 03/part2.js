const { createHill } = require('./part1.js');

class Collision {
  constructor(slopeX, slopeY) {
    this.trees = 0;
    this.x = 0;
    this.y = 0;
    this.slopeY = slopeY;
    this.slopeX = slopeX;
  }
}

function solve(input) {
  input = input.split('\n');
  let width = input[0].length;
  let height = input.length;
  let hill = createHill(input, width, height);

  const collisions = [
    new Collision(1, 1),
    new Collision(3, 1),
    new Collision(5, 1),
    new Collision(7, 1),
    new Collision(1, 2)
  ];

  let answer = 1;
  collisions.forEach(c => {
    while (c.y < height) {
      if (hill[c.y][c.x % width] === '🎄') {
        ++c.trees
      }
      c.y += c.slopeY;
      c.x += c.slopeX;
    }
    answer *= c.trees;
  })

  return answer;
}

module.exports = { solve };