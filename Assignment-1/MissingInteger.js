// Question 6: MissingInteger
// Given an integer n and a sorted array of integers of size n-1 which contains all but one of the integers in the range 1-n, find the missing integer.

// Examples:
// Input Array: [1, 2, 3, 4, 6, 7]
// Input n: 7
// Output: 5

// Input Array: [1]
// Input n: 2
// Output: 2

// Input Array: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12]
// Input n: 12
// Output: 9

// Keypoints: Receive array of order integers and the largest num of the range, it can start with 1 and also 1 can be the missing integer. Also we assume that its only one missing integer
// Input and outputs: Ill assume that we will always receive a valid array not empty. We only need to return the number that is missing

// Method: Comparation

// Explanation: There are many ways to solve this, we are going to use the index comparation. If the index +1 is diferent than the actual value will going to return the actual value minus -1. If we dont return anyone after the comparation that means that the missing value is the last one.

// Step 1: Iterate the array and compare the index + 1 with the number, if its the same we continue if not we return the number -1
// Step 2: WWe return the last number of the range if we dont have any match. But we can also have the case when we dont have any missing numbers, so we can check if the last one is not the end of the range

function MissingInteger(numbers, nRange) {
	// Step 1: Iterate the array
	for (let index = 0; index < numbers.length; index++) {
		// Compare if its the corresponding number
		if (numbers[index] != index + 1) {
			// If not we return the actual number -1, -1 because the number we have it suppose to be the next one if the missing number was not lost
			return numbers[index] - 1;
		}
	}
	// Step 2: We return the last number of the range if we dont have any match. But we can also have the case when we dont have any missing numbers, so we can check if the last one is not the end of the range
	if (numbers[numbers.length - 1] != nRange) {
		return nRange;
	}
	// If we dont have any missing elements I chose to return -1
	return -1;
}

console.log(MissingInteger([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12], 12));

// Time Complexity: O(n) n meaning the elemnts of the array
// Space Complexity: O(1)

// Time taken: 20 minutes, many aproaches to this one
// Feeling: Easy Easy