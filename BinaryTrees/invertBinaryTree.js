//Given a Binary Tree return the inverted version

//To invert a BT we must do it top down
//Simply grab a node first, swap it's nodes, THEN proceed down the tree

function invertBinaryTree(tree) {
  if (!tree) return;

  [tree.left, tree.right] = [tree.right, tree.left];

  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);

  return tree;
}
