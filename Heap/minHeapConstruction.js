class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const arrayLength = array.length - 1;
    const startPosition = Math.floor((arrayLength - 1) / 2);
    for (let i = startPosition; i >= 0; i--) {
      this.siftDown(i, array);
    }
    return array;
  }

  siftDown(index, array) {
    const { leftChildIndex, rightChildIndex } = this.getChildren(index, array);
    if (!leftChildIndex) return;

    const parentValue = array[index];
    const leftChildValue = leftChildIndex ? array[leftChildIndex] : Infinity;
    const rightChildValue = rightChildIndex ? array[rightChildIndex] : Infinity;

    const minChildIndex =
      leftChildValue < rightChildValue ? leftChildIndex : rightChildIndex;

    if (array[minChildIndex] < parentValue) {
      [array[index], array[minChildIndex]] = [
        array[minChildIndex],
        array[index],
      ];
      this.siftDown(minChildIndex, array);
    }
  }

  siftUp(index, array) {
    const parentIndex = this.getParent(index, array);
    if (!parentIndex) return;

    const childValue = array[index];
    const parentValue = array[parentIndex];

    if (childValue < parentValue) {
      [array[index], array[parentIndex]] = [array[parentIndex], array[index]];
      this.siftUp(parentIndex, array);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    const removedValue = this.heap.pop();
    this.siftDown(0, this.heap);
    return removedValue;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  getChildren(index, array) {
    const leftChildIndex =
      index * 2 + 1 <= array.length - 1 ? index * 2 + 1 : null;
    const rightChildIndex =
      index * 2 + 2 <= array.length - 1 ? index * 2 + 2 : null;

    return { leftChildIndex, rightChildIndex };
  }

  getParent(index) {
    const parentIndex =
      Math.floor((index - 1) / 2) >= 0 ? Math.floor((index - 1) / 2) : null;
    return parentIndex;
  }
}
