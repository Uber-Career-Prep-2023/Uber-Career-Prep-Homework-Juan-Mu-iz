// Question 9: MergeKSortedArrays

///////// EXPLANATION /////////

// Given an array of k sorted arrays, merge the k arrays into a single sorted array.

///////// EXAMPLES /////////

// Examples:
// Input: 2, [[1, 2, 3, 4, 5], [1, 3, 5, 7, 9]]
// Output: [1, 1, 2, 3, 3, 4, 5, 5, 7, 9]

// Input: 3, [[1, 4, 7, 9], [2, 6, 7, 10, 11, 13, 15], [3, 8, 12, 13, 16]]
// Output: [1, 2, 3, 4, 6, 7, 7, 8, 9, 10, 11, 12, 13, 13, 15, 16]

///////// PROCESS THINKING /////////

//  Every time we add a new nuber the previous number are reapeted, when we add 10-11, we repeated the 0 and 1 after the new 1 added. So, if we can add the previous values to the new value we can create the new one in base of the previous. To pass the previous values we can use a queue to save them

///////// CODING /////////
function ReverseWords() {

	return "";
}


// Time Complexity: O(n) It could be improve if we use a real queue ,the improvement would still be O(n) 
// Space Complexity: O(n) 

// Time: 20 minutes
// Feeling: Easy, i quickly recognized the idea of the solution, I tried with adding the previous values with index. Founding a queue was the result of seeing the examples a little bit more, and see that every time its just adding at the end a 1 and a 0
