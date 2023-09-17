// Question 4: NumberOfIslands

///////// EXPLANATION /////////

// Given a binary matrix in which 1s represent land and 0s represent water. Return the number of islands (contiguous 1s surrounded by 0s or the edge of the matrix).

///////// EXAMPLES /////////

// Examples:
// Input:
// 1 0 1 1 1
// 1 1 0 1 1
// 0 1 0 0 0
// 0 0 0 1 0
// 0 0 0 0 0

// Output: 3

///////// PROCESS THINKING /////////

// Iterate all numbers in the mulitdimensional array an in each number check if it is a one, if it is we'll check up,down,right and left and if in one of those we found another 1 we run again the check.

///////// CODING /////////

// Assume we receive a valud matrix 
function NumberOfIslands(matrix) {
    let count = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 1) {
                count++;
				matrix[i][j] = 0;
				BFS(matrix, i, j);
			}
		}
	}
    return count;
}

// Function to check the sides of the found position
function BFS(matrix, i, j) {
	// UP - Check if its not out of boundaries
	if (i + 1 < matrix.length && matrix[i + 1][j] === 1) {
		matrix[i + 1][j] = 0;
		BFS(matrix, i + 1, j);
	}
	// DOWN
	if (i - 1 >= 0 && matrix[i - 1][j] === 1) {
		matrix[i - 1][j] = 0;
		BFS(matrix, i - 1, j);
	}
	// RIGHT
	if (j + 1 < matrix[0].length && matrix[i][j + 1] === 1) {
		matrix[i][j + 1] = 0;
		BFS(matrix, i, j + 1);
	}
	// LEFT
	if (j - 1 >= 0 && matrix[i][j - 1] === 1) {
		matrix[i][j - 1] = 0;
		BFS(matrix, i, j - 1);
	}
}

let matrix = [
	[1, 0, 1, 1, 1],
	[1, 1, 0, 1, 1],
	[0, 1, 0, 0, 0],
	[0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0],
];

console.log(NumberOfIslands(matrix)) 

// Time Complexity: O(n)
// Space Complexity: O(n)

// Time: 20 minutes
// Feeling: Easy, I think that the problem is really close to the way will do the problem in the mind. We see an island and then we check around them
