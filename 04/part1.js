
function parsePassportData(data) {
  let passports = [];

  // todo: do this more efficiently (regex?)
  data.split('\n\n').forEach((chunk, chunkindex) => {
    let passport = new Map();
    chunk.split('\n').forEach(row => {
      row.split(' ').forEach(pair => {
        const keyValPair = pair.split(':');
        passports[chunkindex] = passport.set(keyValPair[0], keyValPair[1]); 
      });
    });
  })

  return passports;
}

exports.solve = (input) => {
  let validCount = 0;
  const parssedPassports = parsePassportData(input);
  
  parssedPassports.forEach(passport => {
    if ((passport.size === 7 && !passport.has('cid')) || passport.size === 8) {
      validCount++;
    }
  });
  
  return validCount;
}