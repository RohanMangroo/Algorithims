//Build a Minheap class that supports the following public and private API
//public.. insert, peek, pop
//private...buildHeap, siftDown, siftUp,

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    //build a minHeap
    const lastParent = Math.floor((array.length - 2) / 2);
    for (let i = lastParent; i >= 0; i--) {
      const currentRootIndex = i;
      this.siftDown(array, currentRootIndex);
    }
    return array;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap, this.heap.length - 1);
  }

  remove() {
    if (!this.heap.length) return;
    this.swap(this.heap, 0, this.heap.length - 1);
    const minValue = this.heap.pop();
    this.siftDown(this.heap, 0);
    return minValue;
  }

  siftDown(array, index) {
    const minChildIndex = this.findMinChildIndex(array, index);

    if (minChildIndex && array[minChildIndex] < array[index]) {
      this.swap(array, index, minChildIndex);
      this.siftDown(array, minChildIndex);
    }
  }

  siftUp(array, index) {
    const parentIndex = this.findParent(index);

    if (parentIndex !== null && array[index] < array[parentIndex]) {
      this.swap(array, index, parentIndex);
      this.siftUp(array, parentIndex);
    }
  }

  swap(array, indexOne, indexTwo) {
    [array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];
  }

  findMinChildIndex(array, index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;

    const leftChildValue =
      leftChildIndex < array.length ? array[leftChildIndex] : Infinity;
    const rightChildValue =
      rightChildIndex < array.length ? array[rightChildIndex] : Infinity;

    const minChild =
      leftChildValue <= rightChildValue ? leftChildIndex : rightChildIndex;

    if (minChild >= array.length) return null;
    else return minChild;
  }

  findParent(index) {
    const parent =
      Math.floor((index - 1) / 2) >= 0 ? Math.floor((index - 1) / 2) : null;

    return parent;
  }
}

const array = [3, 10, 46, 10, 23];
const myHeap = new MinHeap(array);
myHeap.insert(-4);
myHeap.insert(234);
const minNumOne = myHeap.remove();
// console.log(myHeap.heap);
const minNumTwo = myHeap.remove();
// console.log(myHeap, minNumOne, minNumTwo);
