//Given an array of numbers return the maximum sum of non-adjecent elements

//To solve this problem we need to utlize dynamic programming, meaning the solutions to a small problem will help us generate the solution to a bigger problem

//We know the max sum for 1 and 2 non adjacent elements. If there is only 1 element the max sum is that element itself
//If there are 2 elements the max sum is the max of those 2 elements. From this starting point we can generate the 3rd max sum and so on..
//The formula for this problem is maxSum[i] = Math.max(maxSum[i-1], maxSum[i-2]+array[i])

function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  if (array.length === 2) return Math.max(array[0], array[1]);

  //These 2 elements will act as the i-1 and i-2 positions
  const maxSums = [array[0], Math.max(array[0], array[1])];

  for (let i = 2; i < array.length; i++) {
    const newMaxSum = Math.max(maxSums[1], maxSums[0] + array[i]);
    [maxSums[0], maxSums[1]] = [maxSums[1], maxSums[0]];
    maxSums[1] = newMaxSum;
  }

  return maxSums[1];
}
