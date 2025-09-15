// contoh promise pada javaScript

let janji = new Promise((resolve, reject) => {
    //set kondisi awal true, ubah false kalo mau gagal
    let sukses = false

    //beri delay 2 detik
    setTimeout(() => {
        if (sukses) {
            resolve("Data berhasil diambil")
        } else {
            reject("Data gagal diambil")
        }
    }, 2000)
})


janji
    .then((berhasil) => {
        console.log(`Hasilnya: ${berhasil}`)
    })
    .catch((err) => {
        console.log(`Hasilnya: ${err}`)
    })
    .finally(() => {
        console.log('Proses selesai')
    })