// Question 5: FirstKBinaryNumbers

///////// EXPLANATION /////////

// Given a number, k, return an array of the first k binary numbers, represented as strings.

///////// EXAMPLES /////////

// Examples:
// Input: 5
// Output: ["0", "1", "10", "11", "100"]

// Input: 10
// Output: ["0", "1", "10", "11", "100", "101", "110", "111", "1000", "1001"]

///////// PROCESS THINKING /////////

//  Every time we add a new nuber the previous number are reapeted, when we add 10-11, we repeated the 0 and 1 after the new 1 added. So, if we can add the previous values to the new value we can create the new one in base of the previous. To pass the previous values we can use a queue to save them

///////// CODING /////////
function FirstKBinaryNumbers(k) {
	// Create the base array
	const binaryNumbers = ["0"];

	// Validations of exceptions, assume we'll never receive an invalid value of k (<= 0 or non-integer)
	// Create a queue to save previous nubers an build on top of that
	const queue = ["1"];

	while (k > binaryNumbers.length) {
		let binaryNumber = queue.shift();
		binaryNumbers.push(binaryNumber);

		queue.push(binaryNumber + "0");
		queue.push(binaryNumber + "1");
	}

	return binaryNumbers;
}

console.log(FirstKBinaryNumbers(10));

// Time Complexity: O(n) It could be improve if we use a real queue ,the improvement would still be O(n) 
// Space Complexity: O(n) 

// Time: 20 minutes
// Feeling: Easy, i quickly recognized the idea of the solution, I tried with adding the previous values with index. Founding a queue was the result of seeing the examples a little bit more, and see that every time its just adding at the end a 1 and a 0
