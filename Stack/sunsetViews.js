//Given an array of non zero positive integers and a direction(left or right), return an array of the greatest currentMax going from that direction

//To solve this we can use a stack

//We will look at our result array as a stack. As we scan through the given array we will compare our current element to the top of the stack will be the currentMax

function sunsetViews(buildings, direction) {
  const sunsetViews =
    direction === 'WEST'
      ? findSunsetViews(0, 1, buildings)
      : findSunsetViews(buildings.length - 1, -1, buildings);

  return sunsetViews;
}

function findSunsetViews(position, step, buildings) {
  const result = [];
  let currentMax = buildings[position];
  while (position < buildings.length && position >= 0) {
    if (!buildings[position - step] || buildings[position] > currentMax) {
      result.push(position);
      currentMax = buildings[position];
    }

    position += step;
  }

  if (step === -1) return result.reverse();
  else return result;
}
