// // // // //buat fungsi menyapa dengan setTimeout beberapa detik
// // // // function menyapa(nama, sapa) {
// // // //     console.log(`memulai proses`)
// // // //     //simulasi operasi asyncronous dengan setTimeout
// // // //     setTimeout(() => {
// // // //         console.log(`halo ${nama}`)

// // // //         // panggil fungsi callback setelah sapa
// // // //         sapa()
// // // //     }, 2000)
// // // // }

// // // // function selesaiSapa() {
// // // //     console.log("selesai sapa")
// // // // }


// // // // // Memanggil fungsi greet dan mengirimkan fungsi selesai sebagai callback
// // // // const eksekusi = menyapa("Egal", selesaiSapa);

// // // // console.log(eksekusi);

// // // // // latihan ambil data mahasiswa.json
// // // // //1. buat fungsi mengambil data mahasiswa
// // // // function getDataMahasiswa() {
// // // //     //menggunakan fetch untuk mengambil data
// // // //     fetch('mahasiswa.json')
// // // //         .then(response => {
// // // //             if (!response.ok) {
// // // //                 throw new Error(`Error response`);
// // // //             }
// // // //             // convert data ke json
// // // //             return response.json();
// // // //         })
// // // //         .then(userData => {
// // // //             console.log('user data:', userData);
// // // //         })
// // // //         .catch(error => {
// // // //             console.log('error:', error);
// // // //         })
// // // // }

// // // // const get = getDataMahasiswa();

// // // // console.log(get);

// // // // // latihan 2 buat fungsi mengambil data dari matakuliah
// // // // function getMatakuliah() {
// // // //     // ambil data menggunakan fetch
// // // //     fetch('matakuliah.json')
// // // //         .then(response => {
// // // //             if (!response.ok) {
// // // //                 throw new Error(`Error response`);
// // // //             }
// // // //             // ubah data ke json
// // // //             return response.json();
// // // //         })
// // // //         .then(data => {
// // // //             const tampilkandata = document.getElementById('matakuliah-list');

// // // //             //kosongkan daftar sebelum menambahkan daftar baru
// // // //             tampilkandata.innerHTML = '';

// // // //             //looping data matakuliah dan menampilkannya di halaman menggunakan forEach
// // // //             data.matakuliah.forEach((element) => {
// // // //                 const li = document.createElement('li');
// // // //                 li.innerHTML = `<strong>${element.nama}</strong> - Dosen: ${element.dosen} (SKS: ${element.sks})`;
// // // //                 tampilkandata.appendChild(li);

// // // //                 const objectDosen = { dosen: element.dosen };
// // // //                 console.log(objectDosen);
// // // //             })
// // // //         })
// // // //         .catch(err => {
// // // //             console.log('Error : ', err);
// // // //         })
// // // // };

// // // // //panggil fungsi
// // // // const panggil = getMatakuliah();

// // // // latihan callback menjumlahkan 2 angka

// // // function penjumlahan(a, b, callback) {
// // //     const hasilPenjumlahan = a + b;
// // //     callback(hasilPenjumlahan);

// // // }

// // // function tampilHasil(hasilPenjumlahan) {
// // //     console.log(`hasil ${hasilPenjumlahan}`);
// // // }

// // // penjumlahan(10, 20, tampilHasil);

// // // // Latihan 2 Buat fungsi yang melakukan tugas setelah penundaan waktu tertentu, dan gunakan callback untuk mengeksekusi sesuatu setelah waktu habis.
// // // function prosesAsingkron(data, callback) {
// // //     console.log(`mendapatkan ${data}`)
// // //     console.log('memulai proses....');
// // //     setTimeout(() => {
// // //         console.log('proses ke 2 selesai .......')
// // //     }, 4000)

// // //     callback();
// // // }

// // // function selesai() {
// // //     console.log("sedang dalam pengerjaan")
// // // };

// // // prosesAsingkron("Data penting", selesai);

// // // // latihan 3 ambil data API sertakan juga pakai callback
// // // function getDataPegawai(callback) {
// // //     // gunakan fetch
// // //     fetch('pegawai.json')
// // //         .then(response => response.json())
// // //         .then(data => callback(data.pegawai))
// // //         .catch(err => console.error('Error:', err));
// // // }

// // // //buat fungsi tampilkan menggunakan callback
// // // function tampilkanDataPegawai(user) {
// // //     user.forEach((pegawai) => {
// // //         console.log({
// // //             nama: pegawai.nama,
// // //             umur: pegawai.umur,
// // //             jabatan: pegawai.jabatan,
// // //             gaji: pegawai.gaji
// // //         })
// // //     })
// // // }

// // // getDataPegawai(tampilkanDataPegawai);

// // // const dummy = [{
// // //     nama: "Egal Assegaf",
// // //     jurusan: "Teknik Informatika",
// // //     jenisKelamin: "Laki laki",
// // //     id: 1
// // // }, {
// // //     nama: "Tri Syhanda Ade Lia",
// // //     jurusan: "Ilmu Komunikasi",
// // //     jenisKelamin: "Perempuan",
// // //     id: 2
// // // }, {
// // //     nama: "Arga Dwii",
// // //     jurusan: "Teknik Informatika",
// // //     jenisKelamin: "Laki laki",
// // //     id: 3
// // // }

// // // ];

// // // dummy.forEach((d) => {
// // //     console.log(`Nama: ${d.nama}, Jurusan: ${d.jurusan},`)
// // // })

// // // //ambil data API nya
// // // const dataMahasiswa = 'mahasiswa.json';

// // // //menggunakan method GET request untuk fetch data
// // // fetch(dataMahasiswa)
// // //     .then(response => {
// // //         if (!response.ok) {
// // //             throw new Error(`Error response : ${response.status}`);
// // //         }
// // //         return response.json();
// // //     })
// // //     .then(userData => {
// // //         console.log('Data Mahasiswa : ', userData);
// // //     })
// // //     .catch(error => {
// // //         console.error('Error:', error);
// // //     });


// // // latihan menggunakan fetch

// // // fetch('http://www.omdbapi.com/?apikey=aedf78e8&s=harry potter')
// // //     .then((response) => {
// // //         return response.json()
// // //     })
// // //     .then((data) => {
// // //         console.log(data);
// // //     })
// // //     .catch((err) => {
// // //         console.log('Error: ', err)
// // //     })

// // // Latihan filtering data ambil data yg di atas 2010
// // // const endpoint = 'http://www.omdbapi.com/?apikey=aedf78e8&s=harry potter';

// // // fetch(endpoint)
// // //     .then((response) => {
// // //         if (!response.ok) {
// // //             throw new Error('Network response is not ok!');
// // //         }
// // //         return response.json();
// // //     })
// // //     .then((data) => {
// // //         if (data.Response === "False") {  // harus "False" dengan F besar
// // //             throw new Error(data.Error);
// // //         }
// // //         console.log("Original data: ", data)

// // //         // Melakukan filter di dalam blok ini setelah data didapat
// // //         const filterMovies = data.Search.filter((movie) => {
// // //             return parseInt(movie.Year) > 2009;
// // //         });

// // //         console.log('Filtered Movies:', filterMovies);

// // //         // Tampilkan film yang lolos filter
// // //     })
// // //     .catch((err) => {
// // //         console.log('error: ', err.message); // Tampilkan error message yang lebih informatif
// // //     });

// // // Soal pertama coba kamu ambil data film avengers diatas tahun 2008 !
// // // API :

// // // const endpoint = 'http://www.omdbapi.com/?apikey=aedf78e8&s=avengers'

// // // fetch(endpoint)
// // //     .then((response) => {
// // //         if (!response.ok) {
// // //             throw new Error(`Network is not OK`);
// // //         }

// // //         return response.json();
// // //     })
// // //     .then((data) => {
// // //         //    cek apakah API mengembalikan error
// // //         if (data.Response === "False") {
// // //             throw new Error(data.Error)
// // //         }

// // //         console.log("Original data: ", data.Search);

// // //         const filterMovies = data.Search.filter((m) => {
// // //             return parseInt(m.Year) > 2008
// // //         })

// // //         console.log("Filtered Movies: ", filterMovies);
// // //     })
// // //     .catch((err) => {
// // //         console.log(err.message);
// // //     })


// // // function prosesData(data, callback) {
// // //     console.log(`data belum diubah : ${data}`);
// // //     setTimeout(() => {
// // //         const datas = data.toUpperCase()
// // //         callback(datas)
// // //     }, 2000)
// // // }

// // // function tampilkanData(hasil) {
// // //     console.log(`Data yang sudah diproses: ${hasil}`);
// // // }

// // // prosesData('ubah ini ke huruf besar', tampilkanData)

// // // memanggil api lokal mahasiswa.json GET request
// // //

// // //synchronous callback

// // // function menyapa(nama) {
// // //     alert(`Halo ${nama}`)
// // // }

// // // function tampilkanNama(callback) {
// // //     const nama = prompt('Masukkan nama anda : ');
// // //     callback(nama);

// // // }

// // // tampilkanNama(menyapa)

// // function prosesArray(array, callback) {
// //     for (let i = 0; i < array.length; i++) {
// //         callback(array[i]);
// //     }
// // }

// // function cetak(nilai) {
// //     console.log(`Nilai : ${nilai}`);
// // }

// // const jalankan = prosesArray([1, 2, 3, 4, 5], cetak)
// // console.log(jalankan);

// // //callback ketika operasi matematik

// // function hitung(a, b, operasi) {
// //     return operasi(a, b);
// // }

// // function tambah(a, b) {
// //     return a + b;
// // }

// // function kurang(a, b) {
// //     return a - b;
// // }

// // function kali(a, b) {
// //     return a * b;
// // }

// // console.log(hitung(10, 20, kurang))


// // //filter Array

// // function filterArray(array, kondisi) {
// //     let hasil = [];

// //     for (let i = 0; i < array.length; i++) {
// //         if (kondisi(array[i])) {
// //             hasil.push(array[i])
// //         }
// //     }

// //     return hasil
// // }

// // function findLargest2(nilai) {
// //     return nilai > 2;
// // }

// // console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], findLargest2));



// // filter angka lebih dari 5

// // Fungsi untuk mencari nilai maksimum dalam array
// // function findMax(array, callback) {
// //     const max = Math.max(...array);  // Menemukan nilai maksimum
// //     console.log(callback(max));      // Memanggil callback dan mencetak hasilnya
// // }

// // function displayMax(maxVal) {
// //     return `Hasil dari max value adalah ${maxVal}`;  // Mengembalikan string dengan nilai maksimum
// // }

// // const maxArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// // findMax(maxArr, displayMax);  // Memanggil fungsi findMax tanpa console.log

// //fungsi penambahan pada callback

// function tambahAngka(a, b, callback) {
//     let hasil = a + b;
//     console.log(callback(hasil));
// }

// function tampilkanHasil(hasil) {
//     return `Hasilnya adalah ${hasil}`;
// }

// //memanggil fungsi tambah angka dan memberikan callback tampilkan hasil
// tambahAngka(10, 10, tampilkanHasil)


// // filter

// function filterArray(array, filter, tampilkanArray) {
//     let hasil = [];

//     for (let i = 0; i < array.length; i++) {
//         if (filter(array[i])) {
//             hasil.push(array[i]);
//         }
//     }

//     tampilkanArray(hasil);
// }

// function findLargestNum(angka) {
//     return angka > 10;
// }

// function displayArray(array) {
//     console.log(array);
// }

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log('ini adalah hasilnya : ', filterArray(myNum, findLargestNum, displayArray));

// // find

// function cariGenap(array, callback) {
//     let hasil = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             hasil.push(array[i]);
//         }
//     }

//     console.log(callback(hasil));


// }

// function tampilkanHasil(array) {
//     console.log(array);
// }

// const myNum1 = [1, 2, 2, 3, 5, 6, 7, 7, 8, 8, 9, 10];
// console.log(cariGenap(myNum1, tampilkanHasil))


// function calculateTotal(array, callback) {
//     let total = 0;

//     for (let i = 0; i < array.length; i++) {
//         total += array[i]
//     }

//     callback(total)


// }

// function tampilkanHasil(hasil) {
//     console.log('Hasilnya adalah : ', hasil);
// }

// const myNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(calculateTotal(myNum2, tampilkanHasil));


// function filterGanjil(array, callback) {
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             result.push(array[i])
//         }
//     }

//     callback(result);
// }

// function displayGanjil(array) {
//     console.log(array);
// }

// const myNum3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(filterGanjil(myNum3, displayGanjil));

// function findMin(array, callback) {
//     let min = Math.min(...array);

//     callback(min);
// }

// function displayMin(minVal) {
//     console.log(`Nilai minimum adalah : ${minVal}`);
// }

// const myNum4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(findMin(myNum4, displayMin));


// //-------------------------------

// const siswaArray = [
//     { nama: "Budi", nilai: 82 },
//     { nama: "Ani", nilai: 60 },
//     { nama: "Dina", nilai: 90 },
//     { nama: "Fajar", nilai: 70 },
// ];

// function filterSiswaLulus(array, callback) {

//     const lulus = array.filter((target) => {
//         return target.nilai >= 75
//     })

//     callback(lulus)

// }


// function tampilkanLulus(siswaLulus) {
//     console.log('Siswa yang lulus : ' + siswaLulus);
// }


// console.log(filterSiswaLulus(siswaArray, tampilkanLulus));

// //mencari nilai rata rata

// function findRataRata(array, callback) {
//     let hasilData = 0

//     for (let i = 0; i < array.length; i++) {
//         hasilData += array[i];
//     }

//     const average = hasilData / array.length;
//     callback(average);
// }

// function tampilkanData(array) {
//     console.log(`Nilai rata rata : ${array}`);
// }


// console.log(findRataRata([70, 85, 90, 65, 88, 92], tampilkanData));


// // mencari karakter yg mengandung huruf

// function findChar(str, char, callback) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }

//     callback(count);
// }

// function tampilkanCount(count) {
//     console.log(`Karakter ditemukan sebanyak ${count} kali.`);
// }


// console.log(findChar('Halo saya sedang belajar Javascript', 'a', tampilkanCount));

// function tambahkanJikaGenap(array, value, callback) {
//     if (value % 2 === 0) {
//         array.push(value);
//     }

//     callback(array);
// }

// function displayArr(array) {
//     console.log('Array saat ini : ', array);
// }

// const myArr = [1, 2, 3, 4];
// console.log(tambahkanJikaGenap(myArr, 1, displayArr))
// console.log(tambahkanJikaGenap(myArr, 2, displayArr))


function cekKetersediaan(product, productName, callback) {
    const tersedia = product.some((products) => {
        return products.name === productName;
    })

    callback(tersedia)

}


function menampilkanBarang(tersedia) {
    if (tersedia) {
        console.log("Barang tersedia");
    } else {
        console.log(`Barang tidak tersedia`);
    }
}



const storeProducts = [
    { name: "Laptop", price: 15000000 },
    { name: "Mouse", price: 200000 },
    { name: "Keyboard", price: 300000 },
];


console.log(cekKetersediaan(storeProducts, 'Laptop', menampilkanBarang));

// filter usia 18+ 

function filterUsia(array, cekUmur, callback) {
    const filtered = array.filter(cekUmur);

    callback(filtered);
}

function filterUmur(umur) {
    return umur >= 18;
}


function tampilkanUmur(umur) {
    console.log("Usia di atas atau sama dengan 18:", umur);
}

const ages = [12, 17, 18, 21, 14, 25, 30];
console.log(filterUsia(ages, filterUmur, tampilkanUmur));


// - -------------- cek bilangan positif negatif

function cekBilangan(num, callback) {
    const bilanganPositif = num.filter((target) => {
        return target > 0;
    })

    const bilanganNegatif = num.filter((target) => {
        return target < 0;
    })

    callback(bilanganNegatif, bilanganPositif);
}

function tampilkanBilangan(negatif, positif) {
    console.log("Bilangan negatif:", negatif);
    console.log("Bilangan positif:", positif);
}


const myNumbers = [1, 2, 3, 4, 5, 6, -7, -8, -9, -10, -11, -12, -13, -14];
console.log(cekBilangan(myNumbers, tampilkanBilangan));