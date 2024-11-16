// // const janji1 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         const berhasil = false;

// //         if (berhasil) {
// //             resolve("Janji berhasil di tepati");
// //         } else {
// //             reject("Janji gagal di tepati");
// //         }
// //     }, 2000)
// // })

// // //menangani promise dengan then() dan catch ()
// // janji1
// //     .then((message) => {
// //         console.log(message);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     })

// // //promise dengan janji sederhana
// // const penjumlahan = (a, b) => {
// //     return new Promise((resolve, rejected) => {
// //         if (typeof a === 'number' && typeof b === 'number') {
// //             resolve(a + b); // menjalankan resolve berhasil
// //         } else {
// //             rejected("Harus berupa angka"); // menjalankan reject gagal
// //         }
// //     })
// // }

// // //pemanggilan promise
// // penjumlahan("s", "c")
// //     .then((hasil) => {
// //         console.log(`Hasil penjumlahan: ${hasil}`);
// //     })
// //     .catch((err) => {
// //         console.log(`Error: ${err}`);
// //     })


// // pemanasan promise meminta sebuah jaringan
// const getData = new Promise((resolve, reject) => {
//     let succes = true;

//     setTimeout(() => {
//         if (succes) {
//             resolve("Data berhasil dikirim");
//         } else {
//             reject("Data tidak terkirim");
//         }
//     }, 2000)
// })

// getData
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// // latihan, minta data ke API lokal
// fetch('mahasiswa.json')
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Error Response");
//         }
//         return response.json();
//     })

//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// // latihan 2 request ke server 
// const getServerData = new Promise((resolve, reject) => {
//     let success = true;

//     setTimeout(() => {
//         if (success) {
//             resolve("Data berhasil dikirim ke server");
//         } else {
//             reject("Data gagal dikirim ke server");
//         }
//     }, 2000)

// })

// getServerData
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Request selesai");
//     })

// // membuat validasi email menggunakan promise
// const emailValidated = (email) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const isValidEmail = email.includes("@");

//             if (isValidEmail) {
//                 resolve("Email Valid");
//             } else {
//                 reject("Email Invalid");
//             }
//         }, 2000)
//     })
// }

// emailValidated("example@example.com")
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// // ambil data API lebih dari 1 menggunakan promise.all
// const getData1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             "mahasiswa": [
//                 {
//                     "id": 1,
//                     "nama": "Andi",
//                     "jurusan": "Teknik Informatika",
//                     "angkatan": 2020
//                 },
//                 {
//                     "id": 2,
//                     "nama": "Budi",
//                     "jurusan": "Sistem Informasi",
//                     "angkatan": 2019
//                 },
//                 {
//                     "id": 3,
//                     "nama": "Citra",
//                     "jurusan": "Teknik Elektro",
//                     "angkatan": 2021
//                 },
//                 {
//                     "id": 4,
//                     "nama": "Dewi",
//                     "jurusan": "Matematika",
//                     "angkatan": 2020
//                 },
//                 {
//                     "id": 5,
//                     "nama": "Eko",
//                     "jurusan": "Fisika",
//                     "angkatan": 2018
//                 }
//             ]
//         }
//         );
//     }, 2000)
// })

// const getData2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             "matakuliah": [
//                 {
//                     "nama": "Pemrograman Web",
//                     "dosen": "Dr. Ahmad",
//                     "sks": 3
//                 },
//                 {
//                     "nama": "Basis Data",
//                     "dosen": "Prof. Budi",
//                     "sks": 4
//                 },
//                 {
//                     "nama": "Algoritma dan Struktur Data",
//                     "dosen": "Dr. Siti",
//                     "sks": 3
//                 }
//             ]
//         }
//         )
//     }, 2000)
// })

// // Promise.all([getData1, getData2])
// //     .then((result) => {
// //         console.log(result)
// //     })
// //     .catch((error) => {
// //         console.log(error)
// //     })


// // // mengulang contoh implementasi promise 

// // const myPromise = new Promise((resolve, reject) => {

// //     let berhasil = true;

// //     if (berhasil) {
// //         resolve('Berhasil !')
// //     } else {
// //         reject('Gagal!')
// //     }
// // });

// // myPromise
// //     .then((result) => {
// //         console.log(result);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     })


// //latihan 1 check password

// function checkPassword(password) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (password.length > 5) {
//                 resolve(`Password valid`);
//             } else {
//                 reject(`Password ivalid`);
//             }
//         }, 3000)
//     })
// }

// checkPassword('EgalAssegaf')
//     .then((result) => {
//         console.log(result);
//     })

//     .catch((err) => {
//         console.error(err);
//     })



// //simulasi mendownload file
// function downloadFile(fileName, waktu) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             const sukses = Math.random() > 0.3;

//             if (sukses) {
//                 resolve(`${fileName} berhasil diunduh`);
//             } else {
//                 reject(`${fileName} gagal diunduh`);
//             }
//         }, waktu)
//     })
// }

// downloadFile("Video.mp4", 3000)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// function simulasi login()
function simulasiLogin(username, password) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (username === "admin" && password === "123") {
                resolve(username);
            } else {
                reject(`Login gagal`)
            }
        }, 2000)
    })
}

function getUserData(username) {
    return new Promise((resolve, reject) => {
        console.log('Sedang mengambil data ...')

        setTimeout(() => {
            resolve({ username, role: "admin" });
        }, 2000)
    })

}

function displayUserData(userData) {
    console.log("Data pengguna : ", userData);
}

//tes fungsi 

simulasiLogin('admin', "123")
    .then((response) => {
        console.log(response);
        return getUserData(response);
    })

    .then((userData) => {
        displayUserData(userData);
    })

    .catch((error) => {
        console.log(error);
    })

