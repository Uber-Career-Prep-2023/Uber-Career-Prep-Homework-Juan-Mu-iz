// Question 11: VacationDestinations

///////// EXPLANATION /////////

// Given an origin city, a maximum travel time k, and pairs of destinations that can be reached directly from each other with corresponding travel times in hours, return the number of destinations within k hours of the origin. Assume that having a stopover in a city adds an hour of travel time.

///////// EXAMPLES /////////

// Examples:
// Input: [("Boston", "New York", 4), ("New York", "Philadelphia.", 2), ("Boston", "Newport", 1.5), ("Washington, D.C.", "Harper's Ferry", 1), ("Boston", "Portland", 2.5), ("Philadelphia", "Washington, D.C.", 2.5)]

// Origin = "New York", k=5
// Output: 2 (["Boston", "Philadelphia"])

// Origin = "New York", k=7
// Output: 2 (["Boston", "Philadelphia", "Washington, D.C", "Newport"])

// Origin = "New York", k=8
// Output: 2 (["Boston", "Philadelphia", "Washington, D.C", "Newport", "Harper's Ferry", "Portland"])

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
