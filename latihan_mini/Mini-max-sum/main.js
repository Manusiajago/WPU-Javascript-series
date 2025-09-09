// min max sum hackerRank

function minimaxsum(arr) {
    // membuat total sum
    const totalSum = arr.reduce((sum, num) => {
        return sum + num
    })

    //mencari min
    const min = Math.min(...arr);

    //mencari max
    const max = Math.max(...arr);

    //mencari min sum
    const minSum = totalSum - max;

    //mencari max sum
    const maxSum = totalSum - min;

    console.log(minSum, maxSum);

}


minimaxsum([1, 2, 3, 4, 5]); 