// contoh promise
// const tampilkanPesan = ((pesan) => {
//     console.log(pesan)
// })


// let myPromise = new Promise((resolve, reject) => {
//     let sukses = true

//     if (sukses) {
//         resolve(`Berhasil Login...`)
//     } else {
//         reject(`Gagal login`)
//     }
// })

// myPromise
//     .then((value) => {
//         tampilkanPesan(value);
//     })
//     .catch((err) => {
//         tampilkanPesan(value)
//     })

// contoh penggunaan promise ke 2

const showMessage = ((message) => {
    console.log(`Hasil: ${message}`)
})

let myPromise = new Promise((resolve, reject) => {
    let succes = true;

    if (succes) {
        console.log(`Sedang di proses...`)
        setTimeout(() => {
            resolve(`Berhasil Login`)
        }, 3000)
    } else {
        setTimeout(() => {
            reject(`Gagal Login...`)
        }, 3000)
    }
})

myPromise
    .then((value) => {
        showMessage(value);
    })
    .catch((err) => {
        showMessage(err)
    })