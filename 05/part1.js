class Passport {
  /**
   * Gets the seat row from a set of binary space partitioning instructions
   * 'B' insruction takes the upper bound path
   * 'F' insruction takes the lower bound path
   * Range: 0 - 127 -- (Since 0 is implied, only need to pass in the upper limit)
   */
  static getRow(row) {
    return this.getNumberFromBSPInstructions(row, 'B', 'F', 127);
  }

  /**
   * Gets the seat column from a set of binary space partitioning instructions
   * 'R' insruction takes the upper bound
   * 'L' insruction takes the lower bound
   * Range: 0 - 7 -- (Since 0 is implied, only need to pass in the upper limit)
   */
  static getColumn(column) {
    return this.getNumberFromBSPInstructions(column, 'R', 'L', 7);
  }

  static getNumberFromBSPInstructions(instructions, upperCharInstruction, lowerCharInstruction, upperLimit) {
    let min = 0;

    // Max value is the accumulator (initialValue: upperLimit)
    // Returns once we've recursively reached the end
    return instructions.split('').reduce((max, char) => {
      let diff = this.getMiddleNumBetweenRange(min, max);

      if (char === upperCharInstruction) {
        min = min + diff;
      } else if (char === lowerCharInstruction) {
        max = max - diff;
      }

      return max;
    }, upperLimit);
  }

  static getPassportID(row, column) {
    return (row * 8) + column;
  }

  static getMiddleNumBetweenRange(min, max) {
    return Math.ceil((max - min) / 2); // Using ceiling here since 0 is always initially included in the range 
  }
}

class Passports {
  static getRows(rows) {
    return rows.map(row => Passport.getRow(row));
  }
  
  static getColumns(columns) {
    return columns.map(column => Passport.getColumn(column));
  }

  static getPassports(rows, columns) {
    let passports = [];
    if (rows.length !== columns.length) {
      console.warn('Rows and columns must be the same length!')
    }
  
    for (const i of rows.keys()) {
      const r = rows[i];
      const c = columns[i];
      passports.push({
        row: r,
        col: c,
        id: Passport.getPassportID(r, c)
      });
    }
    return passports;
  }
  
  static getPassportIds(passports) {
    return passports.map(passport => ret)
  }
}

function parse(input) {
  const rows = [];
  const columns = [];

  input.split('\n').forEach((bp, i) => {
    columns[i] = bp.substring(bp.length - 3, bp.length);
    rows[i] = bp.substring(0, 7);
  });

  return { rows, columns }
}

function generatePassports(passports) {
  const rows = Passports.getRows(passports.rows);
  const columns = Passports.getColumns(passports.columns);
  return Passports.getPassports(rows, columns);
}

function solve(input) {
  const parsed = parse(input);
  const passports = generatePassports(parsed);
  const ids = passports.map(p => p.id);
  return Math.max(...ids);
}

module.exports = { solve, parse, generatePassports, Passport, Passports };