// Question 6: RoadNetworks

///////// EXPLANATION /////////

// In some states, it is not possible to drive between any two towns because they are not connected to the same road network. Given a list of towns and a list of pairs representing roads between towns, return the number of road networks. (For example, a state in which all towns are connected by roads has 1 road network, and a state in which none of the towns are connected by roads has 0 road networks.)

///////// EXAMPLES /////////

// Input: ["Skagway", "Juneau", "Gustavus", "Homer", "Port Alsworth", "Glacier Bay", "Fairbanks", "McCarthy", "Copper Center", "Healy"], [("Anchorage", "Homer"), ("Glacier Bay", "Gustavus"), ("Copper Center", "McCarthy"), ("Anchorage", "Copper Center"), ("Copper Center", "Fairbanks"), ("Healy", "Fairbanks"), ("Healy", "Anchorage")]

// Output: 2 (Networks are Gustavus-Glacier Bay and Anchorage-Fairbanks-McCarthy-Copper Center-Homer-Healy)

///////// PROCESS THINKING /////////

//  Make a graph of the roads in an adjacency list and an array having the connections of the road, then we can traverse trough the roades and keep the visited roades and count the non-visited

///////// CODING /////////
function RoadNetworks(states, roades) {
	// Create the base array
	let networks = 0;
	let roadesList = AdjacencyList(roades);
	let visitedStates = {};

	for (let state of states) {
		if (roadesList[state] && !visitedStates[state] && roadesList[state].length >= 1) {
			networks += 1;
			TraverseRoades(state, roades, visitedStates);
		}
	};

	return networks;
}

function TraverseRoades(startingRoad, adjacencyList, visitedStates) {
	if (visitedStates[startingRoad]) {
		return visited;
	}

	visitedStates[startingRoad] = 1;

	if (adjacencyList[startingRoad]) {
		visitedStates[startingRoad].forEach((state) => {
			visitedStates = TraverseRoades(state, adjacencyList, visitedStates);
		});
	}

	return visitedStates;
}

function AdjacencyList(roades) {
	const adjacencyList = {};

	roades.forEach((road) => {
		if (!adjacencyList[road[0]]) {
			adjacencyList[road[0]] = [];
		}

		if (!adjacencyList[road[1]]) {
			adjacencyList[road[1]] = [];
		}

		adjacencyList[road[1]].push(road[0]);
	});

	return adjacencyList;
}

console.log(
	RoadNetworks(
		[
			"Skagway",
			"Juneau",
			"Gustavus",
			"Homer",
			"Port Alsworth",
			"Glacier Bay",
			"Fairbanks",
			"McCarthy",
			"Copper Center",
			"Healy",
		],
		[
			["Anchorage", "Homer"],
			["Glacier Bay", "Gustavs"],
			["Copper Center", "McCarty"],
			["Anchorage", "Copper Centr"],
			["Copper Center", "Fairbanks"],
			["Healy", "Fairbanks"],
			["Healy", "Anchorage"],
		]
	)
);

// Time Complexity: O(n)
// Space Complexity: O(n)

// Time: 25 minutes
// Feeling: Easy, 
