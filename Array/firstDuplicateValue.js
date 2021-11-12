//Given an array of integers from 1 - n, where n is the length of the array, inclusive return the first duplicate element

//To solve this problem we must realize what the prompt is actually saying. If an array has numbers in it from 1 - n and the length of the array is n, that means every element in the array can potentially corespond to an index in the array

//Use that connection to visit each element and modifiy(turn negative) each element, if you come across a modified element you know you have been there before and return the element that brought you there

function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
    const newIndex = Math.abs(array[i]) - 1;
    if (array[newIndex] < 0) return Math.abs(array[i]);
    else array[newIndex] = 0 - array[newIndex];
  }
  return -1;
}
