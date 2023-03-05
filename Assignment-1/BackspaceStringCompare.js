// Question 4: BackspaceStringCompare
// Given two strings representing series of keystrokes, determine whether the resulting text is the same. Backspaces are represented by the '#' character so "x#" results in the empty string ("").

// Examples:
// eInput Strings: "abcde", "abcde"
// Output: True

// Input Strings: "Uber Career Prep", "u#Uber Careee#r Prep"
// Output: True

// Input Strings: "abcdef###xyz", "abcw#xyz"
// Output: True

// Input Strings: "abcdef###xyz", "abcdefxyz###"
// abcxyz abcdef
// Output: False

// Method: Simultaneous Iteration Two Pointer

// Other method is using stack, but i thought in some scalable code without O(n) space complexity

// Explanation: one pointer in the end of each array and decrement. We compare them, if we found a # we count it, when we dont have a # we decrement and ignore that character. When we have the hash count in 0 of both we can compare characters, if its the same we continue if its not we finish and return false. When one of the pointers reach the -1 index it means we end with one string. So we need to loop the other one to see if we have characters reameaning or only backspaces with characters. We can know that with counting the hashes, if we reach -1 hashes it means that we found one more character and we return false. If nothing of this happens we return true.

// Step 1: Declare pointer at the end of the array, and #count
// Step 2: Iterate until we reach the end of one of the  arrays, 
// Step 3: Compare the letters if both counts are 0
// Step 4: Increment count if we found # decrement if we not
// Step 5: Compute the remaing characters to see if we have more characters

function BackspaceStringCompare(s1, s2) {
	// Step 1: Initialize pointers and count
	let p1 = s1.length - 1;
	let p2 = s2.length - 1;

	let hash1 = 0;
	let hash2 = 0;

	// Step 2: Iterate until one of both reach >= 0 (to also compare the 0 index)
	while (p1 >= 0 && p2 >= 0) {
		// We do a comparation before compare the both string to avoid a equality of #
		// If the # is found we increment the count
		if (s1[p1] === "#") {
			hash1++;
			p1--;
		}
		// If other characther than # is found we decrement the count
		if (s2[p2] === "#") {
			hash2++;
			p2--;
		}
		//  Step 3: Compare the letters if both counts are 0
		if (hash1 === 0 && hash2 === 0) {
			// If both are the same, we continue. Else is false
			if (s1[p1] === s2[p2]) {
				p1--;
				p2--;
			} else {
				return false;
			}
			// If both are not the same
		} else {
			// Step 4: Increment count if we found # decrement if we not
			// We check again if its #
			if (s1[p1] === "#") {
				hash1++;
				p1--;
				// If not we decrement, only if its greater tha 0, because if its 0 its ready to compare
			} else {
				if (hash1 > 0) {
					hash1--;
					p1--;
				}
			}

			// We check again if its #
			if (s2[p2] === "#") {
				hash2++;
				p2--;
				// If not we decrement, only if its greater tha 0, because if its 0 its ready to compare
			} else {
				if (hash2 > 0) {
					hash2--;
					p2--;
				}
			}
		}
	}

	// Step 5: Compute the remaing characters to see if we have more characters
	// Only one of the loop will iterate, the other one already reach -1
	// We loop until pointer and hash is positive
	while (p1 >= 0 && hash1 >= 0) {
		if (s1[p1] === "#") {
			hash1++;
			p1--;
		} else {
			hash1--;
			p1--;
		}
	}

	// We loop until pointer and hash is positive
	while (p2 >= 0 && hash2 >= 0) {
		if (s2[p2] === "#") {
			hash2++;
			p2--;
		} else {
			hash2--;
			p2--;
		}
	}

	// If one of the hashes reach negative, it means that we found more characters than hashes or a character before the hash
	if (hash2 < 0 || hash1 < 0) {
		return false;
	}

	// Otherwise we return true
	return true;
}


// Space Complexity: O(1) because we dont use stack or something else
// Time Complexity: O(n+m) n meaning the length of one and m the length of the other one

// Another aproach I tried, more readable but with more time complexity

// Ignore the hashes
// function ignoringHashes(p, s) {
// 	let hash = 1;

// 	while (hash > 0) {
// 		if (s[p] === "#") {
// 			hash++;
// 		} else {
// 			hash--;
// 		}
// 		p--;
// 	}
// 	if (s[p] === "#") {
// 		p = ignoringHashes(p - 1,s)
// 	}
// 	return p;
// }

// function checkingIfLeftCharacters(p, s) {
// 	let hash = 0;
// 	while (p >= 0) {
// 		if (s[p] !== "#") {
// 			hash--;
// 		} else {
// 			hash++;
// 		}
// 		p--;
// 	}
// 	if (hash < 0) {
// 		return false;
// 	}
// 	return true;
// }
