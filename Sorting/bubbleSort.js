//BUBBLE SORT
//Time Complexity - O(n^2);
//Space Complexity - O(1);

//----------------------------------------------------------------//

//Sort an array of 'n' length using the Bubble Sort algorithm//

// This algorithm sorts an array by checking if the ajacent element is of greater value
// If it is, the current element and the ajacent element swap positions and the loop continues with the current element now being the former ajacent element

//----------------------------------------------------------------//

const array = [23, 72, -1, 474, 29, 10, 99];

function bubbleSort(array) {
  //This is a stop position to tell the algorithm not to go all the way to the end
  //After an element is placed in its sorted position, there's no reason to check it again
  let stopPos = array.length - 1;

  //The outer loop acts as a counter
  //It will fire array.length -1 number of times
  for (let i = 0; i < array.length; i++) {
    //The inner loop is doing the checking and the swapping
    for (let j = 0; j < stopPos; j++) {
      //If the current element is greater than the adjacent element, they swap
      if (array[j] > array[j + 1]) {
        //Calling the swapping function and passing in the two positions
        swap(j, j + 1, array);
      }
    }
    //Decrementing the stop postion
    //After we place an element in it's final position we no longer need to check it
    stopPos--;
  }
  return array;
}

function swap(posOne, posTwo, array) {
  [array[posOne], array[posTwo]] = [array[posTwo], array[posOne]];
}

//----------------------------------------------------------------//

console.log(bubbleSort(array));
