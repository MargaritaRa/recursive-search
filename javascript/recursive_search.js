// function recursiveSearch(arr, target) {
//   //  first check if the array is empty, if so. then the ans will be false
//   if (arr.length === 0){
//     return false;
//   }
//   // if the arr[0] is equal to the target, the function returns true
//   if (arr[0] === target) {
//     return true;
//   }
//   //  if the target is not the first element of the array, then the func calls itself recursivly passing in the rest of the arr.slice(1) as the new array to search
//   return recursiveSearch(arr.slice(1), target);
// }

// if (require.main === module) {
//   // add your own tests in here
//   console.log("Expecting: true");
//   console.log("=>", recursiveSearch([1, 2, 3], 2));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", recursiveSearch([3, 2, 1], 4));
// }

// module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution

  // What will this output?

function recursiveSearch(arr, target){

  if (arr.length === 0){
    return false;
  }

  if (arr[0] === target){
    return true;
  }

  return recursiveSearch(arr.slice(1), target);
}

let arr = [12, 4, 6, 9, 10, 15];
let target = 10;
let result = recursiveSearch(arr, target);
console.log(result);