// Question 8: MergeIntervals
// Given a list of integer pairs representing the low and high end of an interval, inclusive, return a list in which overlapping intervals are merged.

// Examples:

// Input: [(2, 3), (4, 8), (1, 2), (5, 7), (9, 12)]
// Output: [(4, 8), (1, 3), (9, 12)]

// Input: [(5, 8), (6, 10), (2, 4), (3, 6)]
// Output: [(2, 10)]

// Input: [(10, 12), (5, 6), (7, 9), (1, 3)]
// Output: [(10, 12), (5, 6), (7, 9), (1, 3)]

// Keypoints: Assume we receive a not empty array with subarrays, each of the incluid intervals. I should return the all the intervals, if one overlap one, we merge it.
// Input and output: Inputs arrays of arrays, assuming that all of them are valid and not negative. The output an array of arrays.

// Comments: I though that we can use some structure like a hashmap with hour and first interval hours, but if we are not sure about the lenght of the intervals, it can take a lot of space. So I decided to sort the algorithm and then resolve it.

// Method: Sort the array, then solve

// Step 1: Sort the array by the start interval number, and initilize the array where we will keep the values
// Step 2: Iterate the intervals and keep the start interval and end until the end is less than the start, updating the lenght if is grater than the actual.
// Step 3: Save the new interval with the new end
// Step 4: Return the array

function MergeIntervals(intervals) {
	// Step 1: Initilizae
	let mergeIntervals = [];
	// Sort array by the start of the interval
	intervals = intervals.sort(function (a, b) {
		return a[0] - b[0];
	});

	// Step 2: Iterate intervals
	// Keep the start and end of the merge interval
	// Keep the previus start and previus end, initilize with the first one
	let minimumStart = intervals[0][0];
	let maximumEnd = intervals[0][1];

	// Step 3: iterate each interval
	for (let index = 1; index < intervals.length; index++) {
		// We set the intervals numbers of the curretn interval
		let currentStart = intervals[index][0];
		let currentEnd = intervals[index][1];

		// If the current interval is less or equal than the maximum end interval we keep the start adn check if we have a new maximum end interval
		if (currentStart <= maximumEnd) {
			if (currentEnd > maximumEnd) {
				maximumEnd = currentEnd;
			}
			// If is not in the maximum interval we just push the minimum and maximum intervals and restart the minimum and maximum
		} else {
			mergeIntervals.push([minimumStart, maximumEnd]);
			minimumStart = intervals[index][0];
			maximumEnd = intervals[index][1];
		}
	}

	// We have to do another push, because at the end it will only update the maximum start and maximum end and it will not return that intervals, maybe is more readable in a while
	mergeIntervals.push([minimumStart, maximumEnd]);

	//Step 4
	return mergeIntervals;
}

console.log(MergeIntervals([[5, 8],[6, 10],[2, 4],[3, 6],]));
// [10, 12], [5, 6], [7, 9], [1, 3]
// [[5, 8], [6, 10], [2, 4], [3, 6]]
// [(2, 3), (4, 8), (1, 2), (5, 7), (9, 12)]

// Space Complexity: O(n) n meaning the number of intervals
// Time Complexity: O(n log n) meaning the number of intervals, this because we have to sort the elements before the iteration