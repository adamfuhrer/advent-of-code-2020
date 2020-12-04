exports.solve = (input) => {
  const checkNum = 2020;
  const arr = input.map(num => { return parseInt(num) })

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === checkNum) {
          return arr[i] * arr[j] * arr[k];
        }
      }
    }
  }
} 