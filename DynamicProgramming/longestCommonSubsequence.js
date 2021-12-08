function longestCommonSubsequence(str1, str2) {
  return calculateLCS(
    produceMatrix(str1.length + 1, str2.length + 1),
    str1,
    str2
  );
}

function produceMatrix(height, width) {
  const matrix = [];
  for (let i = 0; i < height; i++) {
    const innerArray = new Array(width).fill('');
    matrix.push(innerArray);
  }
  return matrix;
}

function calculateLCS(matrix, str1, str2) {
  //Remember that array[row-1], array[col-1] will give access to the correct element in the array
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      const letterOne = str1[row - 1];
      const letterTwo = str2[col - 1];

      const leftString = matrix[row][col - 1];
      const topString = matrix[row - 1][col];
      const diagonalString = matrix[row - 1][col - 1];

      if (letterOne === letterTwo) {
        matrix[row][col] = diagonalString + letterOne;
      } else {
        const maxAdjacentString =
          topString.length >= leftString.length ? topString : leftString;
        matrix[row][col] = maxAdjacentString;
      }
    }
  }

  return matrix[str1.length][str2.length].split('');
}
