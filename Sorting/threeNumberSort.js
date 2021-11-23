//Given an array of integers and a second order array containing every unique integer, return the given array in the order that the order array specifies

//To solve this problem we will use pointers
//Our initial pointer will scan through the order array
//We will establish a LEFT and RIGHT pointer in given array
//LEFT pointer will be looking for non i position value
//RIGHT pointer will be looking for i position value
//When they are both satisfied they will swap positions

//Once we have ordered all the numbers of the current i position in the order array we will move on to the next
//RIGHT will always start at the end of the array and LEFT will start where it left off

function threeNumberSort(array, order) {
  let startPos = 0;
  let endPos = array.length - 1;
  for (let i = 0; i < order.length - 1; i++) {
    let leftPointer = startPos;
    let rightPointer = endPos;
    while (leftPointer < rightPointer) {
      if (array[leftPointer] !== order[i] && array[rightPointer] === order[i]) {
        const tempVar = array[leftPointer];
        array[leftPointer] = array[rightPointer];
        array[rightPointer] = tempVar;
      }
      if (array[leftPointer] === order[i]) {
        leftPointer++;
      }
      if (array[rightPointer] !== order[i]) {
        rightPointer--;
      }
    }
    startPos = leftPointer;
  }
  return array;
}
