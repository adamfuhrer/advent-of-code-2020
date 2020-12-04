exports.solve = (input) => {
  let validPasswords = 0;

  input.forEach(password => {
    let args = password.split(' ');
    const firstNum = args[0].split('-')[0];
    const secondNum = args[0].split('-')[1];
    const matchingLetter = args[1].charAt(0);
    const passwordValue = args[2];
    const firstChar = passwordValue.charAt(parseInt(firstNum) - 1);
    const secondChar = passwordValue.charAt(parseInt(secondNum) - 1);
    
    if ((firstChar === matchingLetter && secondChar !== matchingLetter)
      || (firstChar !== matchingLetter && secondChar === matchingLetter)) {
      validPasswords++
    }
  });

  return validPasswords;
} 