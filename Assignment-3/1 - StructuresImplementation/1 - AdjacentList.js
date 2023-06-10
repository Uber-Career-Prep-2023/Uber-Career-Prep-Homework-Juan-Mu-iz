// Question 1: Build an Adjacency List/Set Representation of a Graph

///// Problem explanation ///// 
// Given an array of pairs of values representing edges in an unweighted graph, create the equivalent adjacency list/set representation (a map from element to a list or set of elements). Pairs represent directed edges: (A, B) means there is an edge from A to B. If the pair (B, A) is also provided then there is an undirected edge between A and B. For simplicity, you may assume that each node of the graph stores an integer rather than a generic data type and that the elements are distinct. Implement a basic DFS and BFS searching for a target value and a topological sort (using either DFS or Kahn’s algorithm).

///// Examples /////
// Build graph representation. You can also use an array rather than a set
// map<int, set<int>> adjacencySet(array<pair<int, int>> edges);
// Example
// Input: [(1, 2), (2, 3), (1, 3), (3, 2), (2, 0)]
// Output:
// {
//     0: []
//     1: [2, 3]
//     2: [0, 3]
//     3: [2]
// }

// bool bfs(int target, map<int, set<int>> graph);
// bool dfs(int target, map<int, set<int>> graph);
// array<int> topologicalSort(map<int, set<int>> graph);

///// Process thinking /////

///// Keypoints /////

///// Comments /////

///// Inputs /////
///// Outputs /////

///// Method /////

///// Explanation /////

///// Steps /////

// Step 1: 
// Step 2: 
// Step 3: 
// Step 4: 

///// CODE //////


///// CODE //////

///// Conclusion /////

// Time Complexity: O(n) n meaning the elements of the array
// Space Complexity: O(1) always the same space

// Time taken: 20 minutes
// Feeling: Easy