//Given an array of denominations and a total, find all the ways to create this total with the given denominations.

//This is dynamic programming problem

//To solve this we dynamically generate solutions as we go and use those solutions to solve the coming problems
//To solve this problem we need to figure out how many ways we can make not just the given total but all the numbers in the range of 0 and the total. By solving it in this manner we can dynamically generate a solution

//The problem comes down to this idea...If I am equal to the value 3, how many ways can I make 4? The number of ways I can make 4 with 3 is equal to the current numbers of ways to make 4 PLUS the numbers of ways to make my complement to 4. If I am 3 my complement to 4 is 1. How ever many ways there are to make 1, we add that to the current number of ways to make 4 and there we have the total ways to make 4.

//curentWays[j] = currentWays[j] + currentWays[complementPos]

function numberOfWaysToMakeChange(n, denoms) {
  const currentWays = new Array(n + 1).fill(0);
  currentWays[0] = 1;

  for (let i = 0; i < denoms.length; i++) {
    const currentPos = denoms[i];
    if (currentPos <= currentWays.length) {
      for (let j = currentPos; j < currentWays.length; j++) {
        const complementPos = j - currentPos;
        currentWays[j] = currentWays[j] + currentWays[complementPos];
      }
    }
  }

  return currentWays[currentWays.length - 1];
}
