function numbersInPi(pi, numbers) {
  const stringMemory = { minSpaces: Infinity };
  numbers.forEach((num) => (stringMemory[num] = true));
  countSpaces(pi, stringMemory, 0, 0);

  return stringMemory.minSpaces !== Infinity ? stringMemory.minSpaces : -1;
}

function countSpaces(string, stringMemory, startPos, currCount) {
  if (startPos >= string.length) {
    stringMemory.minSpaces = Math.min(currCount - 1, stringMemory.minSpaces);
    return;
  }

  for (let i = startPos; i < string.length; i++) {
    const leftHalf = string.slice(startPos, i + 1);
    if (leftHalf in stringMemory)
      countSpaces(string, stringMemory, i + 1, currCount + 1);
  }
}
