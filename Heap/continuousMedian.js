class ContinuousMedianHandler {
  constructor() {
    this.minHeap = new Heap(minCompareFunc); //greater half
    this.maxHeap = new Heap(maxCompareFunc); //lesser half
    this.median = null;
  }

  insert(number) {
    if (!this.median) {
      this.median = number;
      this.minHeap.add(number);
    } else {
      if (this.median >= number) this.maxHeap.add(number);
      else if (this.median < number) this.minHeap.add(number);
    }

    if (this.minHeap.heap.length - this.maxHeap.heap.length >= 2)
      this.rebalance(this.minHeap, this.maxHeap);
    else if (this.maxHeap.length - this.minHeap.heap.lenght >= 2)
      this.rebalance(this.maxHeap, this.minHeap);

    this.getMedian();
  }

  rebalance(removeFrom, addTo) {
    const value = removeFrom.remove();
    addTo.insert(value);
  }

  getMedian() {
    if ((this.minHeap.heap.length + this.maxHeap.heap.length) % 2 === 0) {
      console.log(this.minHeap.heap, this.maxHeap.heap);
      this.median = (this.minHeap.heap[0] + this.maxHeap.heap[0]) / 2;
    } else if (this.minHeap.heap.length > this.maxHeap.heap.length)
      this.median = this.minHeap.heap[0];
    else if (this.maxHeap.heap.length > this.minHeap.heap.length)
      this.median = this.maxHeap.heap[0];

    return this.median;
  }
}

/*==========================================================*/
/*==========================================================*/

class Heap {
  constructor(compareFunc) {
    this.compareFunc = compareFunc;
    this.heap = [];
  }

  // buildHeap(array) {
  // const arrayLength = array.length-1;
  //   const startPosition = Math.floor((arrayLength - 1) / 2);
  // for(let i = startPosition; i >= 0; i--){
  // 	this.siftDown(i, array);
  // }
  // return array;
  // }

  add(number) {
    this.heap.push(number);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  siftDown(index, array) {
    const { leftChildIndex, rightChildIndex } = this.getChildren(index, array);
    if (leftChildIndex === null) return;

    const parentValue = array[index];
    const leftChildValue = leftChildIndex ? array[leftChildIndex] : Infinity;
    const rightChildValue = rightChildIndex ? array[rightChildIndex] : Infinity;

    const minChildIndex =
      leftChildValue < rightChildValue ? leftChildIndex : rightChildIndex;

    if (this.compareFunc(array[minChildIndex], parentValue)) {
      [array[index], array[minChildIndex]] = [
        array[minChildIndex],
        array[index],
      ];
      this.siftDown(minChildIndex, array);
    }

    // if(array[minChildIndex] < parentValue){
    // 	[array[index], array[minChildIndex]] = [array[minChildIndex], array[index]];
    // 	this.siftDown(minChildIndex, array)
    // }
  }

  siftUp(index, array) {
    const parentIndex = this.getParent(index, array);
    if (parentIndex === null) return;

    const childValue = array[index];
    const parentValue = array[parentIndex];

    if (this.compareFunc(childValue, parentValue)) {
      [array[index], array[parentIndex]] = [array[parentIndex], array[index]];
      this.siftUp(parentIndex, array);
    }

    // if(childValue < parentValue) {
    // 	[array[index], array[parentIndex]] = [array[parentIndex], array[index]];
    // 	this.siftUp(parentIndex, array)
    // }
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

  getParent(index, array) {
    const parentIndex =
      Math.floor((index - 1) / 2) >= 0 ? Math.floor((index - 1) / 2) : null;
    return parentIndex;
  }
}

function maxCompareFunc(a, b) {
  return a > b;
}

function minCompareFunc(a, b) {
  return a < b;
}
