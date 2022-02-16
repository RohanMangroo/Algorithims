class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function rightSiblingTree(root) {
  const queue = [root];
  let start = 0;
  let stop = 1;

  while (start < stop) {
    for (let i = start; i < stop; i++) {
      const currentNode = queue[i];
      if (currentNode) {
        queue.push(currentNode.left);

        if (currentNode === root) queue.push(currentNode.right);
        else queue.push(currentNode.tempPointer);

        if (currentNode === root) currentNode.right = null;
        else delete currentNode.tempPointer;
      }
    }

    start = stop;
    stop = queue.length;

    for (let i = start; i < stop; i++) {
      const currentNode = queue[i];

      if (currentNode) {
        const rightSibling = queue[i + 1];

        if (rightSibling) {
          currentNode.tempPointer = currentNode.right;
          currentNode.right = rightSibling;
        } else {
          currentNode.tempPointer = currentNode.right;
          currentNode.right = null;
        }
      }
    }
  }

  return root;
}
