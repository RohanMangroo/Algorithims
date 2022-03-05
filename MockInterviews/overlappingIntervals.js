const array = [
  { start: 10, end: 12 },
  { start: 11, end: 14 },
  { start: 15, end: 20 },
  { start: 16, end: 19 },
  { start: 2, end: 5 },
];

function mergeOverlaps(array) {
  array.sort((a, b) => a.start - b.start);
  const result = [array[0]];

  for (let i = 1; i < array.length; i++) {
    const currentInterval = result[result.length - 1];
    const { start, end } = array[i];

    if (start > currentInterval.end) {
      result.push(array[i]);
    } else if (end >= currentInterval.end) {
      result[result.length - 1] = { start: currentInterval.start, end: end };
    } else if (end < currentInterval.end) {
      result[result.length - 1] = {
        start: currentInterval.start,
        end: currentInterval.end,
      };
    }
  }

  return result;
}
