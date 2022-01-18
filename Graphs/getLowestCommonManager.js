function getLowestCommonManager(topManager, reportOne, reportTwo) {
  const result = { found: false, commonManager: null };
  helperFunction(topManager, reportOne, reportTwo, result);
  return result.commonManager;
}

function helperFunction(root, nodeOne, nodeTwo, result) {
  if (!result.found) {
    let newCount = 0;
    const children = root.directReports;

    children.forEach((child) => {
      newCount += helperFunction(child, nodeOne, nodeTwo, result);
    });

    if (root === nodeOne || root === nodeTwo) newCount += 1;

    if (newCount === 2) {
      result.found = true;
      result.commonManager = root;
      return;
    } else return newCount;
  }
}
