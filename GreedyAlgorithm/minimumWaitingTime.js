//Given an array of positive integers find the minimum waiting time if at a given position the waiting time is the sum of all elements to the left

//The key to solving this problem is sorting the array so the smallest numbers will be what we use to find waiting time. Once the array is sorted the largest number won't even be part of the end result because there is no task after it that it needs to wait for.

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let currentRunningSum = 0;
  let minimumWaitingTime = 0;
  //We are starting at the 1st index rather than the 0th because the 0th index wating time will be 0
  //The waiting time for a given index will be the running sum plus the value directly to the left
  //Once we have the running sum we can add it to the result(min waiting time)
  for (let i = 1; i < queries.length; i++) {
    currentRunningSum += queries[i - 1];
    minimumWaitingTime += currentRunningSum;
  }

  return minimumWaitingTime;
}
