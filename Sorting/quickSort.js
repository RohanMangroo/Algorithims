//QUICK SORT
//Time Complexity - O(nlog(n));
//Space Complexity - O(1);

//----------------------------------------------------------------//

//Sort an array of 'n' length using the Quick Sort algorithm//

//Quick sort is a pivot sorting algorithm. It will establish a pivot and then scan the array with a left and right pointer
//When the left pointer is GREATER THAN pivot AND right pointer LESS THAN pivot, the values at the two pointers will swap
//Essentially we are trying to place all the numbers LESS THAN the pivot to the left and all the numbers GREATER THAN the pivot to the right
//Once that first pivot's left and right pointers overlap the pivot will take the place of the right pointer
//Now we will have TWO halves. The LEFT half of the pivot and the RIGHT half of the pivot
//We will recursivly call the QuickSort function on each half, until we are at a single element, in which case we return

//----------------------------------------------------------------//

const array = [6767, 100, -1, 234, -2233, -22, 34];

function quickSort(array) {
  quickSortHelper(0, array.length - 1, array);
  return array;
}

function quickSortHelper(start, stop, array) {
  //Here we are checking if we have one element left to sort (in which case it's sorted, single elements are sorted) or if our perimeter postions are no longer valid (meaning the start is already passed the stop). In both cases we do nothing and return
  if (start >= stop) return;

  //Here we are setting up the pivot and left and right pointers
  let pivot = start;
  let left = start + 1;
  let right = stop;

  //As long as the the left and right pointers are not passd one another we run this while loop
  //It can't just be '=' equal because the right pointer still needs to find a number less than the pivot in order for it to correctly swap at the end
  while (left <= right) {
    //Checking if the left value and the right value meet the criteria to be swapped
    if (array[left] >= array[pivot] && array[right] <= array[pivot]) {
      swap(left, right, array);
    }

    //Moving the pointers if they have not found what they needed in order to be swapped
    if (array[left] <= array[pivot]) left++;
    if (array[right] >= array[pivot]) right--;
  }
  swap(pivot, right, array);

  //Recursivly calling the quickSort function on the 2 halves created by the pivot takin the place of the right pointer
  quickSortHelper(start, right - 1, array);
  quickSortHelper(right + 1, stop, array);
}

function swap(posOne, posTwo, array) {
  [array[posOne], array[posTwo]] = [array[posTwo], array[posOne]];
}

console.log(quickSort(array));
