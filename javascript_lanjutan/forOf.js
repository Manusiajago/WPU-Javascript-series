// //looping biasa

// let mahasiswa = ["Egal Assegaf", "Tri syhanda Ade Lia", "Salsabila", "Bila", "Arga Dwi"];
// let buah = ["apel", "mangga", "jeruk", "pisang", "semangka"];

// // buah.forEach((item, index) => {
// //     console.log(` ${index + 1} ${item}`);
// // });

// for (let [i, values] of buah.entries()) {
//     console.log(`${i + 1}  ${values}`);
// }

// // // menggunakan for
// // for (let i = 0; i < mahasiswa.length; i++) {
// //     console.log(mahasiswa[i]);
// // }

// // // menggunakan forEach
// // mahasiswa.forEach((mhs) => {
// //     console.log(mhs);
// // })

// // // menggunakan forEach dengan index
// // buah.forEach((item, index) => {
// //     console.log(`${index + 1} ${item}`);
// // })

// // menggunakan for of
// // for (const e of buah) {
// //     console.log(e);
// // }

// // looping string

// // const namaSaya = "Egal Assegaf";

// // for (e of namaSaya) {
// //     console.log(e);
// // }

// implementasi penggunaan for of 

const angka = [10, 25, 15, 12, 11];

for (let e of angka) {
    console.log(e);
};

//contoh penggunaan pada string
const namaSaya = "Egal Assegaf"

for (let huruf of namaSaya) {
    console.log(huruf);
}

//contoh penggunaan pada map
const namaMhs = new Map([
    ['nama', 'Egal Assegaf'],
    ['umur', 24],
    ['jurusan', 'teknik informatika']
]);

for (let [property, value] of namaMhs) {
    console.log(`${property} ${value}`);
}

//contoh penggunaan NodeList
// 1. mengambil semua element class nama
const paragraf = document.querySelectorAll('.nama');

//NodeList dapat diakses layaknya array
console.log(paragraf[0].textContent);

//menggunakan forEach pada NodeList
paragraf.forEach((e, i) => {
    console.log(`${e.textContent} ini adalah nama ke ${i + 1}`)
});

//menggunakan for Of 
for (const e of paragraf) {
    console.log(e.innerHTML);
}

//contoh penggunaan for in pada object

const datas = {
    nama: "Adel",
    jenisKelamin: "Perempuan",
    umur: 24,
    jurusan: "Teknik Informatika"
};

for (key in datas) {
    console.log(`${key} : ${datas[key]}`);
}
