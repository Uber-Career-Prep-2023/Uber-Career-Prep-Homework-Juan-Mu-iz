// Question 1: MaxMeanSubArray
// Technique: Fixed-size sliding window
// Given an array of integers and an integer, k, find the maximum mean of a subarray of size k.

// Examples:
// Input Array: [4, 5, -3, 2, 6, 1]
// Input k = 2
// Output: 4.5

// Input Array: [4, 5, -3, 2, 6, 1]
// Input k = 3
// Output: 3

// Input Array: [1, 1, 1, 1, -1, -1, 2, -1, -1]
// Input k = 3
// Output: 1

// Input Array: [1, 1, 1, 1, -1, -1, 2, -1, -1, 6]
// Input k = 5
// Output: 1

// Keypoints, Disordered List, negative and positive, fixed subarray (k), if empty return []
// Input and output: assume its always right

// Method: Sliding window with fix size (k)

// Step 1: Count the index in k range, save the sum and the maxsum
// Step 2: Advance one index and sum the value, and substract the last first index
// Step 3: Check the if the sum is grater
// Step 4: Return the sum divided by k

function MaxMeanSubArray(numbers, k) {
	// Step 1 Count the first k numbers (Assume that numbers is grater than k)
	let maxSum = 0;
	let currentSum = 0;

	for (let index = 0; index < k; index++) {
		currentSum += numbers[index];
		maxSum = currentSum;
	}

	// Step 2 Iterate from k to the end
	for (let index = k; index < numbers.length; index++) {
		// Substract the first value of the k range
		currentSum -= numbers[index - k];
		// Add the new value
		currentSum += numbers[index];
		// Step 3 Check if is grater
		if (currentSum > maxSum) {
			maxSum = currentSum;
		}
	}

    // Step 4 Return de maxsum divided k
    return maxSum / k;
}

let exampleArray = [];
let k = 5;
console.log(MaxMeanSubArray(exampleArray, k));

// Space Complexity: O(1) (maxSum, currentSum variables)
// Time Complexity: O(n) (n meaning elements of the array)