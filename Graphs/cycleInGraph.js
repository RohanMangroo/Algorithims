//To find a cycle in a directed graph use a stack data structure to keep track of which nodes are in the recursive stack, this will tell you which nodes have back edges(edges that directly connect to an ancestor)

function cycleInGraph(edges) {
  const visitedArray = new Array(edges.length).fill(false);
  const inStack = new Array(edges.length).fill(false);
  const result = { hasCycle: false };

  for (let i = 0; i < edges.length; i++) {
    findCycle(edges, visitedArray, i, result, inStack);
  }
  return result.hasCycle;
}

function findCycle(array, visited, currentIndex, result, inStack) {
  if (inStack[currentIndex]) return (result.hasCycle = true);
  else inStack[currentIndex] = true;

  for (let i = 0; i < array[currentIndex].length; i++) {
    findCycle(array, visited, array[currentIndex][i], result, inStack);
  }

  inStack[currentIndex] = false;
}
