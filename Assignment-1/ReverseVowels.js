// Question 2: ReverseVowels
// Technique: Forward/backward two-pointer
// Given a string, reverse the order of the vowels in the string.

// Examples:
// Input String: "Uber Career Prep"
// Modified String: "eber Ceraer PrUp"

// Input String: "xyz"
// Modified String: "xyz"

// Input String: "flamingo"
// Modified String: "flominga"

// Keypoints, Receive a string and modified, swap the first vocal to the last one and the then another time, it can be upper or lower case and keep that property, I cant modify directly an array
// Input and output: assume its a string and return empty string if I dont recive anything

// Method: Forward/backward two-pointer

// Step 1: Two pointers one at the beginning and one at the end, and increment, decrement respective.
// Step 2: Found with the first pointer the first vocal, then find the last with the second pointer
// Step 3: When both find vocals swap them
// Step 4: Return the modify string

let stringExample = "Uber Career Prep";

function CheckIfIsVocal(letter) {
	// Object (hash) to make better the lookup of the vocals O(1) instead of O(n)
	let vocals = {
		a: 1,
		e: 1,
		i: 1,
		o: 1,
		u: 1,
	};

	if (vocals[letter] === 1) {
		return true;
	}
	return false;
}

function ReverseVowels(sentence) {
	// Convert string to array to be mutable
	sentence = sentence.split("");

	// Step 1: Two pointers, in a while because we dont have the exact number of iteration, it will be until one reach the other
	let p1 = 0;
	let p2 = sentence.length - 1;

	while (p2 > p1) {
        // We search for the first vocal
		while (!CheckIfIsVocal(sentence[p1].toLowerCase()) && p2 > p1) {
			p1++;
		}
        // We search for the last Vocal
		while (!CheckIfIsVocal(sentence[p2].toLowerCase()) && p2 > p1) {
			p2--;
		}

        // We swap them
		let temp = sentence[p1];
		sentence[p1] = sentence[p2];
		sentence[p2] = temp;
		p2--;
		p1++;
	}
	return sentence.join("");
}

console.log(ReverseVowels("Uber Career Prep"));

// Space Complexity: O(1) (Only the vocals, and pointers, they are always the same amount)
// Time Complexity: O(n) (n meaning elements of the array)
// We have some trade off in space and time, we can put the uppercase in the vocals to reduce the time and increment the memory, also the objects arent the most optimize thing in terms of memory

// Time taken: 30 minutes, just search and swap
// Feeling: Easy