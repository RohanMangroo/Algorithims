//Given an array determine if the array is monotonic or not. A monotonic array is either strictly non-increasing or strictly non-decreasing

//This is an interesting problem. To solve it we can establish 2 triggers that we can return
//The 2 triggers are 'decreasing' and 'increasing'...We set them both equal to true
//We now scan the array and if we encounter a relationship(increasing or decreasing) we negate the opposite trigger relationship

//For example if we establish that the 0th element is greater than the 1st element, we set increasing to false because the relationship we have just established is that of 'decreasing'.

//In the end we return 'increasing OR dreasing'...Why? because if both get negated then we have an array that both increases and decreases at some point, meaning it is not monotonic, but if one of them maintains it's 'true' value that means we have a monotonic array because that value was never negated

//Great problem for learning how to account for multiple situations

function isMonotonic(array) {
  if (array.length <= 1) return true;

  let decreasing = true;
  let increasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i + 1]) continue;

    if (array[i] < array[i - 1]) increasing = false;
    if (array[i] > array[i - 1]) decreasing = false;
  }

  return increasing || decreasing;
}
