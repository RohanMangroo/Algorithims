//Write a function that takes in an ARRAY and a TARGET SUM and returns any 2 numbers in the array that sum up to the target sum.

//The 2 numbers must be distinct intergers(meaning they cannot be the same numbers)
//Return the two numbers in an array
//Return their indexes
//If no two numbers add up to the target sum return [-1, -1] and [-1, -1] for indexes

const array = [4, -1, 5, 43, 19, -46, 27];
const target = 32;

function nestedForLooptwoSum(array, target) {
  //Nested 'for loop' approach
  //Time Complexity - O(n^2);
  //Space Complexity - O(1);

  const result = {
    values: [-1, -1],
    indexes: [-1, -1],
  };

  //The outter 'for loop' is holding on to a value
  for (let i = 0; i < array.length - 1; i++) {
    //The inner 'for loop' is adding it's value to that value and checking to see if it's equal to the target
    //If it is modify the result object
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result.values = [array[i], array[j]];
        result.indexes = [i, j];
      }
    }
  }
  return result;
}

function pointersTwoSum(array, target) {
  //Pointers approach
  //Time Complexity - O(n(log(n)));
  //Space Complexity - O(1);

  //Sort the array in place. This will give us directional intelligence so we can now use pointers to confidently move around the array
  array.sort((a, b) => a - b);

  const result = {
    values: [-1, -1],
    indexes: [-1, -1],
  };
  //Establish pointers
  let left = 0;
  let right = array.length - 1;

  //In this while loop we are checking if the sum of the values established by the pointers is equal to the target. If it is modify the result object. Otherwise check to see if the currentSum is greater than or less than the target. If it's greater than, then we must decrease the sum by moving the right pointer to the left. If it's less than the target we need to increase the sum by moving the left pointer to the right. All this is possiable the array is sorted.
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === target) {
      result.values = [array[left], array[right]];
      result.indexes = [left, right];
    }

    currentSum < target ? left++ : right--;
  }

  return result;
}

function usingAnObjectTwoSum(array, target) {
  const result = {
    values: [-1, -1],
    indexes: [-1, -1],
  };
  //We will check if the difference(comp) of the target and current element is in the memory
  //If it is, then we know we have the pair
  const memory = {};

  for (let i = 0; i < array.length; i++) {
    const comp = target - array[i];
    if (comp in memory) {
      //Modifying the result object if we found what we are looking for
      result.values = [array[i], comp];
      result.indexes = [i, memory[comp]];
    } else {
      //If the comp is not in the memory we drop the current element in the memory in hopes that it is the comp of another number down the line
      memory[array[i]] = i;
    }
  }
  return result;
}
console.log(usingAnObjectTwoSum(array, target));
