//Classic staircase traversal problem

//Essentially this quesion is asking how many ways can you make a given target number with a range of numbers
//In this example we are ask to make the number 4 with a range of [1, 2]

//So to solve this I loop through the range array and keep track of a currentSum variable
//If the currentSum is less than the target that means I still need to add some numbers so I recursively call upon the array until I have a currentSum that is equal to the target number at which point I will increase a global count by 1

function staircaseTraversal(height, maxSteps) {
  const stepsArray = [];
  for (let i = 1; i < maxSteps + 1; i++) {
    stepsArray.push(i);
  }

  const result = { count: 0 };
  helperFunction(height, stepsArray, 0, result);
  return result.count;
}

function helperFunction(height, stepsArray, currentSum, result) {
  for (let i = 0; i < stepsArray.length; i++) {
    if (currentSum === height) {
      result.count++;
      return;
    }

    if (currentSum < height)
      helperFunction(height, stepsArray, currentSum + stepsArray[i], result);
    else return;
  }
}

function staircaseTraversal(height, maxSteps) {
  const arrayOfWays = [1];
  let windowStart = 0;
  let windowEnd = 0;
  let windowSum = 1;

  for (let i = 1; i <= height; i++) {
    const windowLength = windowEnd - windowStart + 1;
    if (windowLength < maxSteps) {
      windowEnd++;
      arrayOfWays.push(windowSum);
      windowSum += arrayOfWays[arrayOfWays.length - 1];
    } else {
      arrayOfWays.push(windowSum);
      windowSum += arrayOfWays[arrayOfWays.length - 1];
      windowSum -= arrayOfWays[windowStart];
      windowStart++;
      windowEnd++;
    }
  }

  return arrayOfWays[arrayOfWays.length - 1];
}
