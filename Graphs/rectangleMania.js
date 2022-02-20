function rectangleMania(coords) {
  const result = { count: 0 };
  const coordinatesTable = createCoordinatesTable(coords);

  for (let i = 0; i < coords.length; i++) {
    const currentCoordinate = coords[i];
    findRectangle(
      currentCoordinate,
      coordinatesTable,
      currentCoordinate,
      result,
      'up',
      0
    );
  }

  return result.count;
}

function findRectangle(
  currentCoordinate,
  coordinatesTable,
  origin,
  result,
  direction,
  count
) {
  if (count === 4 && origin === currentCoordinate) {
    // console.log(`origin: ${origin}, currentCoordinate: ${currentCoordinate}, count: ${count}, result: +1`)
    return result.count++;
  } else if (count === 4 && origin !== currentCoordinate) return;

  const directionArray = coordinatesTable[`${currentCoordinate}`][direction];

  // console.log(`origin: ${origin}, currentCoordinate: ${currentCoordinate}, count: ${count}, result: ${result.count}, directionArray: ${directionArray}`);

  for (let i = 0; i < directionArray.length; i++) {
    const nextCoordinate = directionArray[i];
    const nextDirection = getNextDirection(direction);
    findRectangle(
      nextCoordinate,
      coordinatesTable,
      origin,
      result,
      nextDirection,
      count + 1
    );
  }
}

function createCoordinatesTable(coords) {
  const table = {};
  for (let i = 0; i < coords.length; i++) {
    const iCoordinate = coords[i];
    table[`${iCoordinate}`] = { up: [], down: [], left: [], right: [] };
    for (let j = 0; j < coords.length; j++) {
      const jCoordinate = coords[j];
      if (iCoordinate === jCoordinate) continue;
      const direction = findDirection(iCoordinate, jCoordinate);
      if (direction) {
        table[`${iCoordinate}`][direction].push(jCoordinate);
      }
    }
  }
  return table;
}

function findDirection(pointOne, pointTwo) {
  const [x1, y1] = pointOne;
  const [x2, y2] = pointTwo;

  if (x1 === x2 && y1 < y2) return 'up';
  if (x1 === x2 && y1 > y2) return 'down';
  if (y1 === y2 && x1 < x2) return 'right';
  if (y1 === y2 && x1 > x2) return 'left';

  return null;
}

function getNextDirection(currentDirection) {
  if (currentDirection === 'up') return 'right';
  if (currentDirection === 'right') return 'down';
  if (currentDirection === 'down') return 'left';
  if (currentDirection === 'left') return 'up';
}
