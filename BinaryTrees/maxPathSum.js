/**
 * Find the maxPath in the Binary Tree
 * Keep track of the max branch(node.value + value returned from it's child)
 * Keep track of the max path(remember node values can be negative, so the max path could be the sum of only 2 nodes and not all 3)
 * Track the maxPath globally
 * Return maxBranch
 */

function maxPathSum(tree) {
  const result = { maxPath: -Infinity };
  helperFunction(tree, result);
  return result.maxPath;
}

function helperFunction(node, result) {
  if (!node) return 0;

  const left = helperFunction(node.left, result);
  const right = helperFunction(node.right, result);

  const leftBranch = left + node.value;
  const rightBranch = right + node.value;

  const currentMaxPath = Math.max(
    left + right + node.value,
    leftBranch,
    rightBranch
  );
  if (currentMaxPath > result.maxPath) result.maxPath = currentMaxPath;

  return Math.max(leftBranch, rightBranch);
}
