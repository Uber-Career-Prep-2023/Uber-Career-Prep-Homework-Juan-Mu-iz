// Two strings are considered to be “k-anagrams” if they can be made into anagrams by changing at most k characters in one of the strings. Given two strings and an integer k, determine if they are k-anagrams.
// Anagram: a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

// Im not very familirize with the term anagram, but seeing the examples I can assume that an anagram is a phrase with the same letters, also ill asume that the spaces are not count

// Examples:
// Input Strings: "apple", "peach"
// Input k: 1
// Output: False

// Input Strings: "apple", "peach"
// Input k: 2
// Output: True

// Input Strings: "cat", "dog"
// Input k: 3
// Output: True

// Input Strings: "debit curd", "bad credit"
// Input k: 1
// Output: True

// Input Strings: "baseball", "basketball"
// Input k: 2
// Output: False

// Keypoints: Receive two strings and check if one of them can be make from the otherone with the posibility of changing the characters of one string receiving k numbers of changes
// Input and Output: Input Two strings, assume that we receive valid string, not empty and k, that I also assume is a valid number. In the output just im going to return true or false

// Method: Two arrays/strings increment/decrement hashmap counts

// Explanation: We are going to count the letters of the first string (it doesnt matter if we do it with the second) and keep the count of total letters and of each letter, then in the second array we iterate and decrement the count of the letter if is there and the total count, if its not there we increment another count of different letters. The we can compare if the count of different letters is less or equal than k. And also we compare if the count of total letters is the same of different letters. If not thta means that we have more letters. To only count letters we are goint to ignore the spaces.

// Step 1: We put the letters in a object(hashmap) and the count of the total letters
// Step 2: Iterate the second string and compare if its in the count of letters, if it is we just decrement and check if its less than 0, if its true we add one to count of different letters, if its not we decrese one to count of total letters. If the count of the total letters and diferent letters that means we have more letters in one than in the other one, is impossible to be an anagram. For example baseball basketball , ater the computation we are going to have
// "", "kt" we have different count, in total we have 0 and in different we have 2, because it have more letters.

function KAnagrams(string1, string2, k) {
	// Step 1: We put the letters in a object(hashmap) and the count of the total letters
	let countOfEachLetter = {};

	let totalLetters = 0;
	let differentLetters = 0;

	// Step 1: Add each letter to the hashmap
	for (let letter of string1) {
		// Check if is not a space
		if (letter !== " ") {
			if (countOfEachLetter[letter] != null) {
				countOfEachLetter[letter]++;
			} else {
				countOfEachLetter[letter] = 1;
			}
			totalLetters++;
		}
	}

	// Step 2: Iterate the second string
	for (let letter of string2) {
		// Check if is not a space
		if (letter !== " ") {
			// Check if its in the first string
			if (countOfEachLetter[letter] != null) {
				// If it is we decrement one to the count of the first one
				countOfEachLetter[letter]--;
				// If the count now its less than 0 than means thah we have one more character of it in the second array and we add one to different
				if (countOfEachLetter[letter] < 0) {
					differentLetters++;
				} else {
					// If not that means that we have enough letter of it in the first one and we only substract one to the total
					totalLetters--;
				}
			} else {
				// If its not in the first one count, we add directly to the different
				differentLetters++;
			}
		}
	}

	// If we have the same remaining letters and the same different letters, that means that the remaning letters are the different letters, so we dont have any extra letter. If different letter is equal or less than k, than means that we can change the different letters by the remaining to have an anagram
	if (differentLetters === totalLetters && differentLetters <= k) {
		return true;
	}
	return false;
}

console.log(KAnagrams("apple", "peach", 2));

// Time Complexity: O(n + m) n meaning the length of the first string and m of the second string
// Space Complexity: O(n) n meaning the length of the first string, this because we storage each unique character in the hash map

// Time taken: 25 minutes, Similar than other ones
// Feeling: Easy