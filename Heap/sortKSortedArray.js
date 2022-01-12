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
