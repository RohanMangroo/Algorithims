//SELECTION SORT
//Time Complexity - O(n^2);
//Space Complexity - O(1);

//----------------------------------------------------------------//

//Sort an array of 'n' length using the Selection Sort algorithm//

//This algorithm sorts an array by scanning the array to find the smallest element and swapping it with the current identified element

//----------------------------------------------------------------//

const array = [45, 72, -1, 234, -2, -232, 99];

function selectionSort(array) {
  //The outer loop will keep track of the current position we are at
  //This is the position where we will be swapping to when we find the smallest element left in the array
  //After we place the second to last element in it's sorted place that means the very last element should automatically be in its correct position
  for (let i = 0; i < array.length - 1; i++) {
    //Here I'm keeping track of the current smallest element
    //This gets up dated as the inner loop moves through the array
    let currentSmallest = i;
    //The inner loop is doing the checking
    for (let j = i; j < array.length; j++) {
      //Updating the current smallest element
      if (array[j] < array[currentSmallest]) currentSmallest = j;
    }
    //Doing the swap
    swap(i, currentSmallest, array);
  }
  return array;
}

//Swapping function
function swap(posOne, posTwo, array) {
  [array[posOne], array[posTwo]] = [array[posTwo], array[posOne]];
}

//----------------------------------------------------------------//

console.log(selectionSort(array));
