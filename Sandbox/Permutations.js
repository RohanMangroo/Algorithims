const array = [1, 2, 3, 4];

// function getPermutaions(array, currentPerm = '', max = { num: -Infinity }) {
//   if (currentPerm.length === 4 && !array.length) {
//     const currentPermNum = Number(currentPerm);
//     if (currentPermNum > max.num) max.num = currentPermNum;
//     return;
//   }
//   for (let i = 0; i < array.length; i++) {
//     const newPerm = currentPerm.concat([array[i]]);
//     const newArray = array.slice(0, i).concat(array.slice(i + 1, array.length));
//     getPermutaions(newArray, newPerm, max);
//   }

//   return max.num;
// }

// console.log(getPermutaions(array));

console.log(Number(`${array[0]}${array[1]}`));
//**
 */