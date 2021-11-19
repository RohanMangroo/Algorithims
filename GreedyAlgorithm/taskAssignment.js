//Given an array of numbers return a 2d array of index pairs such that the max sum of the values represented by the pairs is the smallest it could be

//This problem is prtty simple. We just need to sort the array and use a left and right pointer to pair the lowest number with the higest number to find the smallest sum for all pairs. But before we do that we need a way to keep track of the indexes so using an object is the right move here.

function taskAssignment(k, tasks) {
  const result = [];
  const obj = {};
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] in obj) obj[tasks[i]].push(i);
    else obj[tasks[i]] = [i];
  }

  tasks.sort((a, b) => a - b);
  let left = 0;
  let right = tasks.length - 1;

  while (left < right) {
    const indexOne = obj[tasks[left]].pop();
    const indexTwo = obj[tasks[right]].pop();

    result.push([indexOne, indexTwo]);

    left++;
    right--;
  }

  return result;
}
