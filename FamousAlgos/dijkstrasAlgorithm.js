function dijkstrasAlgorithm(start, edges) {
  const minDistances = new Array(edges.length).fill(Infinity);
  helperFunction(edges, minDistances, start, 0, new Set());
  return minDistances.map((num) => {
    return num < Infinity ? num : -1;
  });
}

function helperFunction(
  edges,
  minDistances,
  destination,
  distanceTraveled,
  seen
) {
  if (seen.size === edges.length || seen.has(destination)) return;

  minDistances[destination] = Math.min(
    distanceTraveled,
    minDistances[destination]
  );
  seen.add(destination);

  const outBoundNodes = edges[destination];

  for (let i = 0; i < outBoundNodes.length; i++) {
    const [nextNode, distance] = outBoundNodes[i];
    const newDistance = distance + distanceTraveled;
    const newSeen = new Set(seen);
    helperFunction(edges, minDistances, nextNode, newDistance, newSeen);
  }
}

function dijkstrasAlgorithm2(start, edges) {
  const minDistances = new Array(edges.length).fill(Infinity);
  minDistances[start] = 0;
  const visited = new Set();

  let currentNode = start;

  while (visited.size !== edges.length) {
    const outBoundNodes = edges[currentNode];

    for (let i = 0; i < outBoundNodes.length; i++) {
      const [node, distance] = outBoundNodes[i];
      if (visited.has(node)) continue;
      minDistances[node] = Math.min(
        minDistances[node],
        distance + minDistances[currentNode]
      );
    }

    visited.add(currentNode);
    const nextNode = getCurrentMinDistance(
      visited,
      minDistances,
      minDistances[currentNode]
    );

    currentNode = nextNode;
  }

  return minDistances.map((num) => {
    return num < Infinity ? num : -1;
  });
}

function getCurrentMinDistance(visited, minDistances, currentMin) {
  let index = 0;
  let num = Infinity;

  for (let i = 0; i < minDistances.length; i++) {
    if (visited.has(i)) continue;

    if (minDistances[i] <= num) {
      num = minDistances[i];
      index = i;
    }
  }
  return index;
}
