//The task here is to create a Binary Search Tree class that has 3 methods...insert/contains/remove..
//I've got t2/3. Remove is hard to understand at this point, need to work more on that

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (!this) return new BST(value);
    else {
      let currentNode = this;
      while (currentNode) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = new BST(value);
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = new BST(value);
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
    return this;
  }

  contains(value) {
    let currentNode = this;
    while (currentNode) {
      if (currentNode.value === value) return true;
      else {
        if (value < currentNode.value) currentNode = currentNode.left;
        else currentNode = currentNode.right;
      }
    }
    return false;
  }
}
