//Given an array of numbers return the powerset of that array
//A power set is the set of all subsets

//To solve this problem use recursion

//We will scan through the given array, at every point we will push the current element to a currentArray, then recursively call down
//When we call down will will pass a new array AND a new currentArray
//The new array will be the a slice of our given array
//The currentArray will be a completly NEW array(using .concat)

//I tried using a startPosition indead of having to slice but it didn't work, I'll have to go over this again

function powerset(array) {
  return helperFunction(array, [[]], []);
}

function helperFunction(array, result, currentArray) {
  for (let i = 0; i < array.length; i++) {
    const newArray = currentArray.concat(array[i]);
    result.push(newArray);
    helperFunction(array.slice(i + 1), result, newArray);
  }

  return result;
}
