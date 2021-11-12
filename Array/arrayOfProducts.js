//Given an array return another array of the same length where each element in the output array is a product of all the element in the given array

//To solve this problem we need to realize that the product of all elements in an array not including the the chosen element is the product of everything to it's left and the product to everything to it's right.

//So we use 2 for loops. First one to calculate the left products, going from left -> right. An the second to calculate the right products, going from right -> left.

//On the left side we'll have to start at the 1st index, becuase there is nothing to the left of the oth index, therefor the result[i] going right will be 1.
//On the right side we'll have to start at array.length - 2 becuase there is nothing to the right of the last index thereofr the result[i] going left will be unchanged.

//The idea is that we calculate both the left products and the right products and we combine the two to get a total product

function arrayOfProducts(array) {
  const result = new Array(array.length).fill(1);

  let currentProduct = 1;
  for (let i = 1; i < array.length; i++) {
    result[i] = currentProduct * array[i - 1];
    currentProduct = result[i];
  }

  currentProduct = 1;
  for (let i = array.length - 2; i >= 0; i--) {
    const rightProduct = currentProduct * array[i + 1];
    result[i] = rightProduct * result[i];
    currentProduct = rightProduct;
  }

  return result;
}
