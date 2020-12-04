module.exports = (input) => {
  let width = input[0].length;
  let height = input.length;
  let trees = 0;
  let x = 3; 
  let y = 1;

  let hill = Array(height).fill().map(() => Array(width).fill('⛰️'));
  input.forEach((row, i) => {
    row.split('').forEach((letter, j) => {
      if (letter === '#') {
        hill[i][j] = '🎄';
      }
    });
  });

  while (y < height) {
    if (hill[y][x % width] === '🎄') {
      ++trees
    }
    y += 1;
    x += 3;
  } 

  return trees;
} 