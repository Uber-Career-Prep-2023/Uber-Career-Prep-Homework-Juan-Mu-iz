// Question 10: PrerequisiteCourses

///////// EXPLANATION /////////

// Given a list of courses that a student needs to take to complete their major and a map of courses to their prerequisites, return a valid order for them to take their courses assuming they only take one course for their major at once.

///////// EXAMPLES /////////

// Examples:
// Input: ["Intro to Programming", "Data Structures", "Advanced Algorithms", "Operating Systems", "Databases"], { "Data Structures": ["Intro to Programming"], "Advanced Algorithms": ["Data Structures"], "Operating Systems": ["Advanced Algorithms"], "Databases": ["Advanced Algorithms"] }
// Output: ["Intro to Programming", "Data Structures", "Advanced Algorithms", "Operating Systems", "Databases"] or
// ["Intro to Programming", "Data Structures", "Advanced Algorithms", "Databases", "Operating Systems"]

// Input: ["Intro to Writing", "Contemporary Literature", "Ancient Literature", "Comparative Literature", "Plays & Screenplays"], { "Contemporary Literature": ["Intro to Writing"], "Ancient Literature": ["Intro to Writing"], "Comparative Literature": ["Ancient Literature", "Contemporary Literature"], "Plays & Screenplays": ["Intro to Writing"] }
// Output: ["Intro to Writing", "Plays & Screenplays", "Contemporary Literature", "Ancient Literature", "Comparative Literature"] or
// ["Intro to Writing", "Contemporary Literature", "Plays & Screenplays", "Ancient Literature", "Comparative Literature"] or
// ["Intro to Writing", "Contemporary Literature", "Ancient Literature", "Plays & Screenplays", "Comparative Literature"] or
// ["Intro to Writing", "Ancient Literature", "Contemporary Literature",  "Plays & Screenplays", "Comparative Literature"] or
// ["Intro to Writing", "Ancient Literature",  "Plays & Screenplays",  "Contemporary Literature", "Comparative Literature"] or
// ["Intro to Writing", "Plays & Screenplays", "Ancient Literature",  "Contemporary Literature", "Comparative Literature"] or
// ["Intro to Writing", "Ancient Literature",  "Contemporary Literature", "Comparative Literature", "Plays & Screenplays"] or
// ["Intro to Writing", "Contemporary Literature",  "Ancient Literature", "Comparative Literature", "Plays & Screenplays"]

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
