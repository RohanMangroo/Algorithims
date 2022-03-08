function sortKSortedArray(array, k) {
  let start = 0;
  let stop = k;

  for (let i = 0; i < array.length; i++) {
    const minValueIndex = findMinValueIndex(array, i, stop);
    [array[i], array[minValueIndex]] = [array[minValueIndex], array[i]];
    if (stop < array.length) stop++;
  }

  return array;
}

function findMinValueIndex(array, start, stop) {
  let minValue = Infinity;
  let index = null;

  for (let i = start; i <= stop; i++) {
    if (array[i] <= minValue) {
      minValue = array[i];
      index = i;
    }
  }

  return index;
}

function sortKSortedArray(array, k) {
  let arrayForMinHeap =
    k >= array.length ? array.slice() : array.slice(0, k + 1);
  const minHeap = new MinHeap(arrayForMinHeap);

  let currentInsertPosition = 0;

  for (let i = k + 1; i < array.length; i++) {
    const currentMinNum = minHeap.remove();
    array[currentInsertPosition] = currentMinNum;
    minHeap.insert(array[i]);
    currentInsertPosition++;
  }

  while (!minHeap.isEmpty()) {
    const currentMinNum = minHeap.remove();

    array[currentInsertPosition] = currentMinNum;
    currentInsertPosition++;
  }
  return array;
}

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    //Last Parent
    //Math.floor(array.length - 2) / 2;
    const lastParentIndex = Math.floor(array.length - 2 / 2);
    for (let i = lastParentIndex; i >= 0; i--) {
      const currentIndex = i;
      this.siftDown(array, currentIndex);
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

  siftUp(array, childIndex) {
    const parentIndex =
      Math.floor((childIndex - 1) / 2) >= 0
        ? Math.floor((childIndex - 1) / 2)
        : null;

    if (parentIndex !== null) {
      const childValue = array[childIndex];
      const parentValue = array[parentIndex];

      if (childValue < parentValue) this.swap(array, childIndex, parentIndex);
      this.siftUp(array, parentIndex);
    }
  }

  siftDown(array, index) {
    const parentValue = array[index];
    const minChildIndex = this.findMinChildIndex(array, index);
    const minChildValue = array[minChildIndex];

    if (minChildValue < parentValue) {
      this.swap(array, index, minChildIndex);
      this.siftDown(array, minChildIndex);
    }
  }

  swap(array, i, j) {
    return ([array[i], array[j]] = [array[j], array[i]]);
  }

  findMinChildIndex(array, index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;

    const leftChildValue =
      leftChildIndex >= array.length ? Infinity : array[leftChildIndex];
    const rightChildValue =
      rightChildIndex >= array.length ? Infinity : array[rightChildIndex];

    const minChildValue = Math.min(leftChildValue, rightChildValue);
    const minChildIndex =
      minChildValue === leftChildValue ? leftChildIndex : rightChildIndex;

    return minChildIndex;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
