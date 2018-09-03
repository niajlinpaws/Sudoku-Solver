/* 
 To, check the for the sudoku solution, 
  Change the board variable with the 2-Dimensional Array. 
  Here, 2D - Array is a collection of rows, where each row contains column values as 
  an array itself forming a sudoku solution tobe checked.

*/

/*--- !!! Change me !!! ---*/
let board=[
	[ 8,9,5,7,4,2,1,3,6 ],
    [ 2,7,1,9,6,3,4,8,5 ],
    [ 4,6,3,5,8,1,7,9,2 ],
    [ 9,3,4,6,1,7,2,5,8 ],
    [ 5,1,7,2,3,8,9,6,4 ],
    [ 6,8,2,4,5,9,3,7,1 ],
    [ 1,5,9,8,7,4,6,2,3 ],
    [ 7,4,6,3,2,5,8,1,9 ],
    [ 3,2,8,1,9,6,5,4,7 ]
];

/* To determine the validity state of the solution */
let valid=true;

// Utility functions for the application
let FX = require('./functions');

/* Check for each value in the sudoku solution */

for(let i=0;i<board.length;i++)
{
	for(let j=0;j<board.length;j++)
	{
	 	// if value is not unique for a row or column then, break the loop and return false
		if(!FX.checkValue(board,j,i,board[i][j]))
		{
			valid=false;
			break;
		}	
	}

	// print invalid solution message and break out of the loop
    if(!valid)
    {
    	console.log("the solution provided is invalid");
    	break;
    }
}

// print valid solution message
if(valid)
console.log("the solution provided is valid");