//The task here is to create a Binary Search Tree class that has 3 methods...insert/contains/remove..
//I've got t2/3. Remove is hard to understand at this point, need to work more on that

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;

    while (currentNode) {
      if (currentNode.value > value) {
        if (!currentNode.left) {
          currentNode.left = new BST(value);
          break;
        } else currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new BST(value);
          break;
        } else currentNode = currentNode.right;
      }
    }
    return this;
  }

  contains(value) {
    let currentNode = this;

    while (currentNode) {
      if (currentNode.value === value) return true;

      if (currentNode.value > value) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }

    return false;
  }

  remove(value, root = this, currParent = null) {
    const [nodeToRemove, parent] = this.findNodeToRemove(
      value,
      root,
      currParent
    );

    if (nodeToRemove.left && nodeToRemove.right) {
      nodeToRemove.value = this.findRightSubTreeMin(nodeToRemove.right);
      this.remove(nodeToRemove.value, nodeToRemove.right, nodeToRemove);
    } else if (parent === null) this.reassignPointers(nodeToRemove);
    else if (parent.left === nodeToRemove) {
      parent.left = nodeToRemove.left ? nodeToRemove.left : nodeToRemove.right;
    } else if (parent.right === nodeToRemove) {
      parent.right = nodeToRemove.left ? nodeToRemove.left : nodeToRemove.right;
    }

    return this;
  }

  reassignPointers(node) {
    if (node.left) {
      node.value = node.left.value;
      node.right = node.left.right;
      node.left = node.left.left;
    } else if (node.right) {
      node.value = node.right.value;
      node.left = node.right.left;
      node.right = node.right.right;
    }
  }

  findRightSubTreeMin(node) {
    let currentNode = node;
    while (currentNode.left) currentNode = currentNode.left;
    return currentNode.value;
  }

  findNodeToRemove(value, root, parent) {
    let currentNode = root;

    while (currentNode) {
      if (currentNode.value === value) return [currentNode, parent];

      if (currentNode.value > value) {
        parent = currentNode;
        currentNode = currentNode.left;
      } else {
        parent = currentNode;
        currentNode = currentNode.right;
      }
    }

    return [null, null];
  }
}
