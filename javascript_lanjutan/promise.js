// const janji1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const berhasil = false;

//         if (berhasil) {
//             resolve("Janji berhasil di tepati");
//         } else {
//             reject("Janji gagal di tepati");
//         }
//     }, 2000)
// })

// //menangani promise dengan then() dan catch ()
// janji1
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// //promise dengan janji sederhana
// const penjumlahan = (a, b) => {
//     return new Promise((resolve, rejected) => {
//         if (typeof a === 'number' && typeof b === 'number') {
//             resolve(a + b); // menjalankan resolve berhasil
//         } else {
//             rejected("Harus berupa angka"); // menjalankan reject gagal
//         }
//     })
// }

// //pemanggilan promise
// penjumlahan("s", "c")
//     .then((hasil) => {
//         console.log(`Hasil penjumlahan: ${hasil}`);
//     })
//     .catch((err) => {
//         console.log(`Error: ${err}`);
//     })


// pemanasan promise meminta sebuah jaringan
const getData = new Promise((resolve, reject) => {
    let succes = true;

    setTimeout(() => {
        if (succes) {
            resolve("Data berhasil dikirim");
        } else {
            reject("Data tidak terkirim");
        }
    }, 2000)
})

getData
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.log(err);
    })

// latihan, minta data ke API lokal
fetch('mahasiswa.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error Response");
        }
        return response.json();
    })

    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

// latihan 2 request ke server 
const getServerData = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("Data berhasil dikirim ke server");
        } else {
            reject("Data gagal dikirim ke server");
        }
    }, 2000)

})

getServerData
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Request selesai");
    })

// membuat validasi email menggunakan promise
const emailValidated = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isValidEmail = email.includes("@");

            if (isValidEmail) {
                resolve("Email Valid");
            } else {
                reject("Email Invalid");
            }
        }, 2000)
    })
}

emailValidated("example@example.com")
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })

// ambil data API lebih dari 1 menggunakan promise.all
const getData1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            "mahasiswa": [
                {
                    "id": 1,
                    "nama": "Andi",
                    "jurusan": "Teknik Informatika",
                    "angkatan": 2020
                },
                {
                    "id": 2,
                    "nama": "Budi",
                    "jurusan": "Sistem Informasi",
                    "angkatan": 2019
                },
                {
                    "id": 3,
                    "nama": "Citra",
                    "jurusan": "Teknik Elektro",
                    "angkatan": 2021
                },
                {
                    "id": 4,
                    "nama": "Dewi",
                    "jurusan": "Matematika",
                    "angkatan": 2020
                },
                {
                    "id": 5,
                    "nama": "Eko",
                    "jurusan": "Fisika",
                    "angkatan": 2018
                }
            ]
        }
        );
    }, 2000)
})

const getData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            "matakuliah": [
                {
                    "nama": "Pemrograman Web",
                    "dosen": "Dr. Ahmad",
                    "sks": 3
                },
                {
                    "nama": "Basis Data",
                    "dosen": "Prof. Budi",
                    "sks": 4
                },
                {
                    "nama": "Algoritma dan Struktur Data",
                    "dosen": "Dr. Siti",
                    "sks": 3
                }
            ]
        }
        )
    }, 2000)
})

Promise.all([getData1, getData2])
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
