function boggleBoard(board, words) {
  const result = {};
  const root = {};
  const inProgressBoard = board.map((row) => row.map((col) => false));

  words.forEach((word) => populateTrie(word, root));

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      helperFunction(board, row, col, inProgressBoard, root, result);
    }
  }
  // console.dir(root['k']['a']['p'])
  return Object.keys(result);
}

function helperFunction(
  board,
  row,
  col,
  inProgressBoard,
  currentLevel,
  result
) {
  if (!(board[row][col] in currentLevel)) return;
  if (currentLevel[board[row][col]].end)
    result[currentLevel[board[row][col]].end] = true;

  inProgressBoard[row][col] = true;
  const children = getChildrenNodes(board, row, col, inProgressBoard);
  if (row === 0 && col === 6) {
    // console.log(children)
    // console.log(inProgressBoard)
  }
  children.forEach((child) =>
    helperFunction(
      board,
      child[0],
      child[1],
      inProgressBoard,
      currentLevel[board[row][col]],
      result
    )
  );

  inProgressBoard[row][col] = false;
}

function getChildrenNodes(board, row, col, inProgressBoard) {
  if (row === 0 && col === 6) {
    console.log(row, col);
    console.log(inProgressBoard[row + 1][col + 1]);
    console.log(board[row + 1], board[7]);
  }
  const nodes = [];

  if (
    board[row - 1] &&
    board[row - 1][col - 1] &&
    inProgressBoard[row - 1][col - 1] !== true
  )
    nodes.push([row - 1, col - 1]);
  if (
    board[row - 1] &&
    board[row - 1][col] &&
    inProgressBoard[row - 1][col] !== true
  )
    nodes.push([row - 1, col]);
  if (
    board[row - 1] &&
    board[row - 1][col + 1] &&
    inProgressBoard[row - 1][col + 1] !== true
  )
    nodes.push([row - 1, col + 1]);
  if (
    board[row] &&
    board[row][col - 1] &&
    inProgressBoard[row][col - 1] !== true
  )
    nodes.push([row, col - 1]);
  if (
    board[row] &&
    board[row][col + 1] &&
    inProgressBoard[row][col + 1] !== true
  )
    nodes.push([row, col + 1]);
  if (
    board[row + 1] &&
    board[row + 1][col - 1] &&
    inProgressBoard[row + 1][col - 1] !== true
  )
    nodes.push([row + 1, col - 1]);
  if (
    board[row + 1] &&
    board[row + 1][col] &&
    inProgressBoard[row + 1][col] !== true
  )
    nodes.push([row + 1, col]);
  if (
    board[row + 1] &&
    board[row + 1][col + 1] &&
    inProgressBoard[row + 1][col + 1] !== true
  )
    nodes.push([row + 1, col + 1]);

  return nodes;
}

function populateTrie(string, root) {
  let currentNode = root;

  for (let j = 0; j < string.length; j++) {
    const jPositionLetter = string[j];
    if (!(jPositionLetter in currentNode)) currentNode[jPositionLetter] = {};
    currentNode = currentNode[jPositionLetter];
  }

  currentNode['end'] = string;
}
