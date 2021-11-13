//Given a BINARY SEARCH TREE find all the branch sums
//The solution to this problem is to recursively go down the tree keeping a runningSum variable
//When the left AND right childs are no longer valid we know we are at a branch, this will trigger a push of the running sum to the resuls array

function branchSums(root) {
  const result = [];
  helperFunction(root, result, 0);
  return result;
}

function helperFunction(node, array, runningSum) {
  if (!node) return;

  runningSum += node.value;
  //This is the important part
  //We are chcking to see if we are at the end of a branch
  //This will trigger us to push to our result array
  if (!node.left && !node.right) {
    array.push(runningSum);
    return;
  }

  helperFunction(node.left, array, runningSum);
  helperFunction(node.right, array, runningSum);
}
