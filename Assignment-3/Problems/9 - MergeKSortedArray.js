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

//  Concatenate all the arrays into a single array and sort it

///////// CODING /////////
function mergeKSortedArrays(k, arrays) {
    // Merge all arrays into a single array
    const mergedArray = [].concat(...arrays);
    
    // Sort the merged array
    mergedArray.sort((a, b) => a - b);
    
    return mergedArray;
}

console.log(mergeKSortedArrays(2, [[1, 2, 3, 4, 5], [1, 3, 5, 7, 9]]));

// Time: O(n log n)
// Space: O(n)

// Time: 5 minutes
// Feeling: Easy, it could be done more efficiently using a min heap
