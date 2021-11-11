//Given an array and a number move all instances of that element to the end of the array. Must do this in place

//To solve this problem use pointers
//1 left pointer and 1 right pointer
//left pointer is looking for instances of the number
//right pointer is looking for non-instances of that number
//when left === number AND right !== number, swap them, use while(left < right) as loop and condition

function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] === toMove && array[right] !== toMove) {
      [array[left], array[right]] = [array[right], array[left]];
    }
    if (array[left] !== toMove) left++;
    if (array[right] === toMove) right--;
  }

  return array;
}
