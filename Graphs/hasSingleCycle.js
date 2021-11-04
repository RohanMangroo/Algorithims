//Given an array return a boolean if the array has a single cycle
//The cycle consists of moving from one index to the other in this fashion, the elements value will determine how many steps forward or backwards you take
//Positive element goes forward
//Negative element goes backwards
//If at any point you reach the end of the array, you wrap around
//For example if you are at the end of the array and your current element is 1, you simply wrap around to the beginning of the array

//There are two solutions for this problem
//The first is in O(n) time and O(n) space. I'm using an Object to track visited nodes. If I have seen the node before I return false, otherwise I drop that index into the Object and add 1 to a length property. If at any point the length property is equal to the length of the given array, I return true. The length property being equal to the array.length and the Object never seeing any node more than once means that I've visted every node exactly once and have exactly one cycle

function hasSingleCycle(array) {
  const visited = {};
  let length = 0;
  let currentIndex = 0;

  while (length <= array.length) {
    let newIndex = currentIndex + array[currentIndex];

    //Here we are calculating the new indexes. If the new index is less than zero we need to wrap around but we must account for a newIndex value that is continually less than zero. We need to keep adding the array.length in order to get to the right index.
    //Another way to calculate the newIndex would be to find the modulos...Then you wouldn't have to use a while loop
    //const newIndex = array[index] % array.length;
    while (newIndex < 0) {
      newIndex = array.length + newIndex;
    }
    //Here we are also finding the newIndex position but for situations where the newIndex is greater than the array.length
    while (newIndex > array.length) {
      newIndex = newIndex - array.length;
    }

    if (newIndex in visited) return false;
    else {
      visited[newIndex] = true;
      length++;
      currentIndex = newIndex;
    }
    if (length === array.length) return true;
  }
}

//This is the optimal solution using O(n) time but O(1) space
//In this solution we are paying attention to an origin point and a length property
//In our loop we need to check if we have ever seen the origin before, if we have and length is NOT equal to the length of the array then we do not have a single cycle and we return false
//If we have seen the origin before and length DOES equal array.length then we have a single cycle
function hasSingleCycle(array) {
  const origin = 0;
  let length = 0;
  let currentIndex = 0;

  while (length < array.length) {
    let newIndex = currentIndex + array[currentIndex];

    while (newIndex <= 0) {
      newIndex = array.length + newIndex;
    }
    while (newIndex >= array.length) {
      newIndex = newIndex - array.length;
    }
    currentIndex = newIndex;
    length++;

    if (currentIndex === origin && length !== array.length) return false;
    if (currentIndex === origin && length === array.length) return true;
  }

  return false;
}
