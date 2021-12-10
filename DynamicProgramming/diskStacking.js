function diskStacking(disks) {
  disks.sort((a, b) => a[2] - b[2]);
  const maxHeights = disks.map((disk) => disk[2]);
  const sequence = disks.map((disk) => null);
  const start = { index: disks.length - 1 };

  for (let i = 1; i < disks.length; i++) {
    for (let j = 0; j < i; j++) {
      const update = compareDisks(disks[i], disks[j]);
      if (update) updateInfo(disks, i, j, sequence, maxHeights, start);
    }
  }
  return genSequence(disks, sequence, start.index);
}

function compareDisks(currentDisk, otherDisk) {
  const [currWidth, currDepth, currHeight] = currentDisk;
  const [otherWidth, otherDepth, otherHeight] = otherDisk;

  return (
    currWidth > otherWidth && currDepth > otherDepth && currHeight > otherHeight
  );
}

function updateInfo(disks, i, j, sequence, maxHeights, start) {
  const currentHeight = disks[i][2] + maxHeights[j];
  if (currentHeight > maxHeights[i]) {
    maxHeights[i] = currentHeight;
    sequence[i] = j;
  }
  if (currentHeight > maxHeights[start.index]) {
    start.index = i;
  }
}

function genSequence(disks, sequence, index) {
  const result = [];
  while (index !== null) {
    result.unshift(disks[index]);
    index = sequence[index];
  }

  return result;
}
