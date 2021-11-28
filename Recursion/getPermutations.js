//Given an array return all the permutations
//A permutation is a set of the same length that has a unique order of the elements

//To solve this problem use recursion
//What we are doing is creating current permutations by recursively calling down
//When we call down we pass a new slice of our given array, this slice will not include the current element
//We will also pass down a permutations array that will be passed as a new reference

function getPermutations(array) {
  return helperFunction(array, [], [], array.length);
}

function helperFunction(array, result, currentPerm, length) {
  for (let i = 0; i < array.length; i++) {
    const newPerm = currentPerm.concat(array[i]);

    if (newPerm.length === length) {
      result.push(newPerm);
      return result;
    }

    const newArray = array.slice(0, i).concat(array.slice(i + 1));
    helperFunction(newArray, result, newPerm, length);
  }

  return result;
}
