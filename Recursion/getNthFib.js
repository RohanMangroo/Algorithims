//Find the nth fibonacci number.
//Two ways to do this, iterively or recursively
//The recursive approach just goes down to the base cases and then returns up with those calculated values
//The iterative approach treats the sequence as an already built number line where you move pointers along

function getNthFib(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  const numTimes = n - 2;
  let numOne = 0;
  let numTwo = 1;
  let numThree;

  for (let i = 0; i < numTimes; i++) {
    numThree = numOne + numTwo;
    numOne = numTwo;
    numTwo = numThree;
  }

  return numThree;
}

function getNthFib(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return getNthFib(n - 1) + getNthFib(n - 2);
}
