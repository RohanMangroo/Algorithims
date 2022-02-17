class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function compareLeafTraversal(tree1, tree2) {
  const stackOne = [tree1];
  const stackTwo = [tree2];
  let leavesEqual = true;

  while (stackOne.length && stackTwo.length) {
    const currentLeafOne = findLeaf(stackOne);
    const currentLeafTwo = findLeaf(stackTwo);

    const isEqual = currentLeafOne.value === currentLeafTwo.value;
    leavesEqual = leavesEqual && isEqual;
  }

  return leavesEqual;
}

function findLeaf(stack) {
  if (!stack.length) return null;
  let currentNode = stack.pop();

  while (currentNode.left || currentNode.right) {
    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
    currentNode = stack.pop();
  }

  return currentNode;
}
