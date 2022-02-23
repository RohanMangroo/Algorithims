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

//==================================================//
function dijkstrasAlgorithm(start, edges) {
  const { array, nodeMap } = createHeapArray(edges, start);
  const minHeap = new MinHeap(array, nodeMap);
  const result = Array.from(array).fill(-1);
  result[start] = 0;

  while (minHeap.heap.length) {
    const [node, distance] = minHeap.pop();
    const outBoundEdges = edges[node];

    for (let i = 0; i < outBoundEdges.length; i++) {
      const [outBoundNode, outBoundDistance] = outBoundEdges[i];
      if (!(outBoundNode in minHeap.nodeMap)) continue;
      const totalDistance = distance + outBoundDistance;
      //Using the nodeMap to find the index of the current outBoundNode in the heap
      const heapIndex = minHeap.nodeMap[outBoundNode];
      //Greabbing the node and distance of outBoundNode in the minHeap
      //We'll use this to update this particular node if we need to

      const [heapNode, heapNodeDistance] = minHeap.heap[heapIndex];

      if (totalDistance < heapNodeDistance) {
        result[outBoundNode] = totalDistance;
        minHeap.updateNodeDistance(heapIndex, totalDistance);
      }
    }
  }
  return result;
}

class MinHeap {
  constructor(array, nodeMap) {
    this.nodeMap = nodeMap;
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const lastParent = Math.floor((array.length - 2) / 2);
    for (let i = lastParent; i >= 0; i--) {
      const currentNodeIndex = i;
      this.siftDown(array, currentNodeIndex);
    }
    return array;
  }

  siftDown(array, index) {
    //return if array is empty, nothing to siftDown, nowhere to sift too
    if (!array.length) return;
    //distance is from source node
    const [node, distance] = array[index];

    const minChildIndex = getMinChildIndex(array, index);

    //making sure the child index is not out of bounds
    if (minChildIndex) {
      const [minChildNode, minChildDistance] = array[minChildIndex];

      if (minChildDistance < distance) {
        this.swap(array, index, minChildIndex, node, minChildNode);
        this.siftDown(array, minChildIndex);
      }
    }
  }

  siftUp(childIndex) {
    const parentIndex = Math.floor((childIndex - 1) / 2);

    //making sure the parent index is not out of bounds
    if (parentIndex >= 0) {
      const [childNode, childNodeDistance] = this.heap[childIndex];
      const [parentNode, parentDistance] = this.heap[parentIndex];

      if (childNodeDistance < parentDistance)
        this.swap(this.heap, childIndex, parentIndex, childNode, parentNode);
      this.siftUp(parentIndex);
    }
  }

  updateNodeDistance(index, distance) {
    const parentIndex = Math.floor((index - 1) / 2);
    this.heap[index][1] = distance;
    if (parentIndex >= 0) this.siftUp(index);
  }

  pop() {
    //When popping off the last node I still try to sift down, so the sift down method protects against an empty array
    const nodeOne = this.heap[0][0];
    const nodeTwo = this.heap[this.heap.length - 1][0];
    this.swap(this.heap, 0, this.heap.length - 1, nodeOne, nodeTwo);

    const nodeWithMinDistance = this.heap.pop();
    delete this.nodeMap[nodeWithMinDistance[0]];
    this.siftDown(this.heap, 0);
    return nodeWithMinDistance;
  }

  swap(array, indexOne, indexTwo, nodeOne, nodeTwo) {
    //Swap in heap
    [array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];
    //Swap in nodeMap
    const tempIndexOne = this.nodeMap[nodeOne];
    const tempIndexTwo = this.nodeMap[nodeTwo];

    this.nodeMap[nodeOne] = tempIndexTwo;
    this.nodeMap[nodeTwo] = tempIndexOne;
  }
}

function getMinChildIndex(array, index) {
  const leftChildIndex = index * 2 + 1;
  const rightChildIndex = index * 2 + 2;

  const leftChildDistance =
    leftChildIndex >= array.length ? Infinity : array[leftChildIndex][1];
  const rightChildDistance =
    rightChildIndex >= array.length ? Infinity : array[rightChildIndex][1];

  const minChildIndex =
    leftChildDistance <= rightChildDistance ? leftChildIndex : rightChildIndex;
  return minChildIndex >= array.length ? null : minChildIndex;
}

function createHeapArray(edges, start) {
  const array = [];
  const nodeMap = {};

  edges.forEach((node, index) => {
    //[nodeValue, distance]
    if (index === start) array.push([index, 0]);
    else array.push([index, Infinity]);
    nodeMap[index] = index;
  });

  return { array, nodeMap };
}
