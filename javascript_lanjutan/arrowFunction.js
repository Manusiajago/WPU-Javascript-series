// function deklarasi
function sapaTeman(nama) {
    return `halo ${nama} selamat siang`
}

console.log(sapaTeman('Adel'));

// function expressi 
const reverseString = function (str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

// console.log(reverseString("Hello World"));

// arrow function
const tampilPesan = (nama, waktu) => {
    return `halo ${nama} selamat ${waktu}`;
}

console.log(tampilPesan("Egal", "Siang"));

// contoh menghitung jumlah karakter
let mahasiswa = ["Egal", "adel", "Rama", "Bila"];

const hitungJumlahKarakter = mahasiswa.map(str => str.length);

// console.log(hitungJumlahKarakter)

// contoh map() mengembalikan nilai object

const namaHewan = ["Babi", "Sapi", "ayam", "kucing"];

const charCountAnimal = namaHewan.map((e) => ({ element: e, jmlhHuruf: namaHewan.length }));

// console.table(charCountAnimal)

// konsep this pada arrow function
// function Mahasiswa() {
//     let nama = "Egal Assegaf"
//     let umur = 24

//     this.menyapa = function () {
//         return `halo ${nama} umur kamu ${umur}`
//     }
// }

// const mhs1 = new Mahasiswa();

// console.log(mhs1.menyapa());

function Mahasiswa() {
    this.nama = "Egal Assegaf";
    this.umur = 24;

// this.tambahUmur = () => {
//     this.umur++;
//     return `Saya ${this.nama}, umur saya sekarang ${this.umur}`;
// };

//     setInterval(() => {
//         this.umur++;
//         console.log(`Saya ${this.nama}, umur saya sekarang ${this.umur}`);
//     }, 2000)
// }

// const egal = new Mahasiswa()

// latihan 1 // fungsi dengan 1 parameter









