// contoh promise ke 4

function tambah(x, y) {
    return new Promise((resolve, reject) => {
        console.log(`Sedang memproses...`)
        setTimeout(() => {
            if(typeof x !== 'number' || typeof y !== 'number'){
                reject(`Parameter harus berupa angka`)
            } else {
                resolve(x + y)
            }
        }, 2000)
    })
}

tambah(10 , 5)
    .then((val) => {
        console.log(`Hasilnya: ${val}`)
    })
    .catch((err) => {
        console.log(`Hasilnya: ${err}`)
    })