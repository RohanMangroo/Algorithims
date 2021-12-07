function maxSumIncreasingSubsequence(array) {
  let index = 0;
  const maxSums = array.map((num) => num);
  const seqArray = new Array(array.length).fill(null);

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j] && array[i] + maxSums[j] > maxSums[i]) {
        const currentSum = array[i] + maxSums[j];
        maxSums[i] = currentSum;
        seqArray[i] = j;
      }
    }

    if (maxSums[i] > maxSums[index]) index = i;
  }
  return getResult(array, index, maxSums, seqArray);
}

function getResult(array, currentIndex, maxSums, seqArray) {
  const result = [maxSums[currentIndex]];
  const seq = [];

  while (currentIndex !== null) {
    seq.unshift(array[currentIndex]);
    currentIndex = seqArray[currentIndex];
  }
  result.push(seq);
  return result;
}
