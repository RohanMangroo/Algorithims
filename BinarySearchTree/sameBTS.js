/**
 * Give 2 arrays that are supposed to represent binary search tress, write a function that checks if these two binary search tress would be the exact same
 *
 * Must do this without actually creating the BSTs. If you could create the BST you could simple create them then traverse them in the same fashion, log nodes values into an array then check if the two arrays are equal.
 *
 * There are two ways of solving this. Both ways involve leveraging the BST property, meaning that every node to the left must be strictly smaller and every node to the right must be greater the or equal to.
 *
 * The first way would be to check the first element in each array, if they are not equal then we know right away that we do not have equal BSTs because the first node in the array would be the current node we are at.
 *
 * Once we check the first node we can then FILTER out all nodes that are less then the currentNode and the nodes that are greater than or equal the currentNode. That will give us the values that SHOULD be in the left and right subtrees. The we can recursively call the function with two new arrays, being the left part of arrayOne and the left part of arrayTwo, right part of arrayOne and the right part of arrayTwo. If we hit empty arrays for both arrayOne and arrayTwo we know we have validated that part of the tree.
 *
 *
 * The second approach is similar to the first except we do not send down newly created arrays in the recursion function. Instead we use a min max range to find the next potential node to check.
 */

function sameBsts(arrayOne, arrayTwo) {
  return validate(arrayOne, arrayTwo, -Infinity, Infinity, 0, 0);
}

function validate(arrayOne, arrayTwo, min, max, posOne, posTwo) {
  // console.log(`arrayOne: ${arrayOne[posOne]}, arrayTwo: ${arrayTwo[posTwo]}`)
  if (arrayOne[posOne] !== arrayTwo[posTwo]) return false;
  if (posOne === null && posTwo === null) return true;

  const arrayOneLeftPos = findNewPos(arrayOne, min, arrayOne[posOne], posOne);
  const arrayOneRightPos = findNewPos(arrayOne, arrayOne[posOne], max, posOne);
  const arrayTwoLeftPos = findNewPos(arrayTwo, min, arrayTwo[posTwo], posTwo);
  const arrayTwoRightPos = findNewPos(arrayTwo, arrayTwo[posTwo], max, posTwo);

  const validateLeft = validate(
    arrayOne,
    arrayTwo,
    min,
    arrayOne[posOne],
    arrayOneLeftPos,
    arrayTwoLeftPos
  );
  const validateRight = validate(
    arrayOne,
    arrayTwo,
    arrayOne[posOne],
    max,
    arrayOneRightPos,
    arrayTwoRightPos
  );

  return validateLeft && validateRight;
}

function findNewPos(array, min, max, currPos) {
  for (let i = currPos + 1; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue >= min && currentValue < max) {
      return i;
    }
  }

  return null;
}
