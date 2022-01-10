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
