//Given an array of denominations and a total find the minimum number of coins to creat the total

//This problem is very similar to 'number of ways to create total' problem
//We will generate a base case and build up to the solution

//My current denomination is contributing '1' coin to the total, but what about the difference between the total and current denomination? Have I already solved that problem?
function minNumberOfCoinsForChange(n, denoms) {
  const minCoins = new Array(n + 1).fill(Infinity);
  minCoins[0] = 0;

  for (let i = 0; i < denoms.length; i++) {
    const currentPos = denoms[i];
    for (let j = currentPos; j < minCoins.length; j++) {
      const minCoinsOfDiff = j - denoms[i];
      minCoins[j] = Math.min(minCoins[minCoinsOfDiff] + 1, minCoins[j]);
    }
  }

  const result = minCoins[minCoins.length - 1];
  if (result === Infinity) return -1;
  else return result;
}
