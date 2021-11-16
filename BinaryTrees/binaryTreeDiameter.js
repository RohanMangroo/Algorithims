//Given a Binary Tree find the diameter. The diameter of a Binary tree is the longest path continuous path between nodes where no node is connected to more than 2 other nodes. So a path cannot include both childrens and parent of a given node.

//To solve this use recursion to traverse down the node in post order fashion.
//Weh we get to the bottom we return a lengt of 0, then we return the max of left and right lengths + 1

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  const result = { longestPath: 0 };
  helperFunction(tree, result);
  return result.longestPath;
}

function helperFunction(node, result) {
  if (!node) return 0;

  const leftPath = helperFunction(node.left, result);
  const rightPath = helperFunction(node.right, result);

  const currentLongestPath = leftPath + rightPath;
  if (currentLongestPath > result.longestPath)
    result.longestPath = currentLongestPath;

  return Math.max(leftPath, rightPath) + 1;
}
