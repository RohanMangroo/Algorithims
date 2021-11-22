//Given an array of elements return another array of the next greatest elements. The given array is treated as a circular array and if no greater elements exists return -1

//The brute force approach to this problem is to scan the array from the current position to the end and then to the beginning to the current position finding the first greatest element you find

//A better approach is to utilize a stack
//Initialize a result array of the same length as the given array and fill with -1

//Initalize a stack that will hold INDEXs. It will begin by holding the first index(0)

//Start scanning the given array at index 1. At every point in our iteration of the given array we will ask the question...
//Is the current value greater than the current value represented by the index at the top of the stack?
//If it is, that means we have found the NEXT GREATEST value for the index at the top of the stack.
//We will pop that index off the top of the stack and use it to place our current value in the result array. Since all the elements in the stack are indexs coresponding to elements them came from, we can confidently use them as positions in the result array.

//We need to scan the array in this fashion twice because of the circular nature of this problem

function nextGreaterElement(array) {
  const result = new Array(array.length).fill(-1);
  const stack = [];
  helperFunction(array, result, stack);
  helperFunction(array, result, stack);
  return result;
}

function helperFunction(array, result, stack) {
  for (let i = 0; i < array.length; i++) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while (array[i] > array[stack[stack.length - 1]]) {
        const currentElement = array[i];
        const lastStackIndex = stack.pop();
        result[lastStackIndex] = currentElement;
      }
      stack.push(i);
    }
  }
}
