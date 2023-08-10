// Question 8: AlternatingPath

///////// EXPLANATION /////////

// Given an origin and a destination in a directed graph in which edges can be blue or red, determine the length of the shortest path from the origin to the destination in which the edges traversed alternate in color. Return -1 if no such path exists.

///////// EXAMPLES /////////

// Examples:
// [(A, B, "blue"), (A, C, "red"), (B, D, "blue"), (B, E, "blue"), (C, B, "red"), (D, C, "blue"), (A, D, "red"), (D, E, "red"), (E, C, "red")]

// Input: origin = A, destination = E
// Output: 4 (path: A→D (red), D→C (blue), C→B (red), B→E (blue))

// Input: origin = E, destination = D
// Output: -1 (only path is: E→C (red), C→B (red), B→D (blue))

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
