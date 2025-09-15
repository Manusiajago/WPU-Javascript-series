function tambah(a, b) {
    return new Promise((resolve, reject) => {
        // delay 2 detik
        setTimeout(() => {
            if(typeof a !== 'number' || typeof b !== 'number') {
                reject(`Parameter harus berupa angka`)
            }  else {
                resolve(a + b)
            }
        }, 2000)
    })
}

// pakai promise chaining
tambah(20, 20)
    // ditambah lagi
    .then((response1) => {
       return tambah(response1 , 10)
    })
    .then((result) => {
        console.log(result)
    })
   
// pakai async await
// async function proses() {
//     try{
//         console.log(`Sedang di proses...`)
//         let hasil = await tambah(10 ,8)
//         console.log(`Hasilnya adalah ${hasil}`)
//     } catch{
//         console.log(`Error`)
//     }
// }


// proses()