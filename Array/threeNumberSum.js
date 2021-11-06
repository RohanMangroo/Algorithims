//Given an array and a target number return all triplets that add up to the target sum

//The solution to this problem involves sorting the array to begin to gain directional intelligence
//Then iterating through the array where the 'i' position is an anchor, and 'i' goes up to the 3rd to last position, leaving room for the other 2 pointers
//left and right pointers--left is at i+1 and right is at array.length -1

//Check the sum of all 3 values at those positions and see if they add up to the target sum
//If they do, log it into your result
//If the currentSum < targetSum, move left pointer forward. Because the array is sorted moving to the right will increase the overall sum
//If the currentSum > targetSum, move right pointer forward. Because the array is sorted moving to the right will decrease the overall sum

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < array.length - 2; i++) {
    const anchor = i;
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const currentSum = array[anchor] + array[left] + array[right];
      if (currentSum === targetSum) {
        result.push([array[anchor], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) left++;
      else right--;
    }
  }

  return result;
}
