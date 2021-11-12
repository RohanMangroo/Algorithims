//Given an aray of integers find the longest peak. A peak is defined as adjacent integers that are strictly increasing until they reach a peak at which point they become striclty decreasing.

//To solve this problem we assume every point in the array could be the potential longest peak. We assign two pointers, left and right to explore their respective sides. If a number is a pontential peak that means that every number to it's left AND right must be in decreasing order

function longestPeak(array) {
  if (array.length <= 2) return 0;
  let result = 0;

  for (let currentPeak = 1; currentPeak < array.length - 1; currentPeak++) {
    if (
      array[currentPeak - 1] < array[currentPeak] &&
      array[currentPeak + 1] < array[currentPeak]
    ) {
      let left = currentPeak - 1;
      let right = currentPeak + 1;
      let currentCount = 0;

      while (left >= 0 && array[left] < array[left + 1]) {
        left--;
        currentCount++;
      }

      while (right < array.length && array[right] < array[right - 1]) {
        right++;
        currentCount++;
      }

      if (currentCount > result) result = currentCount;
    }
  }

  const longestPeak = result !== 0 ? result + 1 : 0;
  return longestPeak;
}
