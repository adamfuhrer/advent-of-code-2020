module.exports = (input) => {
  let validPasswords = 0;

  input.forEach(password => {
    let args = password.split(' ');
    let count = 0;
    const firstNum = args[0].split('-')[0];
    const secondNum = args[0].split('-')[1];
    const matchingLetter = args[1].charAt(0);
    const passwordValue = args[2];
    
    for (const letter of passwordValue) {
      if (letter === matchingLetter) {
        count++;
      }
    }

    if (count >= firstNum && count <= secondNum) {
      validPasswords++
    }
  });

  return validPasswords;
} 