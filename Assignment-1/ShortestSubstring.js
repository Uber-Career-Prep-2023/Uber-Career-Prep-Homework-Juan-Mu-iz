// Question 5: ShortestSubstring
// Given a string and a second string representing required characters, return the length of the shortest substring containing all the required characters.

// Examples:
// Input Strings: "abracadabra", "abc"
// Output: 4
// (Shortest Substring: "brac")

// Input Strings: "zxycbaabcdwxyzzxwdcbxyzabccbazyx", "zzyzx" (Fun fact: "Zzyzx" is a town in the Mojave Desert in California!)
// Output: 10
// (Shortest Substring: "zzxwdcbxyz")

// Input Strings: "dog", "god"
// Output: 3
// (Shortest Substring: "dog")

// Keypoints: Receive an string and a second string to search, an return the shortest substring length
// Inputs and Outputs: We receive two string, we can asume that we actually receive strings not empty. We should just the number representing the length of the shortest substring. Assume to return null in case of not found

// Method: Variable-size (shrinking/growing) sliding window and Hashing

// Explication: We are going to use two pointers to indicate de beginning and end of a substring. To know the condition to move the pointers we are going to use a hashmap of letters that we need to find, when we found all the count of each letter we register. With the purpose to know when we found all. When we found all of them, we will increment the start, increment the letter that now we need to find and find the new substring. All of this saving the shortest.

// Step 1: We initialize the beginning and end of substring in 0,  also the letters count we found and the target count of letter. Minimunwindowsize and the lenght of the string
// Step 2: Count the letters of the target in a hash map
// Step 3: Loop until we reach the end with the end pointer of the substring, in each iteration we check if the letter is in the hashmap, if it is we decrement the number that represent the remaining count that we need to find and if its 0 we can icnrese the foundletters by one.
// Step 4: When we find the first substring, we need to move the start of the subarray to the first letter that is part of the countLetters, when we found the caracther we decrease the found letter to search it again
// Step 5: Return minimum subarray

function ShortestSubstring(s, target) {
	// Step 1: Initialize
	let countOfLetterToFind = {};
	let targetCountLetters = 0;
	let foundLetters = 0;
	let startWindow = 0;
	let endWindow = 0;
	let lenOfString = s.length;
	let minimunWindowSize = null;

	// Step 2: Count how many letters we have of each letter of target
	// Example {a: 3, b: 1}
	for (letter of target) {
		if (countOfLetterToFind[letter]) {
			countOfLetterToFind[letter] = countOfLetterToFind[letter] + 1;
		} else {
			// Increse the unique type of letter in targetCountLetters
			targetCountLetters++;
			countOfLetterToFind[letter] = 1;
		}
	}

	// Step 3: Iterate until the end subarray reach the end
	while (endWindow < lenOfString) {
		// If we find a letter of the target we decrese the value
		if (countOfLetterToFind[s[endWindow]] != null) {
			// // Example {a: 3, b: 1} to {a: 3, b: 0}
			countOfLetterToFind[s[endWindow]] -= 1;
			// If the count is 0, that means that we already find all the times that that character appears and we can increase the foundLetters
			// // Example {a: 3, b: 1} to {a: 3, b: 0} finds that b is 0 and increase the letters we found
			if (countOfLetterToFind[s[endWindow]] === 0) {
				foundLetters++;
			}
		}

		// Step 4: When we find all the letters that means we find the first subarray
		while (foundLetters === targetCountLetters) {
			// We check if is the smaller
			if (minimunWindowSize > endWindow - startWindow + 1 || minimunWindowSize === null) {
				minimunWindowSize = endWindow - startWindow + 1;
			}
			// We check if the beginning is the start of the window
			// "asa" locking for "as" it increase the start to "s" and we increment {"a": 0 + 1}
			if (countOfLetterToFind[s[startWindow]] != null) {
				// We increse the count to find
				countOfLetterToFind[s[startWindow]] += 1;
				if (countOfLetterToFind[s[startWindow]] > 0) {
					// And we decrese the number of letter we already found
					foundLetters--;
				}
			}
			// If its not the beginning we iterate increasing the start and then checks if its smaller, until it found the first representative letter of the window to find it again
			// "asa" locking for "sa" it increase the start until the last "a" because a is not to decrease foundLetters and s it will so its not going to repeat again
			startWindow++;
		}
		// We increase the window
		endWindow++;
	}
	// Step 5: Return minimum subarray length
	return minimunWindowSize;
	
}

console.log(ShortestSubstring("zxycbaabcdwxyzzxwdcbxyzabccbazyx", "zzyzx"));

// Time Complexity: O(n) n meaning the elements of the string 
// Space Complexity: O(n) n meaning the elements of the target, because in base of that we create a hashmap