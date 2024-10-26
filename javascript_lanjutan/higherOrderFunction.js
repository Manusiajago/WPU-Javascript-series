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
// hint : Misalkan kita memiliki aplikasi yang mengirimkan email kepada pengguna berdasarkan beberapa kriteria, seperti pengguna yang aktif dalam seminggu terakhir atau pengguna dengan pembelian lebih dari jumlah tertentu.
const pengguna = [
    { nama: "Egal", pembelian: 500000, aktif: true },
    { nama: "Sita", pembelian: 200000, aktif: false },
    { nama: "Rafi", pembelian: 750000, aktif: true },
    { nama: "Mira", pembelian: 100000, aktif: true }
];

// higher order function yang menerima fungsi diskon sebagai parameter
const hitungHargaDiskon = ((harga, fungsiDiskon) => {
    return harga - fungsiDiskon(harga)
})

// diskon presentase 10%
const diskonPresentase = ((harga) => {
    return harga * 0.1;
})

// diskon flat potongan langsung 50k
const diskonFlat = ((harga) => {
    return 50000;
})


// menghitung harga dengan berbagai jenis diskon
const hargaAsli = 50000;
console.log("Harga setelah diskon presentase : ", hitungHargaDiskon(hargaAsli, diskonPresentase));
console.log("Harga setelah diskon flat : ", hitungHargaDiskon(hargaAsli, diskonFlat));


// mencari angka yg lebih dari 5
const angkaAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// fungsi untuk mencari angka lebih dari 5
let result = [];
for (let i = 0; i < angkaAngka.length; i++) {
    if (angkaAngka[i] > 5) {
        result.push(angkaAngka[i]);
    }



}


console.log(result);

// contoh implementasi reduce() prototype array 
const barangCheckoutSaya = [{ nama: "Baju", harga: 45000, total: 2 },
{ nama: "celana", harga: 50000, total: 4 },
{ nama: "topi", harga: 80000, total: 3 },
{ nama: "sarung tangan", harga: 25000, total: 1 }
];

//menggunakan reduce untuk menghitung total barang kita
const totalHarga = barangCheckoutSaya.reduce((total, item) => {
    return total + (item.harga * item.total);
}, 0)

console.log("Total harga belanja : ", totalHarga);

//menghitung total gaji karyawan

const karyawan = [{ nama: "Andi", gaji: 5000000 },
{ nama: "Budi", gaji: 7000000 },
{ nama: "Citra", gaji: 4500000 },
{ nama: "Dina", gaji: 6000000 }];

//menggunakan reduce untuk menghitung total gaji
const totalGaji = karyawan.reduce((total, item) => {
    return total + item.gaji;
}, 0)

console.log("Total Gaji : ", totalGaji);


// mengelompokkan item berdasarkan kategori 
const inventaris = [
    { nama: "Laptop", kategori: "Elektronik" },
    { nama: "Monitor", kategori: "Elektronik" },
    { nama: "Meja", kategori: "Furniture" },
    { nama: "Kursi", kategori: "Furniture" },
    { nama: "Keyboard", kategori: "Elektronik" }
];

// menggunakan reduce untuk mengelompokkan sesuai dengan kategori
const res = inventaris.reduce((acc, item) => {
    const index = item.kategori;

    if (!acc[index]) {
        acc[index] = [];
    }

    acc[index].push(item.nama);
    return acc;

}, {})

console.log(res);

// menghitung rataRata nilai siswa
const nilaiSiswa = [
    { nama: "Eka", nilai: 85 },
    { nama: "Fikri", nilai: 78 },
    { nama: "Gina", nilai: 92 },
    { nama: "Hana", nilai: 88 }
];

//menghitng rata rata nilai siswa menggunakan reduce()

const average = nilaiSiswa.reduce((function (sum, value) {
    return sum + value.nilai;
}), 0) / nilaiSiswa.length;

console.log("Rata-rata nilai siswa : ", average);


//menghitung jumlah kata pada kalimat
const kalimat = ["Selamat", "belajar", "menggunakan", "reduce", "di", "JavaScript"];

const totalKata = kalimat.reduce((total) => {
    return total + 1;
}, 0)

console.log("Jumlah kata dalam kalimat : ", totalKata);

// buatkan nilai di dalam array ini dengan angka yg lebih banyak
const nilai = [65, 80, 95, 70, 90, 90, 90, 90, 90, 90, 90, 90, 90, 80, 10, 20, 40];

function getMax(arr) {
    let len = arr.length, max = -Infinity;

    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }

    return max;
}

console.log("Nilai tertinggi adalah : ", getMax(nilai))

// map () 


const siswa = [
    { nama: "Andi", nilaiUjian: [80, 75, 90] },
    { nama: "Budi", nilaiUjian: [60, 65, 70] },
    { nama: "Cici", nilaiUjian: [90, 95, 85] },
    { nama: "Dedi", nilaiUjian: [55, 60, 58] }
];

//menggunakan map untuk menghitung rata rata  dan menentukan status kelulusan
const hasilUjian = siswa.map((item) => {


    const totalNilai = item.nilaiUjian.reduce((total, nilai) => {
        return total + nilai;

    }, 0) / item.nilaiUjian.length

    //menentukan status kelulusan dengan standar nilai 
    const result = totalNilai >= 75 ? "Lulus" : "Tidak lulus";

    return {
        nama: item.nama,
        rataRata: totalNilai.toFixed(2),
        status: result
    };
})


console.log("Hasil Ujian siswa sd 01", hasilUjian);



