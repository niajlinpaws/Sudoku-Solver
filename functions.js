module.exports={
	checkRow(board, column, row, value) {
	  // Iterate through every value in the row
	  for(let i = 0; i < board[row].length; i++) {
	    // If a match is found and is not equal to column passed, return false
	    if(board[row][i] === value) {
	      if(i !== column)
	      return false;
	    }
	  }
	  // If no match was found, return true
	  return true;
	},
	checkColumn(board, column, row, value) {
	  // Iterate through each value in the column
	  for(let i = 0; i < board.length; i++) {
	    // If a match is found and is not equal to row passed, return false
	    if(board[i][column] === value) {
	    	if(i !== row)
	        return false;
	    }
	  }
	  // If no match was found, return true
	  return true;
	},
	check3x3Square(board, column, row, value) {
	  // Save the upper left corner
	  let columnCorner = 0,
	      rowCorner = 0,
	      squareSize = 3;

	  // Find the left-most column
	  while(column >= columnCorner + squareSize) {
	    columnCorner += squareSize;
	  }

	  // Find the upper-most row
	  while(row >= rowCorner + squareSize) {
	    rowCorner += squareSize;
	  }

	  // Iterate through each row
	  for(let i = rowCorner; i < rowCorner + squareSize; i++) {
	    // Iterate through each column
	    for(let j = columnCorner; j < columnCorner + squareSize; j++) {
	      // Return false if a match is found and it not equal to column passed
	      if(board[i][j] === value) {
	        if(column !== j)        
	        return false;
	      }
	    }
	  }
	  // If no match was found, return true
	  return true;
	},
	checkValue(board, column, row, value) {
	  if(this.checkRow(board,column , row, value) &&
	    this.checkColumn(board, column, row, value) &&
	    this.check3x3Square(board, column, row, value)) {
	    return true;
	  } else {

	  	// if(this.checkRow(board, row, value))
	  	// 	return 'check Ro'
	    return false;
	  }
	}
};