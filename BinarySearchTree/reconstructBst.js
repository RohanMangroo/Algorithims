//Given an array that is by the IN-ORDER traversal of a BST your task is to reconstruct that BST.

//In order to solve this problem we must leverage the idea of a BST. At every node in a valid BST that node must be within certain bounds
//That bounds is based on it's parent node

//Scann through the given array checking if that node can be created at that point given it's bounds
//We will get the bounds for every node by passing down lowerBound and upperBound at every turn

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  const index = { currPos: 0 };
  return helperFunction(preOrderTraversalValues, index, -Infinity, Infinity);
}

function helperFunction(array, index, lowerBound, upperBound) {
  if (index.currPos >= array.length) return null;
  console.log(array[index.currPos]);
  console.log(lowerBound, upperBound);
  if (array[index.currPos] >= lowerBound && array[index.currPos] < upperBound) {
    const currentNode = new BST(array[index.currPos]);

    index.currPos++;

    currentNode.left = helperFunction(
      array,
      index,
      lowerBound,
      array[index.currPos - 1]
    );
    currentNode.right = helperFunction(
      array,
      index,
      array[index.currPos - 1],
      upperBound
    );

    return currentNode;
  } else {
    return null;
  }
}
