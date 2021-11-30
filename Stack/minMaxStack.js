//This is a min max stack class
//It allows us to see the min and max at any given point of our stack data structure
//We utalize a second array that is updated at every push of the stack
//This second array can contain any other data structure that can track two values

class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minMaxStack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    this.stack.push(number);
    if (this.minMaxStack.length) {
      const currentMinMax = this.minMaxStack[this.minMaxStack.length - 1];

      const newMin = Math.min(currentMinMax[0], number);
      const newMax = Math.max(currentMinMax[1], number);

      this.minMaxStack.push([newMin, newMax]);
    } else this.minMaxStack.push([number, number]);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1][0];
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1][1];
  }
}
