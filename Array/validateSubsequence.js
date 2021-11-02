//Given two non-empty arrays, return a boolean if the second array is a subsequence of the first

//The elements do not have to be adjacent but they do have to be in the same order

const array = [5, 1, 21, 6, 8, 10, 14, -3, 2, -4];
const sequence = [1, 14, -3, -4];

function validateSubsequence(array, sequence) {
  //Keeping track of the pos in the sequence array so we can alter it when we need to
  let sequencePos = 0;
  for (let i = 0; i < array.length; i++) {
    //If we encounter an element in both the array and the sequence we will move the sequence position over by one and the array position will automatically move over by one because it's being controlled by the for loop
    if (array[i] === sequence[sequencePos]) sequencePos++;
    //If we ever have a sequence position that is greater than the length of the sequence array we know we have a valid sub sequence and we can return true
    if (sequencePos > sequence.length - 1) return true;
  }
  //Since we have the 'true' condition within the loop, if we ever break out of the loop we know we can return false
  return false;
}

console.log(validateSubsequence(array, sequence));
