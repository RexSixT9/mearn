// Linear Search:
// The linear search algorithm is a simple search algorithm that checks each element in a list sequentially until the desired element is found or the list ends. It has a time complexity of O(n), where n is the number of elements in the list.
// If the target element is found, the algorithm returns the index of the element; otherwise, it returns -1 to indicate that the element is not present in the list.

// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch([1, 2, 3, 4, 5], 4));
// console.log(linearSearch([1, 2, 3, 4, 5], 10));

// // Linear Search for Strings:
// function linearSearchString(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return null;
// }
// var rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// console.log(linearSearchString(rainbow, "indigo"));
// console.log(linearSearchString(rainbow, "black"));

// Binary Search:
// The binary search algorithm is an efficient search algorithm that works on sorted lists. It repeatedly divides the search interval in half, comparing the target value to the middle element of the list. If the target value is equal to the middle element, the search is successful. If the target value is less than the middle element, the search continues in the lower half of the list; otherwise, it continues in the upper half. The time complexity of binary search is O(log n), where n is the number of elements in the list.

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch([1, 2, 3, 4, 5], 4));
// console.log(binarySearch([1, 2, 3, 4, 5], 10));

// Print all the duplicate elements in an array
var arr = [10, 6, 7, 8, 10, 5, 7, 3, 5];
function duplicateElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log(arr[i]);
      }
    }
  }
}
duplicateElements(arr);

//  Find common elements in both arrays
var arr1 = [5, 7, 8, 3];
var arr2 = [7, 8, 2, 1];
function commonElements(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(arr1[i]);
      }
    }
  }
}
commonElements(arr1, arr2);