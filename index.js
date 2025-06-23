// Question 1
// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]
function sortDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
const inputArray = [1, 2, 4, 3, 5, 3, 2, 1];
console.log(sortDescending(inputArray)); // Output: [5, 4, 3, 3, 2, 2, 1, 1]

// Question 2
// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1
function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;

    let maxSum = 0;
    let tempSum = 0;

    // Calculate the initial sum of the first subarray
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    // Slide the window over the array
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

// Example usage:
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // Output: 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // Output: 5

// Question 3
// 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
// Input :
// {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// Output: 6
 
// Input:
// {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 4}, ee: 'car'}
// };
// Output: 12
function sumEvenNumbers(obj) {
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += sumEvenNumbers(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }

    return sum;
}

// Example usage:
const nestedObject1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
};

const nestedObject2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 4}, ee: 'car'}
};

console.log(sumEvenNumbers(nestedObject1)); // Output: 6
console.log(sumEvenNumbers(nestedObject2)); // Output: 12

module.exports = {
    sortDescending,
    maxSubarraySum,
    sumEvenNumbers
}