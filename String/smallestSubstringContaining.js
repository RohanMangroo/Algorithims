function smallestSubstringContaining(bigString, smallString) {
  const { feq, count } = createObjects(smallString);
  let leftPointer = 0;
  let rightPointer = 0;
  let currentSubstring = [0, Infinity];

  while (rightPointer < bigString.length) {
    if (count.size < feq.size)
      addChar(rightPointer, feq, count, smallString, bigString);
    else if (count.size === feq.size) {
      removeChar(leftPointer, feq, count, smallString, bigString);
      leftPointer++;
    }

    if (count.size === feq.size)
      currentSubstring = updateSubstring(
        currentSubstring,
        leftPointer,
        rightPointer
      );
    if (count.size < feq.size) rightPointer++;
  }

  const [left, right] = currentSubstring;
  if (right === Infinity) return '';
  return bigString.slice(left, right + 1);
}

function addChar(rightPointer, feq, count, smallString, bigString) {
  const currentChar = bigString[rightPointer];
  if (currentChar in feq) {
    count[currentChar]++;
    if (feq[currentChar] === count[currentChar]) count.size++;
  }
}

function removeChar(leftPointer, feq, count, smallString, bigString) {
  const currentChar = bigString[leftPointer];
  count[currentChar]--;
  if (count[currentChar] < feq[currentChar]) count.size--;
}

function updateSubstring(currentSubstring, leftPointer, rightPointer) {
  const [left, right] = currentSubstring;
  const currentSubstringLength = right - left + 1;
  const newSubstringLength = rightPointer - leftPointer + 1;

  if (newSubstringLength < currentSubstringLength)
    return [leftPointer, rightPointer];
  else return currentSubstring;
}

function createObjects(string) {
  const feq = { size: 0 };
  const count = { size: 0 };

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    count[currentChar] = 0;
    if (currentChar in feq) feq[currentChar]++;
    else {
      feq[currentChar] = 1;
      feq.size++;
    }
  }
  return { feq, count };
}
