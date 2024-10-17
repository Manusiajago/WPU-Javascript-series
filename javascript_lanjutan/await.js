// memanggil API OMDB menggunakan Async await

// membuat async function
// async function fetchMovies() {
//     // menampung url omdb dalam sebuah variable
//     const myApiUrl = 'http://www.omdbapi.com/?apikey=aedf78e8&s=harry potter';

//     // error handling menggunakan try catch
//     try {
//         //tangkap endpoints
//         const response = await fetch(myApiUrl);

//         //menunggu response dari fetch my apiurl
//         if (!response.ok) {
//             throw new Error(`Network error not responding`)
//         }

//         //menunggu parsing data ke json
//         const data = await response.json()

//         //data sebelum di filter
//         console.log("data sebelum di filter: ", data)

//         //cek apakah API valid
//         if (data.Response === "False") {
//             throw new Error(data.Error);
//         }

//         // filter film berdasarkan tahun
//         const filteredMovies = data.Search.filter((m) => {
//             return parseInt(m.Year) > 2001
//         })
//         //film yg sudah di filter
//         console.log("data yang sudah di filter: ", filteredMovies);
//     } catch (e) {
//         //menangkap dan menampilkan error
//         console.log(e)
//     }
// }

// //panggil fungsinya
// fetchMovies();


// memanggil API OMDB menggunakan Async await

// membuat async function
// async function getMovies() {
//     // menampung url omdb dalam sebuah variable
//     const myApiUrl = 'http://www.omdbapi.com/?apikey=aedf78e8&s=harry potter';

//     // error handling menggunakan try catch
//     try {
//         // tangkap endpoints
//         const response = await fetch(myApiUrl);

//         // cek apakah response OK
//         if (!response.ok) {
//             const message = `Error is not valid response ${response.status}`;
//             throw new Error(message);
//         }

//         //menunggu parsing data ke json
//         const data = await response.json();

//         // cek data film sebelum di filter
//         console.log("data sebelum di filter: ", data)

//         //cek apakah API valid 
//         if (data.Response === "False") {
//             throw new Error(data.Response);
//         }

//         // filter film berdasarkan tahun
//         const filteredMovies = data.Search.filter((e) => {
//             return parseInt(e.Year) > 2001
//         });

//         // tampilkan film yg sudah di filter
//         console.log("Data berhasil di filter : ", filteredMovies);

//     } catch (e) {
//         console.log(e);
//     }
// }

// //panggil fungsinya
// getMovies()

const coba = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('selesai');
    }, 2000)
})

coba
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log('data berhasil dikirim')
    })

// coba mengingat kembali promise
const cekBukuTersedia = (judulBuku) => {
    return new Promise((resolve, reject) => {
        const bukuTersedia = ['Harry Poter', 'Spiderman', 'ironman', 'batman'];
        setTimeout(() => {

            if (bukuTersedia.includes(judulBuku)) {
                resolve(`${judulBuku} tersedia di database`);
            } else {
                reject(`${judulBuku} tidak tersedia di database`);
            }
        }, 2000)
    })
}

// cekBukuTersedia('Harry Poter')
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log(`buku berhasil ditemukan`)
//     })

// pemanggilan menggunakan async await

async function dapatkanBuku(judulBuku) {
    try {
        // menunggu hasil dari promise cekBukuTersedia
        const message = await cekBukuTersedia(judulBuku);
        //menampilkan hasil jika buku tersedia
        console.log(message);
    } catch (error) {
        console.log(error); // menangani kesalahan jika buku tidak tersedia

    } finally {
        console.log(`buku berhasil ditemukan`); // menampilkan pesan jika buku ditemukan
    }
}

//memanggil fungsi async beserta dengan parameter buku yg ingin di cetak
dapatkanBuku('Harry Poter')
dapatkanBuku('spiderman')
dapatkanBuku('batman')







//menunggu response dari fetch my apiurl

//menunggu parsing data ke json

//data sebelum di filter

//cek apakah API valid

// filter film berdasarkan tahun algoritma sendiri

// tampilkan film yg sudah di filter

//menangkap dan menampilkan error hints * catch


//panggil fungsinya