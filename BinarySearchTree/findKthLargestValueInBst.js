//Given a BST and a k value, find the kth largest value.

//To solve this problem we will do a 'backwards In Order Traversal'
//In Order Traversal is...Left Root Right, in a BST this will get us the elements in ascending order, but we want to go in decending order because we need to get the largest number, so will traverse Right Root Left. This will gve us the greatest element first

//If we keep a count and check if that count is equal to our given k value we will know when we arraive at our kth largest node.
//To improve the Time of this algo but your node.left traversal inside an if block. Only IF we need to go left do we do it. This will prevent us from doing uneeded traversals.

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  const result = { kthLargest: null, count: 0 };
  backwardsInorderTraversal(tree, k, result);
  return result.kthLargest;
}

function backwardsInorderTraversal(node, k, result) {
  if (!node) return;

  backwardsInorderTraversal(node.right, k, result);
  result.count++;

  if (result.count === k) result.kthLargest = node.value;

  if (result.count < k) {
    backwardsInorderTraversal(node.left, k, result);
  }
}
