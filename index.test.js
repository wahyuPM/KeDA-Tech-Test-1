const { sortDescending, maxSubarraySum, sumEvenNumbers } = require('./index');

describe('sortDescending', () => {
    test('should sort the array in descending order', () => {
        const inputArray = [1, 2, 4, 3, 5, 3, 2, 1];
        const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];
        expect(sortDescending(inputArray)).toEqual(expectedOutput);
    });
});

describe('maxSubarraySum', () => {
    test('should return the maximum sum of a subarray with given length', () => {
        expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
        expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
        expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    });

    test('should return null if subarray length is greater than array length', () => {
        expect(maxSubarraySum([1, 2, 3], 4)).toBeNull();
    });
});

describe('sumEvenNumbers', () => {
    test('should return the sum of all even numbers in a nested object', () => {
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

        expect(sumEvenNumbers(nestedObject1)).toBe(6);
        expect(sumEvenNumbers(nestedObject2)).toBe(12);
    });
});