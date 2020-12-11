class Instruction {
  constructor(unparsed) {
    const instruction = unparsed.split(' ');
    this.type = instruction[0];
    this.num = Number(instruction[1]);
  }
}

class GameConsoleBoot {
  accumulator = 0;
  visitedIndexes = [];

  constructor(input) {
    this.instructions = input.split('\n').map(instruction => new Instruction(instruction));
    this.getNextInstructionAtIndex(0);
  }

  getNextInstructionAtIndex(index) {
    if (this.visitedIndexes.includes(index)) {
      return; // Infinite loop has been reached - EXIT
    } else {
      this.visitedIndexes.push(index);
    }

    let instruction = this.instructions[index];
    switch (instruction.type) {
      case 'acc':
        this.acc(index, instruction)
        break;
      case 'jmp':
        this.jmp(index, instruction)
        break;
      case 'nop':
        this.nop(index);
        break;
    }
  }

  acc(index, instruction) {
    this.accumulator += instruction.num;
    this.getNextInstructionAtIndex(index + 1);
  }

  jmp(index, instruction) {
    this.getNextInstructionAtIndex(index + instruction.num);
  }

  nop(index) {
    this.getNextInstructionAtIndex(index + 1);
  }
}

function solve(input) {
  const gameConsole = new GameConsoleBoot(input)
  return gameConsole.accumulator;
}

module.exports = { solve, GameConsoleBoot, Instruction };