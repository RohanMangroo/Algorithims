//This is supposed to be an easy problem but I had a hard timw with it.
//The idea is thatwe are gviven an array with nested arrays within it. At every depth of the array there is a new multiplier.
//We need to find the sum of all the elements in the array taking into account the multipliers based on depth

//Recursion is the way to solve this problem
//Scan through the array and when you encounter a number, simply add it to a runningSum, if you encounter a nested array recursivly call your function to handle this array.
//When we recursively call the function we will sum the contents of the array and return that sum times it's multiplier. That result will be added the the upper level sum and so on...

function productSum(array, multiplier = 1) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') sum += array[i];
    else sum += productSum(array[i], multiplier + 1);
  }
  return sum * multiplier;
}
