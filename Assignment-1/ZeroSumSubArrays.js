// Given an array of integers, count the number of subarrays that sum to zero.

// Examples:
// Input Array: [4, 5, 2, -1, -3, -3, 4, 6, -7]
// Output: 2
// (Subarrays: [5, 2, -1, -3, -3], [-3, 4, 6, -7])

// Input Array: [1, 8, 7, 3, 11, 9]
// Output: 0

// Input Array: [8, -5, 0, -2, 3, -4]
// Output: 2
// (Subarrays: [0], [8, -5, 0, -2, 3, -4])

// Keypoints: Receive an array and return the number of subarrays that sums 0, they are disordered and they can be negative and positive.
// Inputs and Outputs: Ill receive an array and return a count of subarrays, if its empty or dont have sums of 0 ill only return 0,

// Method: Hashing the running computation, check if we have a repeated values, and if we have we found a subarray

// Example
// [4, 5, 2, -1, -3, -3, 4, 6, -7]
// Sums releated to their index
// [4, 9, 11, 10, 7, 4, 8, 14, 7]
// -10, 2, 5, 3
// 0, -10, 0

// Explication
// If we have two sums repeated values, we have two subarrays. IMPORTANT the equal sum means that inside this two values are the subarray and the right equal sum, so if we have for example this array [-10, 2, 5, 3] we need to "put" a sum zero to the left and to the to have [0, -10, -8, -3, 0] and we can have the right value

// Step 1: Declare the object of counts, with the key as the sum, and the value as the count
// Step 2: Iterate each value and check if the sum is in the object, if it is increment one the subarraycount, else create the key pair in 0.

function ZeroSumArray(numbers) {
	// Step: 1 Declare
	let countOfSubarrays = 0;
	let currentSum = 0;

	// Initializa the 0 key as the "left" value in the case [-10, 2, 5, 3] or in case [0]
	let countOfSums = {
		0: 1,
	};
    
    // Step 2: Increase the sum and check if is in the countOfSums
	for (let index = 0; index < numbers.length; index++) {
		currentSum += numbers[index];
        // If it is increment the num of subarrays
		if (countOfSums[currentSum]) {
			countOfSubarrays++;
        // Else create a new key 
		} else {
			countOfSums[currentSum] = 1;
		}
	}
	return countOfSubarrays;
}

let exampleArray = [-10, 2, 5, 3];
console.log(ZeroSumArray(exampleArray));

// Space Complexity: O(n) (n meaning the elements of numbers)
// Time Complexity: O(n) (n meaning the elements of numbers)