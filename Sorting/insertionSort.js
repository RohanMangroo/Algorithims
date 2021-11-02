//INSERTION SORT
//Time Complexity - O(n^2);
//Space Complexity - O(1);

//----------------------------------------------------------------//

//Sort an array of 'n' length using the Insertion Sort algorithm//

//This algorithm sorts an array by taking the current element and inserting it into it's correct position by backtracking through the array

//----------------------------------------------------------------//

const array = [6767, 100, -1, 234, -2233, -22, 34];

function insertionSort(array) {
  //The outter loop will run through the entire array
  for (let i = 1; i < array.length; i++) {
    //Keeping track of the current position will allow us to move back through the array and find the spot where the elemnt belongs
    let currentPos = i;
    //Using a while loop to back track through the array and find the elements position
    while (array[currentPos] < array[currentPos - 1]) {
      swap(currentPos, currentPos - 1, array);
      //If we do a swap, then we need to move the current position back one
      currentPos--;
    }
  }
  return array;
}

function swap(posOne, posTwo, array) {
  [array[posOne], array[posTwo]] = [array[posTwo], array[posOne]];
}

console.log(insertionSort(array));
