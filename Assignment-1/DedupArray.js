// Question 9: DedupArray
// Given a sorted array of non-negative integers, modify the array by removing duplicates so each element only appears once. If arrays are static (aka, not dynamic/resizable) in your language of choice, the remaining elements should appear in the left-hand side of the array and the extra space in the right-hand side should be padded with -1s.

// Examples:

// Input Array: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
// Modified Array: [1, 2, 3, 4]
// or [1, 2, 3, 4, -1, -1, -1, -1, -1, -1] (depending on language)

// Input Array: [0, 0, 1, 4, 5, 5, 5, 8, 9, 9, 10, 11, 15, 15]
// Modified Array: [0, 1, 4, 5, 8, 9, 10, 11, 15]
// or [0, 1, 4, 5, 8, 9, 10, 11, 15, -1, -1, -1, -1, -1] (depending on language)

// Input Array: [1, 3, 4, 8, 10, 12]
// Modified Array: [1, 3, 4, 8, 10, 12]

// Keypoints: Receive an not empty array and return an array of unique elements in the same order.

// Comments: Assume we cant use something like set. Im thinking that if I iterate and remove the repeated elements is going to take O(n), and if I use another array and moving unique numbers to that one. Im goint to use O(n) space, so the aproach im going to use is similar to the -1 aproach, and then i can "forget" the -1 part of the array, and because is forgeting something it just going to take O(1)

// Inputs and outputs: I assume that the input is a valid array with just positive numbers, and the output is going to be an array, even if is empty.

// Method: Two pointers

// Explanation: One pointer at the beginning and one at the end. The left one is going to change the unique values of the right one and the left one, keeping the previus value and leaving a -1 if is repeated

// Steps

// Step 1: Create the pointers
// Step 2: Iterate each value until the second pointer reach the end
// Step 3: While the iteration ill compare if its the same of the previus value, if it is we change the value to -1 and move the pointer, if not we change the left pointer and move it one, if its the same we put a -1 in the right and continue
// Step 4: Return the subarray without -1 values

function DedupArray(numbers) {
	// Step 1: Initialize pointers and previus value, we start with the first position, we assume that is not empty, empty should work also
	// P1 update value when find a new value
	let p1 = 0;
	// Check if new value, if not it change the value to -1
	let p2 = 0;
	// To check if we saw already the value, start with -1 to update in the first position with the positive number
	let previusNumber = -1;

	// Step 2: Iterate until the p2 reach the end
	while (p2 < numbers.length) {
		// Step 3: Compare if we havent seen this number, if not we update the p1 to that number and move the both pointer
		if (numbers[p2] !== previusNumber) {
			// Here the order of the of the next operations have importance, we first save the new value, then we put the minus one, and the we put it in p1 the new value, if we do it in other way we can modify the same place of the pointer, in case both pointers are in the same index

			// Save new number
			previusNumber = numbers[p2];
			// Change to -1, if its the same than p1 doesnt matter because then it will change again, we have to put a -1 because maybe p1 will never change it
			numbers[p2] = -1;
			// P1 is the now the new number that is previusNumber of the next one
			numbers[p1] = previusNumber;

			// Move to the next one
			p1++;
			p2++;
		} else {
			// If we already saw the value we just change it to -1
			numbers[p2] = -1;
			// And move the pointer
			p2++;
		}
	}

    // Here we have the array with -1, now we can delete that part with O(1)
    numbers = numbers.slice(0, p1)
    // Step 4: Return
	return numbers;
}

console.log(DedupArray([0, 0, 1, 4, 5, 5, 5, 8, 9, 9, 10, 11, 15, 15]));

// Time Complexity: O(n) n meaning the elements of the array
// Space Complexity: O(1) always the same space

// Time taken: 20 minutes
// Feeling: Easy