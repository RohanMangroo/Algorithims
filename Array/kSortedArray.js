function sortKMessedArray(arr, k) {
  const minHeap = new MinHeap(arr.slice(0, k + 1));
  let currentInsertPos = 0;

  for (let i = k + 1; i < arr.length; i++) {
    const currentMinNum = minHeap.remove();
    arr[currentInsertPos] = currentMinNum;
    currentInsertPos++;
    minHeap.insert(arr[i]);
  }

  while (!minHeap.isEmpty()) {
    const currentMinNum = minHeap.remove();
    arr[currentInsertPos] = currentMinNum;
    currentInsertPos++;
  }

  return arr;
}

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const lastParentIndex = Math.floor(array.length - 2 / 2);
    for (let i = lastParentIndex; i >= 0; i--) {
      const currentParentIndex = i;
      this.siftDown(array, currentParentIndex);
    }
    return array;
  }

  remove() {
    this.swap(this.heap, 0, this.heap.length - 1);
    const removedElement = this.heap.pop();
    this.siftDown(this.heap, 0);
    return removedElement;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap, this.heap.length - 1);
  }

  siftDown(array, parentIndex) {
    const parentValue = array[parentIndex];
    const { minChildIndex, minChildValue } = this.getMinChild(
      array,
      parentIndex
    );

    if (minChildValue < parentValue) {
      this.swap(array, parentIndex, minChildIndex);
      this.siftDown(array, minChildIndex);
    }
  }

  siftUp(array, currentChildIndex) {
    const parentIndex =
      Math.floor((currentChildIndex - 1) / 2) >= 0
        ? Math.floor((currentChildIndex - 1) / 2)
        : null;
    const parentValue = array[parentIndex];
    const currentChildValue = array[currentChildIndex];

    if (parentIndex !== null && currentChildValue < parentValue) {
      this.swap(array, parentIndex, currentChildIndex);
      this.siftUp(array, parentIndex);
    }
  }

  getMinChild(array, parentIndex) {
    const parentValue = array[parentIndex];

    const leftChildIndex = parentIndex * 2 + 1;
    const rightChildIndex = parentIndex * 2 + 2;

    const leftChildValue =
      leftChildIndex >= array.length ? Infinity : array[leftChildIndex];
    const rightChildValue =
      rightChildIndex >= array.length ? Infinity : array[rightChildIndex];

    const minChildValue =
      leftChildValue <= rightChildValue ? leftChildValue : rightChildValue;
    const minChildIndex =
      minChildValue === leftChildValue ? leftChildIndex : rightChildIndex;

    return { minChildIndex, minChildValue };
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }
}
