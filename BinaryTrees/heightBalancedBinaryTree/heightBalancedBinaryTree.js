//Given a Binary Tree return a boolean if the tree is height balanced.
//A tree is height balanced if for each node the difference between it's left subtree height and right subtree is no greater than 1.

//This problem is very similar to the diameter problem
//Traverse down the tree, checking the difference between leftHeight and rightHeight and return the max(left, right) +1

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  const result = { isBalanced: true, difference: null };
  helperFunction(tree, result);
  return result;
}

function helperFunction(node, result) {
  if (!node) return 0;

  if (result.isBalanced === true) {
    const leftHeight = helperFunction(node.left, result);
    const rightHeight = helperFunction(node.right, result);

    const heightDiff = Math.abs(leftHeight - rightHeight);
    result.difference = heightDiff;
    if (heightDiff > 1) result.isBalanced = false;

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

module.exports = {
  heightBalancedBinaryTree,
  helperFunction,
};
