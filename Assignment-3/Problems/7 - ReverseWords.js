// Question 7: ReverseWords

///////// EXPLANATION /////////

// Given a string, return the string with the order of the space-separated words reversed

///////// EXAMPLES /////////
// Examples:
// Input: "Uber Career Prep"
// Output: "Prep Career Uber"

// Input: "Emma lives in Brooklyn, New York."
// Output: "York. New Brooklyn, in lives Emma"

///////// PROCESS THINKING /////////

// Split the string in words and push them in another

///////// CODING /////////
function ReverseWords() {
	let words = example.split(" ");
	let result = "";

	while (words.length) {
		result += words.pop() + " ";
	}
	return result;
}

let example = "Emma lives in Brooklyn, New York.";
console.log(ReverseWords(example));

// Time Complexity: O(n) 
// Space Complexity: O(n)

// Time: 5-10 minutes
// Feeling: Easy, could be more work if I do it without the split function but it would be just iterating each character and create another array
