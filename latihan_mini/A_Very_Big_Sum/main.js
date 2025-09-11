// A very Big Sum hackerRank

// jumlahkan semua bilangan ini
const myArr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(arr) {
    let sum = 0;

    // loop 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(aVeryBigSum(myArr));