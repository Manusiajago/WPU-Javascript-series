// divisible sum pairs hackerRank
function divisibleSumPairs(n, k, arr) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((arr[i] + arr[j]) % k === 0) {
                count++
            }
        }
    }

    return count;
}




console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));