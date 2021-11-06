//3 basic ways of traversing a BST
//In Order(left, root, right)
//Pre Order(root, left, right)
//Post Order(left, right, root)

function inOrderTraverse(tree, array) {
  if (!tree) return;

  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array);

  return array;
}

function preOrderTraverse(tree, array) {
  if (!tree) return;

  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);

  return array;
}

function postOrderTraverse(tree, array) {
  if (!tree) return;

  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);

  return array;
}
