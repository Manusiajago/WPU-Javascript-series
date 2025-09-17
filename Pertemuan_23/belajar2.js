// contoh callback
function tampilkanPesan(value) {
    console.log(`Hasilnya adalah: ${value}`)
}

function operasiTambah(sum1, sum2, tampilkanPesan) {
    let hasil = sum1 + sum2;
    tampilkanPesan(hasil)
}


operasiTambah(10, 10, tampilkanPesan)

