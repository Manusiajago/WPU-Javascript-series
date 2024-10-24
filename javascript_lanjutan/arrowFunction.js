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

}

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

// studi kasus implementasi arrow function E-commerce sederhana

// buat daftar keranjang

let keranjang = [{
    nama: "Buku",
    harga: 15000,
    jumlah: 2
},
{
    nama: "Pensil",
    harga: 500,
    jumlah: 3
},

{
    nama: "Kertas",
    harga: 750,
    jumlah: 1
}, { nama: "Sepatu", harga: 300000, jumlah: 2 },
{ nama: "Tas", harga: 250000, jumlah: 1 },
{ nama: "Jaket", harga: 400000, jumlah: 3 }
];





// fungsi menghitung rata rata menggunakan arrow function
const hitungTotal = ((keranjang) => {
    return keranjang.reduce((total, current) => {
        return total + (current.harga * current.jumlah);
    }, 0)

});
console.log("Totalnya adalah : ", hitungTotal(keranjang))

// fungsi filter data yg lebih dari 30000 harga nya
const filterData = keranjang.filter((target) => {
    if (target.harga > 300000) {
        console.log(`Ini adalah harga yang lebih dari 30000 : ${target.harga}`)
    } else if (target.harga < 300000) {
        console.log(`Ini adalah harga yang kurang dari 30000 : ${target.harga}`)
    }
});

console.log(filterData);

// arrow function pada this function declaration
function pembeli(nama) {
    this.nama = nama;
    this.keranjang = [];

    // method menambahkan keranjang
    this.tambahKeranjang = ((produk) => {
        this.keranjang.push(produk);
        console.log(`${this.nama} menambahkan ${produk} ke keranjang.`);
    })

    console.log(keranjang);
}

let pembeli2 = new pembeli("Egal");


//menghitung kalidua
const angka = [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const kaliDua = angka.map(((num) => {
    return num * 2;
}))

console.log(kaliDua);

//memfilter array menggunakan filter
const barang = [{ nama: 'laptop', harga: 15000000 },
{ nama: 'Mouse', harga: 25000 },
{ nama: 'Keyboard', harga: 50000 },
{ nama: 'Monitor', harga: 1000000 },
{ nama: 'Speaker', harga: 30000 },
{ nama: 'CPU', harga: 1200000 }
];

const filterBarang = barang.filter((item) => {
    return item.harga > 30000;
})

console.log("Harga yang lebih dari 30000 : ", filterBarang);















