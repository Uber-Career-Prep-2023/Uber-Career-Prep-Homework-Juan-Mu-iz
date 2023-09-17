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

//  Use BFS to traverse the graph and keep track of the previous color, if the current color is the same as the previous color, don't add it to the queue. If the destination is found, return the path length

///////// CODING /////////
function buildAdjacencyList(edges) {
	// Create an empty adjacency list
    const adjacencyList = {};

	// Iterate over the edges
    for (let i = 0; i < edges.length; i++) {
		// If the origin node isn't in the adjacency list, add it
        if (!adjacencyList[edges[i][0]]) {
            adjacencyList[edges[i][0]] = [];
        }
		// If the destination node isn't in the adjacency list, add it
        if (!adjacencyList[edges[i][1]]) {
            adjacencyList[edges[i][1]] = [];
        }
		// Add the destination node to the adjacency list of the origin node
        adjacencyList[edges[i][0]].push([edges[i][1], edges[i][2]]);
    }

    return adjacencyList;
}

function bfs(graph, origin, destination) {
	// Create a queue to keep track of nodes to visit
    const queue = [];
	// Add the origin node to the queue with a previous color of null and a path length of 0
    queue.push([origin, null, 0]);

    while (queue.length > 0) {
		// Dequeue the next node to visit
        const [currentNode, previousColor, pathLength] = queue.shift();

		// Iterate over the neighbors of the current node
        for (const [neighbor, color] of graph[currentNode]) {
			// Check if the previous color 
            if (color !== previousColor) {
                queue.push([neighbor, color, pathLength + 1]);
				// Check if the neighbor is the destination node
                if (neighbor === destination) {
                    return pathLength + 1;
                }
            }
        }
    }

    return -1;
}

function alternatingPath(graph, origin, destination) {
	// If the origin and destination are the same, return 0
    if (origin === destination) {
        return 0;
    }

    const directedGraph = buildAdjacencyList(graph);
    return bfs(directedGraph, origin, destination);
}

const graph = [
    ["A", "B", "blue"],
    ["A", "C", "red"],
    ["B", "D", "blue"],
    ["B", "E", "blue"],
    ["C", "B", "red"],
    ["D", "C", "blue"],
    ["A", "D", "red"],
    ["D", "E", "red"],
    ["E", "C", "red"]
];

console.log(alternatingPath(graph, "A", "E")); // 4
console.log(alternatingPath(graph, "E", "D")); // -1

// Time Complexity: O(V + E) Visit every node and edge once
// Space Complexity: O(V + E) Create an adjacency list with every node and edge

// Time: 25 minutes
// Feeling: Medium, I had to think a little bit about the BFS, but the rest was easy. I thought that i needed to keep track of the visited nodes, but I didn't need to.
