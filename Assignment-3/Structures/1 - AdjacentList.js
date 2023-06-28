// Question 1: Build an Adjacency List/Set Representation of a Graph

///////// EXPLANATION /////////

// Given an array of pairs of values representing edges in an unweighted graph, create the equivalent adjacency list/set representation (a map from element to a list or set of elements). Pairs represent directed edges: (A, B) means there is an edge from A to B. If the pair (B, A) is also provided then there is an undirected edge between A and B. For simplicity, you may assume that each node of the graph stores an integer rather than a generic data type and that the elements are distinct. Implement a basic DFS and BFS searching for a target value and a topological sort (using either DFS or Kahn’s algorithm).

///////// EXAMPLES /////////

// Input: [(1, 2), (2, 3), (1, 3), (3, 2), (2, 0)]
// Output:
// {
//     0: []
//     1: [2, 3]
//     2: [0, 3]
//     3: [2]
// }

///////// PROCESS THINKING /////////

// Create a object as a key value pair of each vertex, and then just assign the value to the vertex
// For DFS and BFS we have to track the element that we have seen
// BFS - Create a queue and shift the array, with the shifted element loop and push all its childs
// DFS - Create a queue and pop the array, with the shifted element loop and push all its childs
// For topology will use DFS and two array. One to save the elements we have seen and another to have the sorted path

class Graph {
	constructor() {
		this.values = {};
	}

	// Insert - add the edge between two vertex, before doing the edge we comprove that we have the vertex. If we dont, we create them. We do the add the vertex and edge together because its adoc to the problem

	insertEdge(vertex1, vertex2) {
		if (!this.values[vertex1]) {
			this.values[vertex1] = [];
		}

		if (!this.values[vertex2]) {
			this.values[vertex2] = [];
		}

		// Assuming that we'll never receive duplicate values
		this.values[vertex1].push(vertex2);
	}

	// Function that receive an array and run insert Edge for each subarray, assume we recive the a valid bidimensional array
	insertMultipleEdges(edges) {
		edges.forEach((edge) => {
			this.insertEdge(edge[0], edge[1]);
		});

		return this.values;
	}

	// DFS - receive an initial vertex and uses a stack to push each child in an array. Then we check if is the taregt, if not we label it as seen, we continue popping the next item. Assume we receive an valid initial start

	DFS(start, target) {
		let stack = [start];
		let visitedVertex = {};

		while (stack.length) {
			let vertex = stack.pop();

			if (!visitedVertex[vertex]) {
				if (vertex === target) {
					return true;
				}

				visitedVertex[vertex] = 1;

				this.values[vertex].forEach((edge) => {
					stack.push(edge);
				});
			}
		}

		return false;
	}

	// BFS - receive an initial vertex and uses a queue to push each child in an array. Then we check if is the taregt, if not we label it as seen. we continue shifting the next item. Assume we receive an valid initial start

	BFS(start, target) {
		let queue = [start];
		let visitedVertex = {};

		while (queue.length) {
			let vertex = queue.shift();
			if (!visitedVertex[vertex]) {
				if (vertex === target) {
					return true;
				}
				visitedVertex[vertex] = 1;

				this.values[vertex].forEach((edge) => {
					queue.push(edge);
				});
			}
		}

		return false;
	}

	// topological sort: A  topological sort of a DAG (directed, acyclic graph) is an ordering of the nodes such that  for all edges a->b, a comes before b in the order
	DFSSort(visited, sortedVertex, vertex) {
		for (let v of this.values[vertex]) {
			if (!visited[v]) {
				visited[v] = 1;
				this.DFSSort(visited, sortedVertex, v);
			}
		}

		sortedVertex.unshift(+vertex);
	}

	// Function that iterate every vertex, in each vertex we traverse the edges until we dont have more to go, when that happens we add to the front the vertex and go back to try the other neighbors.

	topologicalSort() {
		let visited = {};
		let sortedVertex = [];

		for (let vertex in this.values) {
			if (!visited[vertex]) {
				visited[vertex] = 1;
				this.DFSSort(visited, sortedVertex, vertex);
			}
		}

		return sortedVertex;
	}
}

let myGraph = new Graph();
console.log(
	myGraph.insertMultipleEdges([
		[5, 6],
		[6, 7],
		[7, 8],
		[8, 6],
	])
);

console.log(myGraph.BFS(5, 6));
console.log(myGraph.DFS(5, 7));

// 5-> 6 -> 7->
//     \<-  8< -|

console.log(myGraph.topologicalSort());

// Time Complexity: DFS: O(E + V) BFS: O(E + V) TS: O(E + V)
// Space Complexity: DFS: O(E + V) BFS: O(E + V) TS: O(E + V)

// Time: 40 minutes
// Feeling: Medium, it was easy to do the DFS and BFS because are pretty similar. But doing the topological was a little more ticky to get the idea of recursivity, and understanding the problem. Now its clear the topological after coding it.
