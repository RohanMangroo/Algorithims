function solveSudoku(board) {
  const positions = getPositions(board);
  let pointer = 0;

  while (pointer < positions.length) {
    const currentPosition = positions[pointer];
    const [row, col] = currentPosition;
    const currentCellValue = board[row][col] + 1;

    const rowNumbers = getRowNumbers(currentPosition, board);
    const colNumbers = getColNumbers(currentPosition, board);
    const grid = getGrid(currentPosition);
    const gridNumbers = getGridNumbers(grid, board);

    for (let value = currentCellValue; value <= 10; value++) {
      if (value === 10) {
        board[row][col] = 0;
        pointer--;
        break;
      }

      if (
        !(value in rowNumbers) &&
        !(value in colNumbers) &&
        !(value in gridNumbers)
      ) {
        board[row][col] = value;
        pointer++;
        break;
      }
    }
  }

  return board;
}

function getPositions(board) {
  const array = [];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 0) array.push([row, col]);
    }
  }
  return array;
}

function getRowNumbers(position, board) {
  const [row] = position;
  const rowNumbers = {};

  for (let col = 0; col < board[0].length; col++) {
    if (board[row][col]) rowNumbers[board[row][col]] = true;
  }
  return rowNumbers;
}

function getColNumbers(position, board) {
  const col = position[1];
  const colNumbers = {};

  for (let row = 0; row < board.length; row++) {
    if (board[row][col]) colNumbers[board[row][col]] = true;
  }
  return colNumbers;
}

function getGridNumbers(positions, board) {
  const gridNumbers = {};
  const { startRow, endRow, startCol, endCol } = positions;

  for (let row = startRow; row <= endRow; row++) {
    for (let col = startCol; col <= endCol; col++) {
      if (board[row][col]) gridNumbers[board[row][col]] = true;
    }
  }
  return gridNumbers;
}

function getGrid(position) {
  const boarders = [2, 5, 8];
  const [currRow, currCol] = position;

  for (let row = 0; row < boarders.length; row++) {
    for (let col = 0; col < boarders.length; col++) {
      if (currRow <= boarders[row] && currCol <= boarders[col]) {
        return {
          startRow: boarders[row] - 2,
          endRow: boarders[row],
          startCol: boarders[col] - 2,
          endCol: boarders[col],
        };
      }
    }
  }
}
