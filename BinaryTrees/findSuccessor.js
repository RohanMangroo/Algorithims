//Given a Binary Tree find the in IN ORDER SUCCESSOR.

//There are 2 ways of solving this problem.
//1)Use a trigger. Traverse the tree find the given node, this will set off a trigger and we will grab the very next node
//2) Follow these rules...FOR IN ORDER SUCCESSOR...
//if(we have a right subtree), the in order successor is the left most node in that subtree
//if(we do NOT have a right sub tree), the in order successor is the first parent node that conatins our given node in it's LEFT subtree

function findSuccessor(tree, node) {
  //Do we have a right subtree???

  if (node.right) {
    let currentNode = node.right;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  } else {
    let currentNode = node;
    let parent = node.parent;

    if (parent === null) return parent;

    while (parent.left !== node) {
      node = parent;
      parent = parent.parent;
      if (parent === null) return parent;
    }
    return parent;
  }
}

function findSuccessorPartTwo(tree, node) {
  const result = {
    trigger: false,
    successor: null,
  };
  helperFunction(tree, node, result);

  return result.successor;
}

function helperFunction(node, givenNode, result) {
  if (!node) return;

  if (result.successor === null) {
    helperFunction(node.left, givenNode, result);

    if (result.successor === null && result.trigger === true) {
      result.successor = node;
    }

    if (node === givenNode) {
      result.trigger = true;
    }

    helperFunction(node.right, givenNode, result);
  }
}
