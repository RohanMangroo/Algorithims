//Write a function that takes in a sorted array of numbers and returns another array with the square of those numbers in sorted order
//The catch in this problem is that the initial array could contain negative numbers
//The square of a negative number will be positive and dispite the initial negative number being way on the left it's square may be way on the right

//The solution is to initalize an array of the same length as the given array and use that to place the squares from greatest to least
//Use pointers to scan the array
//Two pointers, left and right
//Ccompare the absolute values of the pointers two elements, the greatest one will be sloted first

const array = [-45, -2, -1, 4, 7, 13, 34];

function sortedSquaredArray(array) {
  const result = new Array(array.length).fill(0);
  let left = 0;
  let right = array.length - 1;
  //This is how I will keep track of where I'm currently slotting
  let currentPos = array.length - 1;

  while (left <= right) {
    if (Math.abs(array[left]) >= Math.abs(array[right])) {
      result[currentPos] = array[left] * array[left];
      left++;
    } else {
      result[currentPos] = array[right] * array[right];
      right--;
    }

    currentPos--;
  }
  return result;
}

console.log(sortedSquaredArray(array));
