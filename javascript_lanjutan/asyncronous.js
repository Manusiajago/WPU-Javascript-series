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

