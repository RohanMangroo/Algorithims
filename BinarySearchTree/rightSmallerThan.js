function rightSmallerThan(array) {
  if (!array.length) return [];

  const resultArray = Array.from(array).fill(0);
  const tree = new Tree(array[array.length - 1]);

  for (let i = array.length - 2; i >= 0; i--) {
    const currentValue = array[i];
    const count = tree.insert(currentValue);
    resultArray[i] = count;
  }

  return resultArray;
}

class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.leftChildCount = 0;
  }

  insert(value, result = { count: 0 }) {
    const currentNode = this;

    if (value < currentNode.value) {
      currentNode.leftChildCount = currentNode.leftChildCount + 1;
      if (currentNode.left) this.left.insert(value, result);
      else currentNode.left = new Tree(value);
    } else {
      result.count += currentNode.leftChildCount;
      if (value > currentNode.value) result.count++;
      if (currentNode.right) this.right.insert(value, result);
      else currentNode.right = new Tree(value);
    }

    return result.count;
  }
}
