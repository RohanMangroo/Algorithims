function iterativeInOrderTraversal(tree, callback) {
  let currentNode = tree;
  let previousNode = null;

  while (currentNode) {
    if (currentNode.parent === previousNode) {
      if (!currentNode.left && !currentNode.right) {
        callback(currentNode);
        previousNode = currentNode;
        currentNode = currentNode.parent;
      } else if (currentNode.left) {
        previousNode = currentNode;
        currentNode = currentNode.left;
      } else {
        callback(currentNode);
        previousNode = currentNode;
        currentNode = currentNode.right;
      }
    } else {
      if (previousNode === currentNode.right) {
        previousNode = currentNode;
        currentNode = currentNode.parent;
      } else if (previousNode === currentNode.left) {
        callback(currentNode);
        if (currentNode.right) {
          previousNode = currentNode;
          currentNode = currentNode.right;
        } else if (!currentNode.right) {
          previousNode = currentNode;
          currentNode = currentNode.parent;
        }
      }
    }

    // console.log(`currentNode: ${currentNode ? currentNode.value : null}, previousNode: ${previousNode ? previousNode.value : null}`)
  }
}
