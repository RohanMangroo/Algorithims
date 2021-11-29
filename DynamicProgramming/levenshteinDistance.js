//Given two strings find the 'Levenshtein Distance'
//The Levenshtein Distance is the minimum number of edits it takes to turn one string into another
//The transformations are insertion, deletion, substitution

//To solve this problem we need to use dynamic programming
//We will create a table that will allow us keep track of how many edits it takes to transform parts of the firstString into parts of the secondString
//We will fill out the table as we go along and this will help us determine the minimum number of edits we need at any given point

//THIS DESCRIPTION NEEDS WORK!!!

function levenshteinDistance(str1, str2) {
  const table = constructTable(str1.length + 1, str2.length + 1);

  for (let row = 0; row < str1.length; row++) {
    for (let col = 0; col < str2.length; col++) {
      if (str1[row] === str2[col]) {
        table[row + 1][col + 1] = table[row][col];
      } else {
        table[row + 1][col + 1] =
          Math.min(table[row][col], table[row + 1][col], table[row][col + 1]) +
          1;
      }
    }
  }
  return table[str1.length][str2.length];
}

function constructTable(rows, cols) {
  const table = [];

  for (let i = 0; i < rows; i++) {
    if (i === 0) {
      const array = [];
      for (let j = 0; j < cols; j++) {
        array.push(j);
      }
      table.push(array);
    } else {
      table.push(new Array(cols).fill(0));
      table[i][0] = i;
    }
  }
  return table;
}
