//Given a binary SEARCH TREE and a target value, find the node within the BST with the closest value to the target value
//We can traverse the BST recursively or iteratively and keep track of the absolute difference between the target and the current node's value
//One approcach is to traverse all the nodes and keep track that way
//Another, better approach is to do it in O(log(n)) time
//In this approach we calculate the absolute difference of the target and the current node's value and decided which direction to go in by checking if the current node's value is greater than or less than the target

//We do that because we are trying to figure out which side of the difference ae are on, the plus side or the minus side.
//A difference of two can be Math.abs(10-8) or Math.abs(10-12)
//We want to go in the direction that matches that side

//Iterative approach
function findClosestValueInBst(tree, target) {
  let minDifference = Infinity;
  let closestValue = null;
  let currentNode = tree;

  while (currentNode) {
    let currentDifference = Math.abs(target - currentNode.value);
    //Here we are updating the currentDifference along with closestValue
    if (currentDifference < minDifference) {
      minDifference = currentDifference;
      closestValue = currentNode.value;
    }
    //This is the important part, where we are deciding which direction to move in
    //If the target value if greater than the currentNode value we move right because our difference is on the 'right' side, meaning our target is bigger than our currentNode value
    //If the traget value is less than the currentNode value we move left because our difference is on the 'left' side, meaning our target is less than our currentNode value
    currentNode =
      target >= currentNode.value ? currentNode.right : currentNode.left;
  }

  return closestValue;
}

//Recursive approach
function findClosestValueInBst(tree, target) {
  const result = {
    minDifference: Infinity,
    closestValue: null,
  };
  helperFunction(tree, target, result);
  return result.closestValue;
}

function helperFunction(node, target, result) {
  if (!node) return;

  const currentDifference = Math.abs(target - node.value);
  if (currentDifference < result.minDifference) {
    result.minDifference = currentDifference;
    result.closestValue = node.value;
  }

  //Instead of moving to the next node we recursivly travel to it
  if (target >= node.value) helperFunction(node.right, target, result);
  else helperFunction(node.left, target, result);
}
