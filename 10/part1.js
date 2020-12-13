
function getNum(adapters) {
  let sorted = adapters.sort((a, b) =>  a-b);
  sorted.unshift(0); // insert the charging outlet which will always be first number and 0
  
  let oneJolt = 0;
  let threeJolt = 1; // start count at 1 since device's built-in adapter is always 3 higher than the highest adapter
  let previousIndex = 0;
  
  for (let current = 1; current < sorted.length; current++) {
    let diff = sorted[current] - sorted[previousIndex];
    if (diff === 1) {
      oneJolt++;
    } else if (diff === 3) {
      threeJolt++;
    }
    previousIndex = current;
  }

  return oneJolt * threeJolt;
}

function solve(input) {
  const adapters = input.split('\n').map((num) => Number(num));
  return getNum(adapters);
}

module.exports = { solve };