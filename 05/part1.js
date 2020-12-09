class Passports {
  constructor(input) {
    const passports = this.parsePassports(input);
    const rows = this.getRows(passports.rows);
    const columns = this.getColumns(passports.columns);
    this.passportList = this.getPassports(rows, columns);
  }

  parsePassports(input) {
    const rows = [];
    const columns = [];
  
    input.split('\n').forEach((bp, i) => {
      columns[i] = bp.substring(bp.length - 3, bp.length);
      rows[i] = bp.substring(0, 7);
    });
  
    return { rows, columns }
  }

  getRows(rows) {
    return rows.map(instructions => this.getRowNumber(instructions));
  }
  
  getColumns(columns) {
    return columns.map(instructions => this.getColumnNumber(instructions));
  }

  getPassports(rows, columns) {
    let passports = [];
    if (rows.length !== columns.length) {
      console.warn('Rows and columns must be the same length!');
    }
  
    for (const i of rows.keys()) {
      const r = rows[i];
      const c = columns[i];
      passports.push({
        row: r,
        col: c,
        id: this.getPassportID(r, c)
      });
    }
    return passports;
  }

  getPassportID(row, column) {
    return (row * 8) + column;
  }

  /**
   * Gets the seat row from a set of binary space partitioning instructions
   * 'B' insruction takes the upper bound path
   * 'F' insruction takes the lower bound path
   * Range: 0 - 127 -- (Since 0 is implied, only need to pass in the upper limit)
   */
  getRowNumber(rowInstructions) {
    return this.getNumberFromBSPInstructions(rowInstructions, 'B', 'F', 127);
  }

  /**
   * Gets the seat column from a set of binary space partitioning instructions
   * 'R' insruction takes the upper bound
   * 'L' insruction takes the lower bound
   * Range: 0 - 7 -- (Since 0 is implied, only need to pass in the upper limit)
   */
  getColumnNumber(columnInstructions) {
    return this.getNumberFromBSPInstructions(columnInstructions, 'R', 'L', 7);
  }

  getNumberFromBSPInstructions(instructions, upperCharInstruction, lowerCharInstruction, upperLimit) {
    let min = 0;

    /**
     * Max value is the accumulator (initialValue: upperLimit)
     * Could have done opposite here and started from 0 as well, and will get same result
     * Returns once we've recursively reached the last number in our instruction set
     */
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

  getMiddleNumBetweenRange(min, max) {
    return Math.ceil((max - min) / 2); // Using ceiling here since 0 is always initially included in the range 
  }
}

function solve(input) {
  const passports = new Passports(input);
  const ids = passports.passportList.map(p => p.id);
  return Math.max(...ids);
}

module.exports = { solve, Passports };