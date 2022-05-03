function longestConsecutive(nums) {
  const numsObj = createNumsObj(nums);
  let maxConsectiveLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (!(currNum - 1 in numsObj)) {
      let count = 1;
      while (currNum + 1 in numsObj) {
        currNum = currNum + 1;
        count++;
      }
      maxConsectiveLength = Math.max(maxConsectiveLength, count);
    }
  }
  return maxConsectiveLength;
}

function createNumsObj(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = true;
  }
  return obj;
}
