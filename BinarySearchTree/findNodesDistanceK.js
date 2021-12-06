class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findNodesDistanceK(tree, target, k) {
  const parents = findParents(tree, null, { target: null }, target);

  const queue = [[parents.target, 0]];
  return findKDistances(queue, k, parents, {
    [parents.target.value]: true,
  }).map((ele) => ele[0].value);
}

function findParents(node, parent, parents, target) {
  if (!node) return;

  if (node.value === target) parents.target = node;

  parents[node.value] = parent;
  findParents(node.left, node, parents, target);
  findParents(node.right, node, parents, target);

  return parents;
}

function findKDistances(queue, k, parents, seen) {
  if (queue[0][1] === k) return;
  const currentNode = queue.shift();

  if (currentNode[0].left && !(currentNode[0].left.value in seen)) {
    seenHelper(
      queue,
      currentNode[0].left,
      currentNode[1],
      currentNode[0].value,
      seen
    );
  }

  if (currentNode[0].right && !(currentNode[0].right.value in seen)) {
    seenHelper(
      queue,
      currentNode[0].right,
      currentNode[1],
      currentNode[0].value,
      seen
    );
  }

  if (
    parents[currentNode[0].value] &&
    !(parents[currentNode[0].value].value in seen)
  ) {
    seenHelper(
      queue,
      parents[currentNode[0].value],
      currentNode[1],
      parents[currentNode[0].value].value,
      seen
    );
  }

  if (!queue.length) return [];
  findKDistances(queue, k, parents, seen);
  return queue;
}

function seenHelper(queue, nodeToAdd, distance, value, seen) {
  queue.push([nodeToAdd, distance + 1]);
  seen[value] = true;
}
