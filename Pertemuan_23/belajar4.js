// contoh asynchronous

setTimeout(() => {
    const hasil = perhitungan(10, 10);
    console.log(hasil)
}, 3000);

function perhitungan(sum1, sum2) {
    let hasil = sum1 + sum2;
    return hasil
}