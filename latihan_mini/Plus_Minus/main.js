// Plus minus hackerRank 

const myArr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    const n = arr.length;
    let positiveCount = 0
    let negativeCount = 0
    let zeroCount = 0

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }


    // memanggil hasil dengan 6 angka di belakang koma
    console.log((positiveCount / n).toFixed(6));
    console.log((negativeCount / n).toFixed(6));
    console.log((zeroCount / n).toFixed(6));
}

plusMinus(myArr);