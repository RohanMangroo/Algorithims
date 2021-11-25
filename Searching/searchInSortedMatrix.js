//Given a matrix where the rows are sorted and the cols are sorted return the position of a  target number
//If the target number is not in the matrix return [-1, -1]

//To solve this problem we have to evaluate what a row and col being sorted means

//If both ros and cols are sorted that means..
//The top left position is the smallest number in the matrix and everything to the right AND bottom of it is greater
//The bottom right position is the greatest number in the matirx and everything to the left AND top are smaller
//BUT the top right AND bottom left positions are numbers somwhere in the matrix so they have 'directions' based on thiir values

//Use these directions (greater than target/less than target) to determine which direction to move in

function searchInSortedMatrix(matrix, target) {
  let startRow = 0;
  let startCol = 0;
  let endRow = matrix.length - 1;
  let endCol = matrix[0].length - 1;

  let row = endRow;
  let col = startCol;

  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] === target) return [row, col];

    if (matrix[row][col] > target) row--;
    else col++;
  }

  return [-1, -1];
}
