//Given two arrays of potentially unequal length find the two numbers that have the smallest abosolute difference
//To solve this problem sort both arrays and use pointers to calculate a current absolute difference
//To move the pinters we check which of the two values are lesser

//This technique works because in order to make the smallest absolute difference we need to being the two numbers closer to one another
//Since we are starting from the left, moving right increases the numbers, so we want to find the smaller of the two numbers to increase

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let difference = Infinity;
  let result = [];

  while (i < arrayOne.length && j < arrayTwo.length) {
    const currentDifference = Math.abs(arrayOne[i] - arrayTwo[j]);
    if (currentDifference < difference) {
      difference = currentDifference;
      result = [arrayOne[i], arrayTwo[j]];
    }
    arrayOne[i] < arrayTwo[j] ? (i += 1) : (j += 1);
  }

  return result;
}
