//Given a 2d matrix of potentially unequal height return an array of the spiral traveral of the matrix

//This problem can be very tricky
//To solve this we need to move through the array using 'for loops'. But the trick is that we only need one collection of loops because moving in a matrix spiral fashion means doing the same movement over and over again once we start and end at the perimeter of the outter part of the matrix. Best to draw this one out on paper or white board.

//Some things to look out for are rescanning the same part of the matrix
//Because we are scanning in the order...left->right top->bottom right->left bottom->top, the left->right and right->left could potentially scan the same array if the startingRow and endingRow are the same. Same goes for top->bottom and bottom->top(columns)

function spiralTraverse(array) {
    let startCol = 0;
      let endCol = array[0].length -1;
      let  startRow = 0;
      let endRow = array.length -1;
      let result = [];
      
      while(startCol <= endCol && startRow <= endRow){
          for(let col=startCol; col<=endCol; col++)
              {result.push(array[startRow][col])}

          for(let row=startRow+1; row<=endRow; row++)
              {result.push(array[row][endCol])}

          for(let col=endCol-1; col>startCol-1; col--){

              if(startRow === endRow){return result}
              result.push(array[endRow][col])
          }
          for(let row=endRow-1; row>startRow; row--){

              if(startCol === endCol){return result}
              result.push(array[row][startCol])
          }
          startCol += 1;
          startRow += 1;
          endCol -= 1;
          endRow -= 1;
      }
      return result