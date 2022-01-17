function laptopRentals(times) {
	if(!times.length) return 0;
	
	times.sort((a, b) => a[0] - b[0]);
	const laptopHeap = new Heap([]);
	
	laptopHeap.insert(times[0]);
	let laptopCount = 1;
	
	for(let i = 1; i < times.length; i++){
		const minEndTime = laptopHeap.heap[0][1];
		const currentStartTime = times[i][0];
		
		if(currentStartTime < minEndTime) laptopCount++;
		else laptopHeap.remove();
		
		laptopHeap.insert(times[i])
	}

	return laptopCount;
	
}

class Heap {
	constructor(array){
		this.heap = array;
	}
	
	insert(node){
		this.heap.push(node);
		this.siftUp(node, this.heap.length-1)
	}
	
	siftUp(node, index){
		const parentIndex = this.getParent(index);
		if(parentIndex === null) return;
		
		const [start, end] = node;
		const childValue = end;
		const parentValue = this.heap[parentIndex][1];
		
		if(childValue < parentValue){
			[this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
			this.siftUp(this.heap[parentIndex], parentIndex)
		}
	}
	
	remove() {
    [this.heap[0], this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1], this.heap[0]];
		const removedValue = this.heap.pop();
		this.siftDown(this.heap[0], 0);
		return removedValue;
  }
	
	siftDown(node, index){
		const {leftChildIndex, rightChildIndex} = this.getChildren(index, this.heap);
		if(!leftChildIndex) return;
		
		const [start, end] = node;
		const parentValue = end;
		const leftChildValue = leftChildIndex ? this.heap[leftChildIndex][1] : Infinity;
		const rightChildValue = rightChildIndex ? this.heap[rightChildIndex][1] : Infinity;
		
		const minChildIndex = leftChildValue < rightChildValue ? leftChildIndex : rightChildIndex;
		
		if(this.heap[minChildIndex][1] < parentValue){
			[this.heap[index], this.heap[minChildIndex]] = [this.heap[minChildIndex], this.heap[index]];
			this.siftDown(this.heap[minChildIndex], this.heap)
		}
	}
	
	getParent(index){
		const parentIndex = Math.floor((index - 1) / 2) >= 0 ? Math.floor((index - 1) / 2) : null;
		return parentIndex;
	}
	
	getChildren(index, array) {
		const leftChildIndex = (index * 2) + 1 <= array.length-1 ? (index * 2) + 1 : null;
		const rightChildIndex = (index * 2) + 2 <= array.length-1 ? (index * 2) + 2: null;
		
		return {leftChildIndex, rightChildIndex}
	}