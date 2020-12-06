const { getAnswersByGroup } = require('./part1.js');

function getSumOfAllGroupConsensusAnswers(groups) {
  const groupedAnswersByPeople = groups.map(group => group.split('\n'));

  let sum = 0;
  groupedAnswersByPeople.forEach(group => {
    // Only need iterate through first person's answer, since every group is required to have a matching answer  
    const firstPersonInGroup = group[0].split('');
    firstPersonInGroup.forEach(answer => {
      
      // Include the first person in this check for cases where there is only one person in the group
      if (group.every(person => person.includes(answer))) {
        sum++;
      }
    })
  });

  return sum;
}

function solve(input) {
  const groups = getAnswersByGroup(input);
  return getSumOfAllGroupConsensusAnswers(groups);
}

module.exports = { solve, getSumOfAllGroupConsensusAnswers };