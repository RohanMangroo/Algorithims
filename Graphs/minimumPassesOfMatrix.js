//Given a 2d array of negative and positive elements return the minimum number of passes it takes to turn all negative elements into positive elements
//A negative element can only turned into a positive element if any of it's adjacent elements is positive(0 is not positive or negative)

//To solve this problem we will first identify all the positive elements. We will keep these elemnts in a queue(array) data structure. We will then scan through the queue turning any of the adjecent cells positive and also shifting off the top of the queue. Each time we turn a new cell positive we will drop that position into a second queue structure. We will continue to scan through elements until the second queue is empty. If it's empty then we know we did not make any changes.
function minimumPassesOfMatrix(matrix) {
  const currentQueue = [];
  const nextQueue = [];
  const result = { count: 0 };

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] > 0) currentQueue.push([row, col]);
    }
  }

  countPasses(matrix, currentQueue, nextQueue, result);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] < 0) return -1;
    }
  }

  return result.count - 1;
}

function countPasses(matrix, currentQueue, nextQueue, result) {
  const length = currentQueue.length;
  let i = 0;

  while (i < length) {
    const currentPos = currentQueue.shift();
    checkSurroundings(matrix, nextQueue, currentPos);
    i++;
  }

  result.count++;
  if (nextQueue.length) countPasses(matrix, nextQueue, currentQueue, result);
}

function checkSurroundings(matrix, nextQueue, currentPos) {
  const [row, col] = currentPos;

  const top = row - 1 >= 0 && matrix[row - 1][col] < 0;
  const bottom = row + 1 < matrix.length && matrix[row + 1][col] < 0;
  const left = col - 1 >= 0 && matrix[row][col - 1] < 0;
  const right = col + 1 < matrix[0].length && matrix[row][col + 1] < 0;
  // console.log(top, bottom, left, right)
  if (top) turnPositive(matrix, row - 1, col, nextQueue);
  if (bottom) turnPositive(matrix, row + 1, col, nextQueue);
  if (left) turnPositive(matrix, row, col - 1, nextQueue);
  if (right) turnPositive(matrix, row, col + 1, nextQueue);
}

function turnPositive(matrix, row, col, nextQueue) {
  matrix[row][col] *= -1;
  nextQueue.push([row, col]);
}
