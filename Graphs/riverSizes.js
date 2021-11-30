//Given a 2d array of 1's and 0's return the all the lengths of rivers, with rivers being adjacent collections of 1's
//To solve this problem I'll first create an adjecent matrix that will house true false. This will tell me if I have visited a node already
//I will then scan through the given 2d matrix with nested for loops and when I encounter a 1 I will recursively search for the river containing 1's

//I will check all 4 directions

function riverSizes(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  const table = createTable(height, width);
  const riverSizes = [];

  const info = {
    height: matrix.length,
    width: matrix[0].length,
    table: table,
  };
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (table[row][col] === false && matrix[row][col] === 1) {
        const current = { size: 0 };
        riverSizes.push(findRiverSizes(matrix, info, current, row, col));
      } else {
        table[row][col] = true;
      }
    }
  }
  return riverSizes;
}

function findRiverSizes(matrix, info, current, row, col) {
  if (
    row > info.height - 1 ||
    col > info.width - 1 ||
    row < 0 ||
    col < 0 ||
    matrix[row][col] === 0 ||
    info.table[row][col] === true
  )
    return;
  else current.size++;

  info.table[row][col] = true;

  findRiverSizes(matrix, info, current, row, col + 1);
  findRiverSizes(matrix, info, current, row + 1, col);
  findRiverSizes(matrix, info, current, row - 1, col);
  findRiverSizes(matrix, info, current, row, col - 1);

  return current.size;
}

function createTable(height, width) {
  const table = [];
  for (let i = 0; i < height; i++) {
    const innerArray = [];
    for (let j = 0; j < width; j++) {
      innerArray.push(false);
    }
    table.push(innerArray);
  }
  return table;
}
