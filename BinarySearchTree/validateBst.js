//Give a potentially invalid BST, return a boolean if the given tree is a valid BST or not

//To solve this problem we need to give each node a range
//The range will begin from min= -Infinity and the max= Infinity, this guarantees that the first node is valid
//As we move down we will update the range because for the tree to be a valid BST all nodes to the left of a given root must be smaller and all nodes to the right must be greater than or equal to

//Moving left, we update the max to be the root
//Moving left we update the min to be the root

function validateBst(tree) {
  const result = {
    isValid: true,
  };

  helperFunction(tree, result, -Infinity, Infinity);
  return result.isValid;
}

function helperFunction(node, result, min, max) {
  if (!node) return;

  const valid = node.value >= min && node.value < max;
  if (!valid) {
    result.isValid = false;
    return;
  }

  helperFunction(node.left, result, min, node.value);
  helperFunction(node.right, result, node.value, max);
}
