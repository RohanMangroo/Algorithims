//Given a 2d array of intervals return an array of the merged intervals

//The intervals [2, 5] and [1, 10] can be merged because 5 is within 1-10. In other words firstArray[1] >= secondArray[0]

//Remember to sort the array otherwise the checking of the merged array will not work

//To sort a 2d array...srray.sort((a, b) => a[0] - b[0]);

//Use the result array to your advantage. Use it as the house for the current overlapped array and refer to it when you need to check if the next inner array needs to be collapsed

function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  let result = [array[0]];

  for (let i = 1; i < array.length; i++) {
    const resultEnd = result[result.length - 1][1];
    const arrayStart = array[i][0];

    //If this is triggered we have an overlap
    if (resultEnd >= arrayStart) {
      const firstNum = Math.min(result[result.length - 1][0], array[i][0]);
      const secondNum = Math.max(result[result.length - 1][1], array[i][1]);
      result[result.length - 1] = [firstNum, secondNum];
    } else {
      //Otherwise no overlap, so we just push the current inner array
      result.push(array[i]);
    }
  }

  return result;
}
