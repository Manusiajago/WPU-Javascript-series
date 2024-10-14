// // //buat fungsi menyapa dengan setTimeout beberapa detik
// // function menyapa(nama, sapa) {
// //     console.log(`memulai proses`)
// //     //simulasi operasi asyncronous dengan setTimeout
// //     setTimeout(() => {
// //         console.log(`halo ${nama}`)

// //         // panggil fungsi callback setelah sapa
// //         sapa()
// //     }, 2000)
// // }

// // function selesaiSapa() {
// //     console.log("selesai sapa")
// // }


// // // Memanggil fungsi greet dan mengirimkan fungsi selesai sebagai callback
// // const eksekusi = menyapa("Egal", selesaiSapa);

// // console.log(eksekusi);

// // // latihan ambil data mahasiswa.json 
// // //1. buat fungsi mengambil data mahasiswa
// // function getDataMahasiswa() {
// //     //menggunakan fetch untuk mengambil data
// //     fetch('mahasiswa.json')
// //         .then(response => {
// //             if (!response.ok) {
// //                 throw new Error(`Error response`);
// //             }
// //             // convert data ke json
// //             return response.json();
// //         })
// //         .then(userData => {
// //             console.log('user data:', userData);
// //         })
// //         .catch(error => {
// //             console.log('error:', error);
// //         })
// // }

// // const get = getDataMahasiswa();

// // console.log(get);

// // // latihan 2 buat fungsi mengambil data dari matakuliah
// // function getMatakuliah() {
// //     // ambil data menggunakan fetch
// //     fetch('matakuliah.json')
// //         .then(response => {
// //             if (!response.ok) {
// //                 throw new Error(`Error response`);
// //             }
// //             // ubah data ke json
// //             return response.json();
// //         })
// //         .then(data => {
// //             const tampilkandata = document.getElementById('matakuliah-list');

// //             //kosongkan daftar sebelum menambahkan daftar baru
// //             tampilkandata.innerHTML = '';

// //             //looping data matakuliah dan menampilkannya di halaman menggunakan forEach
// //             data.matakuliah.forEach((element) => {
// //                 const li = document.createElement('li');
// //                 li.innerHTML = `<strong>${element.nama}</strong> - Dosen: ${element.dosen} (SKS: ${element.sks})`;
// //                 tampilkandata.appendChild(li);

// //                 const objectDosen = { dosen: element.dosen };
// //                 console.log(objectDosen);
// //             })
// //         })
// //         .catch(err => {
// //             console.log('Error : ', err);
// //         })
// // };

// // //panggil fungsi 
// // const panggil = getMatakuliah();

// // latihan callback menjumlahkan 2 angka

// function penjumlahan(a, b, callback) {
//     const hasilPenjumlahan = a + b;
//     callback(hasilPenjumlahan);

// }

// function tampilHasil(hasilPenjumlahan) {
//     console.log(`hasil ${hasilPenjumlahan}`);
// }

// penjumlahan(10, 20, tampilHasil);

// // Latihan 2 Buat fungsi yang melakukan tugas setelah penundaan waktu tertentu, dan gunakan callback untuk mengeksekusi sesuatu setelah waktu habis.
// function prosesAsingkron(data, callback) {
//     console.log(`mendapatkan ${data}`)
//     console.log('memulai proses....');
//     setTimeout(() => {
//         console.log('proses ke 2 selesai .......')
//     }, 4000)

//     callback();
// }

// function selesai() {
//     console.log("sedang dalam pengerjaan")
// };

// prosesAsingkron("Data penting", selesai);

// // latihan 3 ambil data API sertakan juga pakai callback
// function getDataPegawai(callback) {
//     // gunakan fetch
//     fetch('pegawai.json')
//         .then(response => response.json())
//         .then(data => callback(data.pegawai))
//         .catch(err => console.error('Error:', err));
// }

// //buat fungsi tampilkan menggunakan callback
// function tampilkanDataPegawai(user) {
//     user.forEach((pegawai) => {
//         console.log({
//             nama: pegawai.nama,
//             umur: pegawai.umur,
//             jabatan: pegawai.jabatan,
//             gaji: pegawai.gaji
//         })
//     })
// }

// getDataPegawai(tampilkanDataPegawai);

// const dummy = [{
//     nama: "Egal Assegaf",
//     jurusan: "Teknik Informatika",
//     jenisKelamin: "Laki laki",
//     id: 1
// }, {
//     nama: "Tri Syhanda Ade Lia",
//     jurusan: "Ilmu Komunikasi",
//     jenisKelamin: "Perempuan",
//     id: 2
// }, {
//     nama: "Arga Dwii",
//     jurusan: "Teknik Informatika",
//     jenisKelamin: "Laki laki",
//     id: 3
// }

// ];

// dummy.forEach((d) => {
//     console.log(`Nama: ${d.nama}, Jurusan: ${d.jurusan},`)
// })

// //ambil data API nya 
// const dataMahasiswa = 'mahasiswa.json';

// //menggunakan method GET request untuk fetch data
// fetch(dataMahasiswa)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Error response : ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(userData => {
//         console.log('Data Mahasiswa : ', userData);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


// latihan menggunakan fetch

// fetch('http://www.omdbapi.com/?apikey=aedf78e8&s=harry potter')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('Error: ', err)
//     })

// Latihan filtering data ambil data yg di atas 2010
// const endpoint = 'http://www.omdbapi.com/?apikey=aedf78e8&s=harry potter';

// fetch(endpoint)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Network response is not ok!');
//         }
//         return response.json();
//     })
//     .then((data) => {
//         if (data.Response === "False") {  // harus "False" dengan F besar
//             throw new Error(data.Error);
//         }
//         console.log("Original data: ", data)

//         // Melakukan filter di dalam blok ini setelah data didapat
//         const filterMovies = data.Search.filter((movie) => {
//             return parseInt(movie.Year) > 2009;
//         });

//         console.log('Filtered Movies:', filterMovies);

//         // Tampilkan film yang lolos filter
//     })
//     .catch((err) => {
//         console.log('error: ', err.message); // Tampilkan error message yang lebih informatif
//     });

// Soal pertama coba kamu ambil data film avengers diatas tahun 2008 !
// API : 

const endpoint = 'http://www.omdbapi.com/?apikey=aedf78e8&s=avengers'

fetch(endpoint)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Network is not OK`);
        }

        return response.json();
    })
    .then((data) => {
        //    cek apakah API mengembalikan error
        if (data.Response === "False") {
            throw new Error(data.Error)
        }

        console.log("Original data: ", data.Search);

        const filterMovies = data.Search.filter((m) => {
            return parseInt(m.Year) > 2008
        })

        console.log("Filtered Movies: ", filterMovies);
    })
    .catch((err) => {
        console.log(err.message);
    })

