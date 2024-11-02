// // //looping biasa

// // let mahasiswa = ["Egal Assegaf", "Tri syhanda Ade Lia", "Salsabila", "Bila", "Arga Dwi"];
// // let buah = ["apel", "mangga", "jeruk", "pisang", "semangka"];

// // // buah.forEach((item, index) => {
// // //     console.log(` ${index + 1} ${item}`);
// // // });

// // for (let [i, values] of buah.entries()) {
// //     console.log(`${i + 1}  ${values}`);
// // }

// // // // menggunakan for
// // // for (let i = 0; i < mahasiswa.length; i++) {
// // //     console.log(mahasiswa[i]);
// // // }

// // // // menggunakan forEach
// // // mahasiswa.forEach((mhs) => {
// // //     console.log(mhs);
// // // })

// // // // menggunakan forEach dengan index
// // // buah.forEach((item, index) => {
// // //     console.log(`${index + 1} ${item}`);
// // // })

// // // menggunakan for of
// // // for (const e of buah) {
// // //     console.log(e);
// // // }

// // // looping string

// // // const namaSaya = "Egal Assegaf";

// // // for (e of namaSaya) {
// // //     console.log(e);
// // // }

// // implementasi penggunaan for of 

// const angka = [10, 25, 15, 12, 11];

// for (let e of angka) {
//     console.log(e);
// };

// //contoh penggunaan pada string
// const namaSaya = "Egal Assegaf"

// for (let huruf of namaSaya) {
//     console.log(huruf);
// }

// //contoh penggunaan pada map
// const namaMhs = new Map([
//     ['nama', 'Egal Assegaf'],
//     ['umur', 24],
//     ['jurusan', 'teknik informatika']
// ]);

// for (let [property, value] of namaMhs) {
//     console.log(`${property} ${value}`);
// }

// //contoh penggunaan NodeList
// // 1. mengambil semua element class nama
// const paragraf = document.querySelectorAll('.nama');

// //NodeList dapat diakses layaknya array
// console.log(paragraf[0].textContent);

// //menggunakan forEach pada NodeList
// paragraf.forEach((e, i) => {
//     console.log(`${e.textContent} ini adalah nama ke ${i + 1}`)
// });

// //menggunakan for Of 
// for (const e of paragraf) {
//     console.log(e.innerHTML);
// }

// //contoh penggunaan for in pada object

// const datas = {
//     nama: "Adel",
//     jenisKelamin: "Perempuan",
//     umur: 24,
//     jurusan: "Teknik Informatika"
// };

// for (key in datas) {
//     console.log(`${key} : ${datas[key]}`);
// }


// Buat sebuah array yang berisi berbagai nama buah. Gunakan for...of untuk membuat array baru yang hanya berisi nama buah yang panjangnya lebih dari 5 karakter.

// Buat sebuah array dari angka. Gunakan for...of untuk mengalikan setiap angka dengan 2 dan tampilkan array hasilnya.

// Buat string yang cukup panjang dan hitung berapa banyak huruf konsonan (selain vokal) yang ada di dalamnya.

// Buat Map berisi nama negara sebagai key dan ibu kotanya sebagai value. Gunakan for...of untuk mencetak kalimat “Ibu kota [negara] adalah [ibu kota].”


// contoh penggunaan for of (soal no 1)
const fruit = ['apel', 'pisang', 'nanas', 'semangka', 'melon', 'mangga'];
const longNameFruits = [];

for (let fruits of fruit) {
    if (fruits.length > 5) {
        longNameFruits.push(fruits);
    }
}

console.log(longNameFruits);

const myAngka = [1, 2, 3, 4, 5, 6, 7, 8]
const resultMyArr = [];

for (let num of myAngka) {
    const hasil = num * 2;
    resultMyArr.push(hasil)
}

console.log(resultMyArr);

const kataKalimat = "if you being real ? "

function consonants(str) {
    let countConsonants = 0;

    for (let e of kataKalimat) {
        if (e !== "a" && e !== "e" && e !== "i" && e !== "o" && e !== "u" && e !== "") {
            countConsonants++;
        }
    }

    return (countConsonants);
}

console.log(consonants(kataKalimat));

// Buat Map berisi nama negara sebagai key dan ibu kotanya sebagai value. Gunakan for...of untuk mencetak kalimat “Ibu kota [negara] adalah [ibu kota].”
const negara = new Map([
    ["Indonesia", "Jakarta"],
    ["Malaysia", "Kuala lumpur"],
    ["Jepang", "tokyo"],
    ["Australia", "Canberra"],
    ["Mesir", "Kairo"]
])

function printCountries(arr) {
    for (const [countries, capital] of arr) {
        console.log(`Ibu kota ${countries} kota : ${capital}`);
    }
}

const execute = printCountries(negara)
console.log(execute)

// latihan for Of mencari bilangan genap 
const cariGenap = [2, 3, 4, 5, 6, 78, 9, 7, 5, 3, 22, 3, 4, 5, 6, 7, 4, 6, 7, 6, 5, 4, 3, , 322];
let result = [];

for (let target of cariGenap) {
    if (target % 2 === 0) {
        result.push(target)
    }
}

console.log(result);

const produk = {
    name: "Laptop",
    price: 15000000,
    category: "Elektronik"
}

for (let key in produk) {
    console.log(` ${key} : ${produk[key]}`)
}

// manipulasi string menjadi huruf besar
const namaHewan = ['ular', 'babi', 'sapi', 'harimau'];

for (let e of namaHewan) {
    console.log(e.toUpperCase());
}

//menghitung panjang kata pada objek menggunakan for in

const peserta = {
    nama: "Egal Assegaf",
    umur: 24,
    jenisKelamin: "Perempuan",
    alamat: "Jln. Kemiri No. 12"
}

function hitungPanjangKata(obj) {
    for (let p in obj) {
        console.log(obj[p].length);
    }
}

console.log(hitungPanjangKata(peserta))


// hitung panjang kata

const clubBola = {
    namaKlub: 'Real Madrid',
    berdiri: 1999,
    kota: 'madrid',
    negara: 'spain'
}

function getNameLength(object) {
    for (let c in object) {
        console.log(object[c].length);
    }
}

console.log(getNameLength(clubBola))
