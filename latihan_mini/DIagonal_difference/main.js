// diagonal difference

const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

function diagonalDifference(arr) {
    const n = arr.length
    let primary = 0;
    let secondary = 0;

    for (let i = 0; i < n; i++) {
        primary += arr[i][i];
        secondary += arr[i][n - i - 1];
    }

    return Math.abs(primary - secondary);
}


console.log(diagonalDifference(matrix));