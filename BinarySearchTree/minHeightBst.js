//Given a sorted array of integers create a BST of minimum height

//To solve this problem we must employ the binary search algo
//Split the array in half, that becomes a new node and every left and right child of that new node are the recursive calls

function minHeightBst(array) {
  return helperFunction(0, array.length - 1, array);
}

function helperFunction(start, stop, array) {
  if (stop < start) return null;
  const midPoint = Math.floor((start + stop) / 2);
  const newNode = new BST(array[midPoint]);

  newNode.left = helperFunction(start, midPoint - 1, array);
  newNode.right = helperFunction(midPoint + 1, stop, array);

  return newNode;
}
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
