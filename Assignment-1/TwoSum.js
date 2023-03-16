// Given an array of integers and a target integer, k, return the number of pairs of integers in the array that sum to k. In each pair, the two items must be distinct elements (come from different indices in the array).

// Examples:

// Input Array: [1, 10, 8, 3, 2, 5, 7, 2, -2, -1]
// Input k: 10
// Output: 3
// (Pairs: (8, 2), (8, 2), (3, 7))

// Input Array: [1, 10, 8, 3, 2, 5, 7, 2, -2, -1]
// Input k: 9
// Output: 4
// (Pairs: (10, -1), (1, 8), (2, 7), (2, 7))

// Input Array: [4, 3, 3, 5, 7, 0, 2, 3, 8, 6]
// Input k: 6
// Output: 5
// (Pairs: (4, 2), (0, 6), (3, 3), (3, 3), (3, 3))

// Input Array: [4, 3, 3, 5, 7, 0, 2, 3, 8, 6]
// Input k: 1
// Output: 0

// Keypoints: Given numbers and target, found the pair that gives a given sum value.
// Inputs and Outpos: Output is the number of pairs and the input is the numbers array

// Method: Hash The Elements

// Explication: We use a hashmap to save the values that we already visit, then we can search if we already saw that value. It doesnt matter if we do the conditional after all the elements, because they have two "opportunities" to do pair. But because is combination. We cant only increment one. For example if we have 3, 3, 3 the combinations is AB, BC, AC. If we only add one we wont have the pairs, because we didnt count that the third one had 2 before. So we can increment the count of complement to k. To the third will see that he can combine to two instead only one.

// Steps

// Step 1: Declare a hashmap of visited values
// Step 2: Iterate each value and add it to the hashmap, when we add we check if we have the complement to do a pair of K sum, if we do, we increment the count by the number of appearence of the complement.
// Step 3: Return the count

function TwoSum(numbers, k) {
	// Step 1: Declere hashmap in this case object to indicate numbers that we already saw
	let numbersIHaveSeen = {};
	let countOfPairs = 0;

	// Step 2: Iterate each value and add it to hashmap
	for (let num of numbers) {
		// Step 3: Check if the complement to k we already saw
		if (numbersIHaveSeen[k - num]) {
			// Sum the number of apperences, explain in explication
			countOfPairs += numbersIHaveSeen[k - num];
		}
		// And we add it to the numbers I have seen or increment
		if (numbersIHaveSeen[num]) {
			numbersIHaveSeen[num]++;
		} else {
			numbersIHaveSeen[num] = 1;
		}
	}

	return countOfPairs;
}

console.log(TwoSum([3, 3, 3, 3, 3], 6));

// Time Complexity: O(n) n meaning the elements numbers
// Space Complexity: O(n) n meaning the elements of numbers

// Time taken: 20 minutes
// Feeling: Easy, little tricky that we have to return pairs, so we have to do kind of combination formula
