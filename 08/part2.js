const { Instruction } = require('./part1.js');

class GameConsoleBootHack {
  detourIndex = 0; // index at the time of detouring
  currentAccumulator = 0; // current accumulator amount
  detourAccumulator = 0; // accumulator amount at the time of detouring
  currentVisitedIndexes = []; // current list of visited indexes in the instruction set
  detourVisitedIndexes = []; // list of visited indexes at the time of detouring
  isDetouring = false;

  constructor(input) {
    this.instructions = input.split('\n').map(instruction => new Instruction(instruction));
    this.getNextInstructionAtIndex(0);
  }

  getNextInstructionAtIndex(index) {
    // The terminating path has been found
    if (index > this.instructions.length - 1) {
      return;
    }

    /**
     * If were are on a detoured path AND the next instruction will cause an infinite loop, reset everything and go back to where we were before detouring
     * ie: go back and dont try the flipped operation again
     */
    if (this.isDetouring && this.currentVisitedIndexes.includes(index)) {
      let instruction = this.instructions[this.detourIndex];
      this.isDetouring = false;
      this.currentVisitedIndexes = [...this.detourVisitedIndexes];
      this.currentAccumulator = this.detourAccumulator;
      
      switch (instruction.type) {
        case 'acc':
          this.acc(this.detourIndex, instruction);
          break;
        case 'jmp':
          this.jmp(this.detourIndex, instruction);
          break;
        case 'nop':
          this.nop(this.detourIndex);
          break;
      }
    } else {
      let instruction = this.instructions[index];

      switch (instruction.type) { // continue normally if hitting an accumulator
        case 'acc':
          this.currentVisitedIndexes.push(index);
          this.acc(index, instruction);
          break;
        
        case 'jmp':
          if (!this.isDetouring) { // always attempt the operation flip to change the instruction path
            this.isDetouring = true;
            this.detourIndex = index;
            this.detourAccumulator = this.currentAccumulator;
            this.currentVisitedIndexes.push(index);
            this.detourVisitedIndexes = [...this.currentVisitedIndexes];
            this.nop(index);
          } else {
            this.currentVisitedIndexes.push(index);
            this.jmp(index, instruction);
          }
          break;
        
        case 'nop':
          if (!this.isDetouring) {
            this.isDetouring = true;
            this.detourIndex = index;
            this.detourAccumulator = this.currentAccumulator;
            this.currentVisitedIndexes.push(index);
            this.detourVisitedIndexes = [...this.currentVisitedIndexes];
            this.jmp(index, instruction);
          } else {
            this.currentVisitedIndexes.push(index);
            this.nop(index);
          }
          break;
      }
    }
  }

  acc(index, instruction) {
    this.currentAccumulator += instruction.num;
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
  const bootHack = new GameConsoleBootHack(input);
  return bootHack.currentAccumulator;
}

module.exports = { solve };