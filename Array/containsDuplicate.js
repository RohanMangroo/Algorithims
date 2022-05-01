var containsDuplicate = function (nums) {
  const feq = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (currentNum in feq) return true;
    else feq[currentNum] = true;
  }
  return false;
};
