//Given two arrays of same length return a boolean if each array can be ordered in such a way that all numbers in one array will be greater than their coresponding number in the other array

//Meaning arrayOne[i] > arrayTwo[i]

//To solve this problem sort both arrays. Determine which position will be set up as the greater array and see if that holds up through the entire array

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  //Ternery to establish which is the backRow(greater array) and which is the frontRow(lesser array)
  const backRow =
    redShirtHeights[0] > blueShirtHeights[0]
      ? redShirtHeights
      : blueShirtHeights;
  const frontRow =
    redShirtHeights[0] < blueShirtHeights[0]
      ? redShirtHeights
      : blueShirtHeights;

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (backRow[i] <= frontRow[i]) return false;
  }
  return true;
}
