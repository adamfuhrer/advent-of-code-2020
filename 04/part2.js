const { parsePassportData, getPassportsWithRequiredFields } = require('./part1.js');

class Validators {
  // byr (Birth Year) - four digits; at least 1920 and at most 2002.
  static isBirthYear(input) {
    let num = Number(input);
    if (!this.isFourDigitNum(input) || num < 1920 || num > 2002) {
      return false;
    }
    return true;
  }

  // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
  static isIssueYear(input) {
    let num = Number(input);
    if (!this.isFourDigitNum(input) || num < 2010 || num > 2020) {
      return false;
    }
    return true;
  }

  // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
  static isExpirationYear(input) {
    let num = Number(input);
    if (!this.isFourDigitNum(input) || num < 2020 || num > 2030) {
      return false;
    }
    return true;
  }

  /**
   * hgt (Height) - a number followed by either cm or in: 
   * If cm, the number must be at least 150 and at most 193. 
   * If in, the number must be at least 59 and at most 76.
   */ 
  static isHeight(input) {
    let length = input.length;

    if (length < 3) { return false; } // ie: just cm or in specified
    if (input.charAt(length - 2) == "c" && input.charAt(length - 1) == "m") { // cm
      let num = Number(input.replace("cm", ""));
      
      if (isNaN(num) || num < 150 || num > 193) { 
        return false; 
      }
    } else if ((input.charAt(length - 2) == "i" && input.charAt(length - 1) == "n")) { // in
      let num = Number(input.replace("in", ""));
      
      if (isNaN(num) || num < 59 || num > 76) { 
        return false; 
      }
    } else {
      return false
    }

    return true;
  }

  // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  static isHairColor(input) {
    return new RegExp("#([0-9|a-f]{6})").test(input);
  }

  // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  static isEyeColor(input) {
    return input.length === 3 && ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(input);
  }

  // pid (Passport ID) - a nine-digit number, including leading zeroes.
  static isPassportId(input) {
    return input.length === 9 && !isNaN(input);
  }

  // helper
  static isFourDigitNum(input) {
    return !isNaN(input) && input.length === 4;
  }
}

exports.solve = (input) => {
  const parssedPassports = parsePassportData(input);
  const passports = getPassportsWithRequiredFields(parssedPassports);
  const validPassports = passports.filter(p => {
    return Validators.isBirthYear(p.get('byr')) &&
      Validators.isIssueYear(p.get('iyr')) && 
      Validators.isExpirationYear(p.get('eyr')) &&
      Validators.isHeight(p.get('hgt')) &&
      Validators.isHairColor(p.get('hcl')) &&
      Validators.isEyeColor(p.get('ecl')) &&
      Validators.isPassportId(p.get('pid'));
  });
  return validPassports.length;
}