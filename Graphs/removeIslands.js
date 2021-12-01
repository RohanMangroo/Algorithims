//Remove Islands

function removeIslands(matrix) {
  findPerimeterElements(matrix);

  for (let col = 0; col < matrix[0].length; col++) {
    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][col] === 1) matrix[row][col] = 0;
      if (matrix[row][col] === 2) matrix[row][col] = 1;
    }
  }
  return matrix;
}

function findPerimeterElements(matrix) {
  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 1) traverseRecursively(matrix, 0, col);
  }

  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][matrix[0].length - 1] === 1)
      traverseRecursively(matrix, row, matrix[0].length - 1);
  }

  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[matrix.length - 1][col] === 1)
      traverseRecursively(matrix, matrix.length - 1, col);
  }

  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 1) traverseRecursively(matrix, row, 0);
  }
}

function traverseRecursively(matrix, row, col) {
  const isValid = checkValidity(matrix, row, col);
  if (!isValid) return;

  matrix[row][col] = 2;

  traverseRecursively(matrix, row - 1, col);
  traverseRecursively(matrix, row + 1, col);
  traverseRecursively(matrix, row, col - 1);
  traverseRecursively(matrix, row, col + 1);
}

function checkValidity(matrix, row, col) {
  if (
    row > matrix.length - 1 ||
    col > matrix[0].length - 1 ||
    row < 0 ||
    col < 0 ||
    matrix[row][col] === 0 ||
    matrix[row][col] === 2
  )
    return false;
  else return true;
}
