// // contoh higher order function
// function kerjakanTugas(nama, callback) {
//     console.log(` ${nama} Mulai mengerjakan tugas... `)

//     // memanggil fungsi yg dijadikan arguments
//     callback();
// }

// function callbackFunction() {
//     console.log("Selesai!")

// }

// //memanggil higher order function

// function repeat(n, action) {
//     for (let i = 0; i <= n; i++) {
//         console.log(`kerjakan tugas ${[i]}`)
//         action(i);
//     }
// }

// repeat(100, console.log);

// javascript constructor function
function Mahasiswa() {
    this.nama = "Egal",
        this.umur = 23,
        this.jurusan = "Teknik Informatika"
}

const mahasiswa = new Mahasiswa();
const mahasiswa2 = new Mahasiswa();

console.log(mahasiswa.nama);
console.log(mahasiswa.umur);
console.log(mahasiswa.jurusan);

// constructor function dengan parameter
function Siswa(namaSiswa, umurSiswa, JenisKelaminSiswa) {

    //assigment parameter value to the calling object
    this.nama = namaSiswa;
    this.umur = umurSiswa;
    this.gender = JenisKelaminSiswa;

    this.sayHello = function () {
        return `hello ${this.nama} `;
    };
}

const siswa1 = new Siswa("Egal Assegaf", 23, "Laki laki");
const siswa2 = new Siswa("Tri Syhanda Ade Lia", 24, "Perempuan");

//akses properti
console.log(siswa1.nama);

// latihan 1
const mobil = {
    merk: "Toyota",
    kecepatan: 0,
    percepat: function () {
        setTimeout(() => {
            this.kecepatan += 10;
            console.log(`Mobil ${this.merk} sedang naik kecepatan ${this.kecepatan} km/jam`);
        }, 0)
    }
}


const akun = {
    nama: "Egal Assegaf",
    saldo: 1000000,

    //method tambah saldo menggunakan function biasa
    tambahSaldo: function (amount) {
        this.saldo += amount;
        console.log(`saldo anda sekarang : ${this.saldo}`);
    },

    //method tambah saldo menggunakan arrow function
    tambahSaldoArrow: ((curr) => {
        saldo += curr;
        console.log(`Saldo anda sekarang : ${this.saldo}`);
    })

}


const myFriend = [{
    nama: "Joko",
    umur: 22,
    jurusan: "Teknik Informatika"
},
{
    nama: "Andi",
    umur: 23,
    jurusan: "Sistem Informasi"
},
{
    nama: "Budi",
    umur: 24,
    jurusan: "Manajemen Informatika"
}
]

//menggunakan filter untuk mengambil umur diatas 20
const maxAge = myFriend.filter((year) => {
    return year.umur > 23;
})

console.log(maxAge);


// Menggunakan Arrow Function untuk Callback Asynchronous (Promise)
const fetchUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ nama: "Egal", umur: 23, jurusan: "Teknik Informatika" })
        }, 3000)
    })
}

fetchUserData()
    .then((user) => {
        console.log(`Nama : ${user.nama} , umur : ${user.umur} , jurusan : ${user.jurusan}`);
    })
    .catch((err) => {
        console.log("Terjadi kesalahan ", err);
    })


//. Menggunakan Arrow Function untuk Mengakses Konteks this dalam Method
const myProject = {
    judul: "Menyelesaikan laporan peroyek",
    status: "Sedang berjalan",
    deadline: "2024-10-31",

    //method untuk mengingatkan pengguna untuk tenggat waktu
    remindMe: function () {
        console.log(`pengingat waktu di mulai`)
        setTimeout(() => {
            console.log(`Pengingat: Tugas "${this.judul}" harus diselesaikan pada ${this.deadline}. Status saat ini: ${this.status}`);
        }, 2000)
    }
}

// Contoh 1: Menggunakan Higher-Order Function dengan map, filter, dan reduce
const namaProduk = [{ Nama: "Handphone", harga: 3000000, kategori: "Elektronik" },
{ Nama: "Jaket", harga: 200000, kategori: "Pakaian" },
{ Nama: "Motor", harga: 20000000, kategori: "Kendaraan" }
];

//mencari nama produk dengan map
const getNameProduct = namaProduk.map((item) => {
    return item.Nama;

})

//mencari barang dengan harga diatas 200000
const getMaximumPrice = namaProduk.filter((price) => {
    return price.harga > 200000;
})

//menghitung rata-rata harga produk dengan reduce
const getTotalPrice = namaProduk.reduce((total, curr) => {
    return total + curr.harga;
}, 0)

console.log(getNameProduct);
console.log(getMaximumPrice);
console.log("Total semua produk : ", getTotalPrice);

// higher order function dengan callback


//studi asus 2 pengelolaan data statistik sederhana
const rataRata = [85, 90, 78, 92, 88, 76];

//menghitung rata rata
// const hitungRataRata = rataRata.flat();
// const sum = hitungRataRata.reduce((acc, curr) => {
//     return acc + curr;
// }, 0)
// console.log(`Nilai rata rata : ${sum / hitungRataRata.length}`)
function hitungRataRata(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}


// menghitung nilai diatas rata rata 
function nilaiDiatasRataRata(arr) {
    let avg = hitungRataRata(arr);
    let numbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            numbers.push(arr[i])
        }
    }

    return numbers;
}

const rataRata1 = setTimeout(() => {
    console.log("Nilai rata rata adalah : ", hitungRataRata(rataRata))
}, 2000)

const rataRata2 = setTimeout(() => {
    console.log("Nilai yang diatas rata rata : ", nilaiDiatasRataRata(rataRata))
}, 3000)

console.log(rataRata1)
console.log(rataRata2)

//Studi Kasus 3: Pengiriman Email Pemberitahuan Berdasarkan Kriteria Pengguna



