// pemanasan callback
// penambahan
function tambah(param1, param2) {
    return param1 + param2
}

function kurang(param1, param2) {
    return param1 - param2
}



function penjumlahan(param1, param2, operasi) {
    let hasil = 0;

    hasil = operasi(param1, param2)
    return hasil;
}


let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let hasil = penjumlahan(1, 2, tambah)

        // keluarkan dengan resolve
        resolve(hasil)
    }, 2000)
})

p.then((hasil) => {
    return hasil
})
    .then((val) => {
        value = penjumlahan(val, 3, tambah)
        return value;
    })
    .then((val) => {
        value = penjumlahan(val, 4, tambah)
        console.log(value)
    })