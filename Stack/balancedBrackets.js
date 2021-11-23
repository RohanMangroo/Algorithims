//This the classic balanced brackets problem

//To solve this problem use a stack

//Before we drop an element into the stack we check if the top of the stack containes it's opposite, if it does we pop the top off the stack and move on
//If it does not we push the current bracket onto the stack

//If at the end the stack is empty that means we have matched each backet up with it's opposite

function balancedBrackets(string) {
  let openingBrackets = {
    '(': true,
    '[': true,
    '{': true,
  };
  let closingBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  let stack = [];
  for (let element of string) {
    if (element in openingBrackets) {
      stack.push(element);
    } else if (element in closingBrackets) {
      if (stack[stack.length - 1] === closingBrackets[element]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
