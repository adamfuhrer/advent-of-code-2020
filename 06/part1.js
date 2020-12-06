function getAnswersByGroup(input) {
  return input.split('\n\n');
}

function getUniqueAnswersByGroup(groups) {
  return groups.map(group => {
    group = group.replace(/\n|\r/g, "");
    return [...new Set(group)]
  });
}

function getSumOfUniqueAnswerCountByGroup(groups) {
  return groups.reduce((acc, group) => {
    return acc += group.length
  }, 0);
}

function solve(input) {
  const groups = getAnswersByGroup(input);
  const uniqueAnswersByGroup = getUniqueAnswersByGroup(groups)
  return getSumOfUniqueAnswerCountByGroup(uniqueAnswersByGroup);
}

module.exports = { solve, getAnswersByGroup, getUniqueAnswersByGroup, getSumOfUniqueAnswerCountByGroup };