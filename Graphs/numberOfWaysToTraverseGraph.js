//You are given a length and width of a 2d matrix. The task is to return the number of paths we can take to get from the top left corner to the bottom right corner

//To solve this problem I created a matrix and recursively traversed each node, goin right, then down. If at any point I was outside the matrix I returned. When I got to the destination node I increased a count, eventually returning that count.

function numberOfWaysToTraverseGraph(width, height) {
  const matrix = createMatrix(width, height);
  const destination = [height - 1, width - 1];
  const info = {
    count: 0,
    width: width,
    height: height,
  };

  traverseMatrix(matrix, destination, 0, 0, info);
  return info.count;
}

function traverseMatrix(matrix, destination, row, col, info) {
  if (row > info.height || col > info.width) return;

  if (row === destination[0] && col === destination[1]) {
    info.count++;
    return;
  }

  traverseMatrix(matrix, destination, row, col + 1, info);
  traverseMatrix(matrix, destination, row + 1, col, info);

  return info;
}

function createMatrix(width, height) {
  const matrix = [];
  for (let i = 0; i < height; i++) {
    const innerArray = [];
    for (let j = 0; j < width; j++) {
      innerArray.push(0);
    }
    matrix.push(innerArray);
  }
  return matrix;
}
