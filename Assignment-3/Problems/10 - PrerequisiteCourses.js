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

// We can use topological sort to find a way to take the courses in the correct order. We can use Kahn's algorithm to find a valid topological sort.

///////// CODING /////////
function buildAdjacencyList(nodes, edges) {
	// Create an empty adjacency list
    const adjacencyList = {};

	// Iterate over the nodes
    for (const node of nodes) {
        adjacencyList[node] = [];
    }

	// Iterate over the edges
    for (const [node, prerequisites] of Object.entries(edges)) {
		// Iterate over the prerequisites
        for (const prerequisite of prerequisites) {
			// Add the node to the adjacency list of the prerequisite
            if (adjacencyList[prerequisite]) {
                adjacencyList[prerequisite].push(node);
            }
        }
    }

    return adjacencyList;
}

function dfsVisit(adjacencyList, visited, sortedList, node) {
	// Check if the node has already been visited
    if (visited.has(node)) {
        return;
    }

    visited.add(node);

	// Iterate over the neighbors of the current node
    for (const neighbor of adjacencyList[node]) {
        dfsVisit(adjacencyList, visited, sortedList, neighbor);
    }

	// Add the current node to the front of sorted list
    sortedList.unshift(node);
}


function topologicalSort(adjacencyList) {
	// Create a set to keep track of visited nodes
    const visited = new Set();
    const sortedList = [];

	// Iterate over the nodes
    for (const node of Object.keys(adjacencyList)) {
        dfsVisit(adjacencyList, visited, sortedList, node);
    }

    return sortedList;
}

function PrerequisiteCourses(courses, prerequisites) {
    const graph = buildAdjacencyList(courses, prerequisites);
	
    return topologicalSort(graph);
}

// Test cases
const courses1 = ["Intro to Programming", "Data Structures", "Advanced Algorithms", "Operating Systems", "Databases"];
const prerequisites1 = {
    "Data Structures": ["Intro to Programming"],
    "Advanced Algorithms": ["Data Structures"],
    "Operating Systems": ["Advanced Algorithms"],
    "Databases": ["Advanced Algorithms"]
};

console.log(PrerequisiteCourses(courses1, prerequisites1)); 

// Time Complexity: O(V + E)
// Space Complexity: O(V + E) 

// Time: 25 minutes
// Feeling: Easy-medium, I had to look up how to implement Kahn's algorithm for topological sorting. I remember that we did it on the graph structure, so I had to look up again how it works.
