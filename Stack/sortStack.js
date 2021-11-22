//Given an array sort it only using the pop() push() and peek(treat it as a stack)

//To sort the array in stack fashion we need to recursively pop the array until it is empty. At that point we can start to build it back up because we have reaached the base case of a sorted array(an empty array is sorted).

//We will always be hold a sorted array when we are building back up

//When we build back up if we encounter an element that is greater than the top of the stack we simply drop it on top
//If we encounter and element that is less that the top of the stack we need to find a way to insert it
//To insert it in the correct place we will create a another function pops elements off the stack until we find the right position, at which point we will insert that element in it's position and that method will build back up by placing the elements popped off during the insertion phase

function sortStack(stack) {
  if (!stack.length) return stack;
  const poppedElement = stack.pop();
  sortStack(stack);

  if (!stack.length || poppedElement >= stack[stack.length - 1]) {
    stack.push(poppedElement);
  } else {
    insertValue(stack, poppedElement);
  }

  return stack;
}

function insertValue(stack, value) {
  if (!stack.length) {
    stack.push(value);
    return;
  }

  let topOfStack = stack[stack.length - 1];

  if (value < topOfStack) {
    topOfStack = stack.pop();
    insertValue(stack, value);
    stack.push(topOfStack);
  } else {
    stack.push(value);
  }
}
