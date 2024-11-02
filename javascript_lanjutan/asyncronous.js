// Fungsi asynchronous untuk menunggu data dari API menggunakan fetch
async function dapatkanData() {
    try {
        // Simulasi permintaan jaringan menggunakan fetch
        const response = await fetch('https://api.example.com/data')

        //parsing data ke json
        const data = await response.json()

        console.log(`data yang diterima: ${data}`)

    } catch (e) {
        console.error('Terjadi kesalahan:', e)
    }
};

// console.log('sebelum memanggil fungsi async');
// dapatkanData();
// console.log('sesudah memanggil fungsi async');

console.log('langkah satu memuat proses');

setTimeout(() => {
    console.log('langkah kedua memuat data');
}, 2000);

console.log("langkah ke tiga memuat data");

// latihan 1 ambil data users.json dan tampilkan
const url = './users.json';

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('network error')
        }

        return response.json();
    })
    .then((userData) => {
        userData.forEach((data) => {
            console.log("ini data nama user : ", data.name)
        })
        console.log('User data : ', userData);

    })
    .catch((err) => {
        console.error("Error : ", err)
    })

const jsonUrl = './products.json';

fetch(jsonUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network error: ')
        }

        return response.json();
    })

    .then((product) => {
        let totalStock = 0;
        product.forEach((p) => {
            totalStock += p.stock;
        })

        console.log("Total stock produk : ", totalStock)

    })
    .catch((err) => {
        console.log('Error: ', err);
    })

// Latihan 3: Menampilkan Cuaca dengan Suhu di Atas 25 Derajat
const weatherUrl = './weather.json';

fetch(weatherUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network Error :  ', err);
        }

        return response.json();
    })
    .then((dataWeather) => {
        console.log('data cuaca : ', dataWeather);
        dataWeather.forEach((temperature) => {
            const temp = temperature.temperature
            if (temp > 25) {
                console.log(' ini adalah suhu diatas 25 derajat : ', temp);
            }
        })
    })
    .catch((err) => {
        console.error(err);
    })

