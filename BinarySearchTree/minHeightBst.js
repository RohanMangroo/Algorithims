//Given a sorted array of integers create a BST of minimum height

//To solve this problem we must employ the binary search algo
//Split the array in half, that becomes a new node and every left and right child of that new node are the recursive calls

//One tricky part about this problem is the base case in the recursion
//Originally I thought that the base case could be if(start === stop), but it turns out that's not the case

//When the midpoint is calculated it could potentially land on top of the start position which would result in the next version of the stop being at midpoint - 1. That would mean start is now greater than stop

//If start === stop we can still calculate a midpoint but if start is greater than stop we cannot, so start > stop will be our base case

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
