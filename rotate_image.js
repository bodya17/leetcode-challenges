// https://leetcode.com/problems/rotate-image/description/

// You are given an n x n 2D matrix representing an image.
// Rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place,
// which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

function swap(matrix, [x1, y1], [x2, y2]) {
    matrix[x1][y1] += matrix[x2][y2]
    matrix[x2][y2] = matrix[x1][y1] - matrix[x2][y2]
    matrix[x1][y1] -= matrix[x2][y2]
}

function rotate(matrix, min, max) {
    const n = max
    debugger;
    for (var i = min; i < max; i++) {
        swap(matrix, [min, n - i + min], [i, min])
        swap(matrix, [i, min], [n, i])
        swap(matrix, [n, i], [n - i + min, n])
    }
    if (max - min > 1)
        rotate(matrix, min + 1, max - 1)
}

/////////////////////
////             ////
////   Testing   ////
////             ////
/////////////////////

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// const matrix = [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16]
// ]

// const matrix = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5]
// ]

// const matrix = [
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6]
// ]

const matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
]

// const matrix = [
//     [1, 2],
//     [3, 4]
// ]

// rotate(matrix, 0, matrix.length - 1)
rotate(matrix, 1, 2)

console.log(matrix)


