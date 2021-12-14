function maximumSumSubmatrix(matrix, size) {
  const areaMatrix = produceAreaMatrix(matrix);
  populateMatrix(areaMatrix, matrix);
  return traverseAreaMatrix(areaMatrix, size);
}

function produceAreaMatrix(matrix) {
  const areaMatrix = [];
  let rowRunningSum = 0;
  let colRunningSum = matrix[0][0];

  for (let row = 0; row < matrix.length; row++) {
    const innerArray = [];
    if (!row)
      matrix[row].forEach((value) => innerArray.push((rowRunningSum += value)));
    else {
      matrix[row].forEach((value) => innerArray.push(0));
      innerArray[0] = colRunningSum += matrix[row][0];
    }
    areaMatrix.push(innerArray);
  }

  return areaMatrix;
}

function populateMatrix(areaMatrix, matrix) {
  for (let row = 1; row < areaMatrix.length; row++) {
    for (let col = 1; col < areaMatrix[row].length; col++) {
      const top = areaMatrix[row - 1][col];
      const left = areaMatrix[row][col - 1];
      const diagonal = areaMatrix[row - 1][col - 1];

      areaMatrix[row][col] = top + left + matrix[row][col] - diagonal;
    }
  }
}

function traverseAreaMatrix(areaMatrix, size) {
  let maxSum = -Infinity;

  for (let row = size - 1; row < areaMatrix.length; row++) {
    for (let col = size - 1; col < areaMatrix[0].length; col++) {
      const currentPosSum = areaMatrix[row][col];
      const leftBorderIndex = col - size;
      const topBorderIndex = row - size;

      if (leftBorderIndex >= 0 && topBorderIndex >= 0) {
        maxSum = Math.max(
          maxSum,
          currentPosSum -
            (areaMatrix[row][leftBorderIndex] +
              areaMatrix[topBorderIndex][col]) +
            areaMatrix[topBorderIndex][leftBorderIndex]
        );
      } else if (leftBorderIndex >= 0)
        maxSum = Math.max(
          maxSum,
          currentPosSum - areaMatrix[row][leftBorderIndex]
        );
      else if (topBorderIndex >= 0)
        maxSum = Math.max(
          maxSum,
          currentPosSum - areaMatrix[topBorderIndex][col]
        );
      else maxSum = Math.max(maxSum, currentPosSum);
    }
  }

  return maxSum;
}
