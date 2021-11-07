//Given 2 arrays of equal length find the max/min sum if you had to pair each number with it's coresponding index in the other array
//If you're trying to find the min sum, sort 1 array normally and the other in reverse, add Math.max(arrayOne[i], arrayTwo[i]) to the running sum

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  if (fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
  }

  let result = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    result += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }

  return result;
}
