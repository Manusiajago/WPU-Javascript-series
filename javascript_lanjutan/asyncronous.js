// // Fungsi asynchronous untuk menunggu data dari API menggunakan fetch
// async function dapatkanData() {
//     try {
//         // Simulasi permintaan jaringan menggunakan fetch
//         const response = await fetch('https://api.example.com/data')

//         //parsing data ke json
//         const data = await response.json()

//         console.log(`data yang diterima: ${data}`)

//     } catch (e) {
//         console.error('Terjadi kesalahan:', e)
//     }
// };

// // console.log('sebelum memanggil fungsi async');
// // dapatkanData();
// // console.log('sesudah memanggil fungsi async');

// console.log('langkah satu memuat proses');

// setTimeout(() => {
//     console.log('langkah kedua memuat data');
// }, 2000);

// console.log("langkah ke tiga memuat data");

// // latihan 1 ambil data users.json dan tampilkan
// const url = './users.json';

// fetch(url)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('network error')
//         }

//         return response.json();
//     })
//     .then((userData) => {
//         userData.forEach((data) => {
//             console.log("ini data nama user : ", data.name)
//         })
//         console.log('User data : ', userData);

//     })
//     .catch((err) => {
//         console.error("Error : ", err)
//     })

// const jsonUrl = './products.json';

// fetch(jsonUrl)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Network error: ')
//         }

//         return response.json();
//     })

//     .then((product) => {
//         let totalStock = 0;
//         product.forEach((p) => {
//             totalStock += p.stock;
//         })

//         console.log("Total stock produk : ", totalStock)

//     })
//     .catch((err) => {
//         console.log('Error: ', err);
//     })

// // Latihan 3: Menampilkan Cuaca dengan Suhu di Atas 25 Derajat
// const weatherUrl = './weather.json';

// fetch(weatherUrl)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Network Error :  ', err);
//         }

//         return response.json();
//     })
//     .then((dataWeather) => {
//         console.log('data cuaca : ', dataWeather);
//         dataWeather.forEach((temperature) => {
//             const temp = temperature.temperature
//             if (temp > 25) {
//                 console.log(' ini adalah suhu diatas 25 derajat : ', temp);
//             }
//         })
//     })
//     .catch((err) => {
//         console.error(err);
//     })

// // Latihan 4: Menghitung Total Penjualan per Transaksi

// const transactionApi = './sales.json'

// fetch(transactionApi)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Network Error');
//         }
//         return response.json()
//     })
//     .then((dataTransaction) => {
//         let result = 0;
//         dataTransaction.forEach((datas) => {

//             const getTransaction = datas.total_amount;
//             result += getTransaction;

//             if (datas.total_amount > 1000000) {
//                 console.log('Ini adalah barang terlaris : ', datas.transaction_id, 'dengan nominal harga : ', datas.total_amount);
//             }
//         })


//         console.log('Total transaksi : ', result);

//     })
//     .catch((err) => {
//         console.log(err)
//     })



//latihan setTimeout asynchronous dalam javascript

// catatan !
// setTimeout(fungsiYangAkanDijalankan, delay, argumen1, argumen2, ...);
// ----

// console.log('Mulai')

// setTimeout(() => {
//     console.log('Dijalankan setelah 5 detik')
// }, 5000)

// console.log('selesai');

// function menyapa(nama) {
//     console.log(`Halo ${nama}`)
// }

// setTimeout(menyapa, 3000, 'Egal');

// let waktuBerjalan = setTimeout(() => {
//     console.log('Timer telah berjalan tunggu 3 detik')
// }, 3000)


// clearTimeout(waktuBerjalan);
// console.log('Timer dibatalkan');


// hitung mundur

// function hitungMundur(waktu) {
//     let time = waktu;

//     if (time > 0) {
//         setTimeout(() => {
//             hitungMundur(time - 1);
//         }, 3000)

//     } else {
//         console.log('Waktu habis');
//     }

//     return time;
// }

// const execute = hitungMundur(10);
// console.log(execute);


// function hitung() {
//     for (let i = 0; i < 100; i++) {
//         setTimeout(() => {
//             console.log`Hitungan ke : ${i}`
//         }, i * 2000)
//     }

// }

// console.log(hitung());

function PanggilAPI(endpoint, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Mengambil data dari ${endpoint}`);
            resolve();
        }, delay);
    })
}

PanggilAPI("https://api.contoh.com/data1", 2000).then(console.log);
PanggilAPI("https://api.contoh.com/data2", 1000).then(console.log)
