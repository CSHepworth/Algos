const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    var newarr = [];
    var longestarr = [];
    if (arr1.length > arr2.length) {
        longestarr = arr1;
    }
    else {
        longestarr = arr2;
    }
    for (var i = 0; i < longestarr.length; i++) {
        if (arr1[i] != null) {
            newarr.push(arr1[i]);
        }
        if (arr2[i] != null) {
            newarr.push(arr2[i]);
        }
    }
    return newarr;
}

console.log(interleaveArrays(arrA4, arrB4));