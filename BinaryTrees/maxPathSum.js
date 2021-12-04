function maxPathSum(tree) {
  const result = { maxPath: -Infinity };
  findMax(tree, result);
  return result.maxPath;
}

function findMax(tree, result) {
  if (!tree) return 0;

  const left = findMax(tree.left, result);
  const right = findMax(tree.right, result);

  const currMaxBranch = Math.max(left, right) + tree.value;

  const currPath = Math.max(
    left + right + tree.value,
    tree.value + left,
    tree.value + right
  );
  if (currPath > result.maxPath) result.maxPath = currPath;

  return currMaxBranch;
}
