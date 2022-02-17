function allKindsOfNodeDepths(root) {
  getNumberOfChildren(root);
  const result = { count: 0 };
  getDepths(root, result);

  return result.count;
}

function getDepths(node, result) {
  if (!node) return 0;

  const leftDepth = getDepths(node.left, result);
  const rightDepth = getDepths(node.right, result);
  const totalDepthAtNode = leftDepth + rightDepth + node.numberOfChildren;

  result.count += totalDepthAtNode;

  return totalDepthAtNode;
}

function getNumberOfChildren(node) {
  if (!node) return 0;

  const leftChildren = getNumberOfChildren(node.left);
  const rightChildren = getNumberOfChildren(node.right);

  const numberOfChildren = leftChildren + rightChildren;
  node.numberOfChildren = numberOfChildren;

  return numberOfChildren + 1;
}
// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
