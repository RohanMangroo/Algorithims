//Create a BST class with methods...insert, contains, logging, remove
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const currentRoot = this;

    if (value < currentRoot.value) {
      currentRoot.left
        ? currentRoot.left.insert(value)
        : (currentRoot.left = new BST(value));
    } else if (value >= currentRoot.value) {
      currentRoot.right
        ? currentRoot.right.insert(value)
        : (currentRoot.right = new BST(value));
    }

    return this;
  }

  contains(value) {
    let currentRoot = this;

    while (currentRoot) {
      if (currentRoot.value === value) return true;
      if (value < currentRoot.value) currentRoot = currentRoot.left;
      else if (value >= currentRoot.value) currentRoot = currentRoot.right;
    }
    return false;
  }

  remove(value, currentParent = null) {
    const { nodeToRemove, parent } = this.findNodeToRemove(
      value,
      currentParent
    );

    if (!nodeToRemove.left || !nodeToRemove.right) {
      if (parent) this.useParentToDelete(nodeToRemove, parent);
      else this.reassignPointers(nodeToRemove);
    } else {
      //Find left most node in right subtree
      const leftMostNode = this.findLeftMostNode(nodeToRemove.right);
      //Overwrite of nodeToDelete value with leftMostNode in right subtree value
      nodeToRemove.value = leftMostNode.value;
      //Finally call down to delete that leftMostNode, passing in the right child of node to delete as the parent
      nodeToRemove.right.remove(leftMostNode.value, nodeToRemove);
    }
    return this;
  }

  findLeftMostNode(currentNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  useParentToDelete(nodeToRemove, parent) {
    if (parent.left === nodeToRemove) {
      nodeToRemove.left
        ? (parent.left = nodeToRemove.left)
        : (parent.left = nodeToRemove.right);
    } else if (parent.right === nodeToRemove) {
      nodeToRemove.left
        ? (parent.right = nodeToRemove.left)
        : (parent.right = nodeToRemove.right);
    }
  }

  findNodeToRemove(value, parent) {
    let nodeToRemove = this;
    while (nodeToRemove && nodeToRemove.value !== value) {
      parent = nodeToRemove;
      if (value < nodeToRemove.value) nodeToRemove = nodeToRemove.left;
      if (value > nodeToRemove.value) nodeToRemove = nodeToRemove.right;
    }

    return { nodeToRemove, parent };
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
}
