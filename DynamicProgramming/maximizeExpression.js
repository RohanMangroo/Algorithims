function maximizeExpression(array) {
  if (array.length < 4) return 0;

  const arrayA = new Array(1).fill(array[0]);
  const arrayAB = new Array(1).fill(-Infinity);
  const arrayABC = new Array(2).fill(-Infinity);
  const arrayABCD = new Array(3).fill(-Infinity);

  for (let i = 1; i < array.length; i++) {
    let currentMax = Math.max(arrayA[i - 1], array[i]);
    arrayA.push(Math.max(currentMax));
  }

  for (let i = 1; i < array.length; i++) {
    let currentMax = Math.max(arrayA[i - 1] - array[i], arrayAB[i - 1]);
    arrayAB.push(currentMax);
  }

  for (let i = 2; i < array.length; i++) {
    let currentMax = Math.max(arrayAB[i - 1] + array[i], arrayABC[i - 1]);
    arrayABC.push(currentMax);
  }

  for (let i = 3; i < array.length; i++) {
    let currentMax = Math.max(arrayABC[i - 1] - array[i], arrayABCD[i - 1]);
    arrayABCD.push(currentMax);
  }
  console.log(arrayA);
  console.log(arrayAB);
  console.log(arrayABC);
  console.log(arrayABCD);
  return arrayABCD[arrayABCD.length - 1];
}
