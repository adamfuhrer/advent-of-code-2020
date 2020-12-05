exports.createHill = (input, width, height) => {
  const hill = Array(height).fill().map(() => Array(width).fill('⛰️'));
  input.forEach((row, i) => {
    row.split('').forEach((letter, j) => {
      if (letter === '#') {
        hill[i][j] = '🎄';
      }
    });
  });
  return hill;
}

exports.solve = (input) => {
  input = input.split('\n');
  let width = input[0].length;
  let height = input.length;
  let hill = this.createHill(input, width, height);
  let trees = 0;
  let x = 3; 
  let y = 1;

  while (y < height) {
    if (hill[y][x % width] === '🎄') {
      ++trees
    }
    y += 1;
    x += 3;
  } 

  return trees;
} 