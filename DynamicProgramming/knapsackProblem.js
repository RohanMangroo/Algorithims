function knapsackProblem(items, capacity) {
  const matrix = produceMatrix(items.length + 1, capacity + 1);
  populateMatrix(matrix, items, capacity);
  return getItems(matrix, items, capacity);
}

function produceMatrix(height, width) {
  const matrix = [];
  for (let i = 0; i < height; i++) {
    matrix.push(new Array(width).fill(0));
  }
  return matrix;
}

function populateMatrix(matrix, items, capacity) {
  for (let row = 1; row < matrix.length; row++) {
    const [currentItemValue, currentItemWeight] = items[row - 1];
    for (let col = 1; col < matrix[0].length; col++) {
      const currentCapacity = col;
      if (currentItemWeight > currentCapacity)
        matrix[row][col] = matrix[row - 1][col];
      else {
        const temp =
          currentItemValue +
          matrix[row - 1][currentCapacity - currentItemWeight];
        matrix[row][col] = Math.max(
          currentItemValue,
          temp,
          matrix[row - 1][col]
        );
      }
    }
  }
}

function getItems(matrix, items) {
  let row = matrix.length - 1;
  let col = matrix[0].length - 1;

  const maxValue = matrix[matrix.length - 1][matrix[0].length - 1];
  const result = [];

  while (col > 0 && row > 0) {
    const [currentValue, currentWeight] = items[row - 1];
    console.log(currentValue, currentWeight);
    console.log('col...', col);
    console.log('row...', row);
    if (matrix[row][col] === matrix[row - 1][col]) row--;
    else {
      result.unshift(row - 1);
      row--;
      col -= currentWeight;
    }
  }
  return [maxValue, result];
}
