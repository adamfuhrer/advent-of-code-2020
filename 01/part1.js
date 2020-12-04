module.exports = (input) => {
  const checkNum = 2020;
  const arr = input.map(num => { return parseInt(num) })

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === checkNum) {
        return arr[i] * arr[j];
      }
    }
  }
} 