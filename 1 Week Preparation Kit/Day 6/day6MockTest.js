/*
 Consider an undirected graph where each edge weighs 6 units. Each of the nodes is labeled consecutively from 1 to n.
 You will be given a number of queries. For each query, you will be given a list of edges describing an undirected graph.
 After you create a representation of the graph, you must determine and report the shortest distance to each of the 
 other nodes from a given starting position using the breadth-first search algorithm (BFS). Return an array of distances 
 from the start node in node number order. If a node is unreachable, return -1 for that node. 
 */

const bfs = (n, m, edges, s) => {
    const edgesMap = new Map();
    const distanceMap = new Map();
    const distanceArray = [];

    edges.forEach(([firstNode, secondNode]) => {
        if (edgesMap.has(firstNode)) {
            const targetNodes = edgesMap.get(firstNode);
            targetNodes.add(secondNode);
        } else {
            const targetNodes = new Set();
            targetNodes.add(secondNode);
            edgesMap.set(firstNode, targetNodes);
        }

        if (edgesMap.has(secondNode)) {
            const targetNodes = edgesMap.get(secondNode);
            targetNodes.add(firstNode);
        } else {
            const targetNodes = new Set();
            targetNodes.add(firstNode);
            edgesMap.set(secondNode, targetNodes);
        }
    });

    getMinimumDistances(edgesMap, distanceMap, s, n);
    for (let i = 1; i <= n; i++) {
        if (i !== s) {
            distanceArray.push(distanceMap.get(i) || -1);
        }
    }

    return distanceArray;
};

const getMinimumDistances = (edgesMap, distances, start, numberOfNodes) => {
    const targetNodes = edgesMap.get(start) || new Set();
    const nodesQueue = Array.from(targetNodes);
    edgesMap.set(start, new Set());
    let nextLevelQueue = [];
    let level = 1;
    let nodeDistancesToSet = numberOfNodes;

    while (nodesQueue.length > 0 && nodeDistancesToSet > 0) {
        const nextNode = nodesQueue.shift();
        const nextTargetNodes = edgesMap.get(nextNode) || new Set();
        const nextNodesArray = Array.from(nextTargetNodes);
        nextLevelQueue.push(...nextNodesArray);
        edgesMap.set(nextNode, []);

        if (!distances.get(nextNode)) {
            nodeDistancesToSet--;
        }
        const currentMinDistance = distances.get(nextNode) || Infinity;
        distances.set(nextNode, Math.min(currentMinDistance, level * 6));

        if (nodesQueue.length === 0) {
            nodesQueue.push(...nextLevelQueue);
            nextLevelQueue = [];
            level++;
        }
    }
    return level;
};