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

// Follow the edges of the given origin city and check if the travel time is less than or equal to k. If it is, add the destination count. If it is not, do not add the destination. Then we return the count of the destinations.

///////// CODING /////////
// Function to build an adjacency list based on the given edges
function buildAdjacencyList(edges) {
    const adjacencyList = new Map();

    for (const [start, end, travelTime] of edges) {
        if (!adjacencyList.has(start)) {
            adjacencyList.set(start, []);
        }
        if (!adjacencyList.has(end)) {
            adjacencyList.set(end, []);
        }
        adjacencyList.get(start).push([end, travelTime]);
        adjacencyList.get(end).push([start, travelTime]);
    }

    return adjacencyList;
}

// Function to perform a DFS on the given adjacency list
function dfs(destinations, origin, k, visited) {
    visited.add(origin);
    let numberOfDestinations = 1;

	// For each neighbor of the current city, if the travel time is less than or equal to k and the neighbor has not been visited, perform a DFS on the neighbor
    for (const [city, travelTime] of destinations.get(origin)) {
        if (k >= travelTime && !visited.has(city)) {
            numberOfDestinations += dfs(destinations, city, k - travelTime - 1, visited);
        } else if (k <= 0) {
            break;
        }
    }

    return numberOfDestinations;
}

// Main function to calculate the number of destinations within the given travel time
function VacationDestinations(pairDestinations, origin, k) {
    const destinations = buildAdjacencyList(pairDestinations);
    const visited = new Set();

	// If the origin city is not in the adjacency list, return 0
    if (destinations.size === 0) {
        return 0;
    }

    return dfs(destinations, origin, k, visited) - 1;
}

// Example destinations
const destinations = [
    ["Boston", "New York", 4],
    ["New York", "Philadelphia", 2],
    ["Boston", "Newport", 1.5],
    ["Washington, D.C.", "Harper's Ferry", 1],
    ["Boston", "Portland", 2.5],
    ["Philadelphia", "Washington, D.C.", 2.5]
];

// Test cases
console.log(VacationDestinations(destinations, "New York", 5));  // Output: 2
console.log(VacationDestinations(destinations, "New York", 7));  // Output: 4
console.log(VacationDestinations(destinations, "New York", 8));  // Output: 6

// Time Complexity: O(V + E) to build the adjacency list + O(V + E) to perform the DFS = O(V + E)
// Space Complexity: O(V + E) to store the adjacency list + O(V) for the visited set = O(V + E)

// Time to complete: 30 min
// Feeling: Medium, it was a little bit hard to understand the problem, but after understand that we need to use a DFS until we reach the max time, it was easy to solve it
