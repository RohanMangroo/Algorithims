//Givena an array of integers return the max sum of a sub array of elements. This sub array must have all adjcent elements

//To solve this problem we will implement Kadane's Algorithm
//This algorithm will take the Math.max(currentElement, sumOfAllPreviousElements + currentElement), this will give the maximum sum up until that current element

//Then we can have an independant var that updates if we encounter a maxSum greater than the one we currently have

function kadanesAlgorithm(array) {
  let result = array[0];
  let currentMaxSum = array[0];

  for (let i = 1; i < array.length; i++) {
    currentMaxSum = Math.max(array[i], array[i] + currentMaxSum);
    result = Math.max(result, currentMaxSum);
  }

  return result;
}
