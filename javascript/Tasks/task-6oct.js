// // Create an array of numbers and add numbers to this array and Keep adding numbers to the array in the even number format
// let numbers = [];
// for (let i = 2; i <= 10; i += 2) {
//   numbers.push(i);
// }
// console.log("numbers:", numbers);

// // filter the numbers divisible by 10 from a given array Eg: [10,25,67,45,70,36,50]
// let array = [10, 25, 67, 45, 70, 36, 50];
// let filteredArray = array.filter((num) => num % 10 === 0);
// console.log("filtered array:", filteredArray);

// // Create an array of square of given number eg: [3,4,5,6,7]
// let nums = [3, 4, 5, 6, 7];
// let squares = nums.map((num) => num * num);
// console.log("squares:", squares);

// // Write a function to reverse an array in-place (without creating a new array).
// function reverseArray(arr) {
//   for (let i = 0; i < arr.length / 2; i++) {
//     [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
//   }
//   return arr;
// }
// console.log("reversed array:", reverseArray([1, 2, 3, 4, 5]));

// // Write a function to find the difference between two arrays (elements in one array but not in the other).
// function arrayDifference(arr1, arr2) {
//   return arr1.filter((num) => !arr2.includes(num));
// }
// console.log("array difference:", arrayDifference([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));

// TASK
var nestedArray =[
    [5,6,7,-2],
    [-5,-6,-7],
    [8,9,10],
    [3,5,2,1,4],
    [-3,5,2,1,],
    [4,2,6,8],
]

//1. Find Maximum: Write a function to find the maximum number in a nested array of integers.
function maximum(arr) {
    var max = arr[0][0];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
    }
    return max;
}
console.log("Maximum:", maximum(nestedArray));

//2. Calculate Average: Create a function to calculate the average of all numbers in a nested array.
function average(arr) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}
console.log("Average:", average(nestedArray));

//3. Count Negative Numbers: Implement a function that counts the number of negative numbers in a nested array.
function countNegatives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < 0) {
                count++;
            }

        }
    }
    return count;
}
console.log("Count of negative numbers:", countNegatives(nestedArray));

//4. Subarray Sums: Write a function that returns an array of sums of each subarray within the nested array.
function subarraySums(arr) {
    var sums = [];
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        for (var j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        sums.push(sum);
    }
    return sums;
}
console.log("Subarray sums:", subarraySums(nestedArray));

//5. Sort Subarrays: Implement a function that sorts each subarray in a nested array of numbers.

//6. Flatten Nested Array: Write a function to flatten a nested array to a single-level array.

//7. Remove Duplicates: Create a function that removes duplicate elements from the nested array.

//8. Reverse Subarrays: Implement a function to reverse each subarray within the nested array.

//9. Filter Even Numbers: Write a function to filter out all even numbers from the nested array.

//10. Find Longest Subarray: Create a function that returns the longest subarray within the nested array.