// diagonal difference latihan

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]


function diagonalDifference(matrix) {
    const n = matrix.length;
    let primary = 0;
    let secondary = 0;

    for (let i = 0; i < n; i++) {
        primary += matrix[i][i];
        secondary += matrix[i][n - i - 1];
    }

    return Math.abs(primary - secondary)
}

console.log(diagonalDifference(matrix));