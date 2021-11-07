//Find the 3 largest numbers in a given array
//To solve this problem initialze an array of length 3 with the first 2 values being -Infinity and the 3rd value being to first element in the array. Since we are looking for the 3 LARGEST elements, having a really small number like -Infinity will be helpfull in the beginning

//Scan the given array from left to right and check for 3 situations back to back to back. If the number greater than result[2], then everything needs to shift from result[2], and so on...

function findThreeLargestNumbers(array) {
  const result = [-Infinity, -Infinity, array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > result[2]) swap(2, array[i], result);
    else if (array[i] > result[1]) swap(1, array[i], result);
    else if (array[i] > result[0]) swap(0, array[i], result);
  }

  return result;
}

function swap(startPos, biggerNum, result) {
  for (let i = startPos; i >= 0; i--) {
    let currentNum = result[i];
    result[i] = biggerNum;
    biggerNum = currentNum;
  }
}
