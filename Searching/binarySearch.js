//The task here is tow find a target number using the Binary Search algorithm
//To do Binary Search we establish a 'start' and 'stop' position and then calculate a midPoint that we will check against the value we are looking for.
//If the array[midPoint] === value, we return that midPoint, but itf the array[midPoint] < value, we now know(because the array is sorted) that our value must be on the right side so we change our end points to look on that right half

//We can do this iterevly or recursively

function binarySearch(array, target) {
  //array is sorted
  let start = 0;
  let stop = array.length - 1;

  while (start <= stop) {
    const midPoint = Math.floor((start + stop) / 2);
    if (array[midPoint] === target) return midPoint;
    else {
      if (array[midPoint] < target) start = midPoint + 1;
      else stop = midPoint - 1;
    }
  }

  return -1;
}
