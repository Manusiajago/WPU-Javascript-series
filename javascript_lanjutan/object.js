// // object literal
// // let mahasiswa = {
// //     nama: "Egal Assegaf",
// //     jurusan: "Teknik Informatika",
// //     energi: 50,
// //     belajar: function (jam) {
// //         this.energi = this.energi -= jam
// //         console.log(`selamat belajar ${this.nama} dan experience kamu bertambah kamu menghabiskan waktu hingga ${jam} jam `)
// //     }
// // }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.belajar = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama} selamat belajar, kamu telah meghabiskan waktu ${jam} jam`);
//     }

//     mahasiswa.tidur = function (waktu) {
//         this.energi += waktu;
//         console.log(`Halo ${this.nama} selamat tidur dan energi kamu bertambah ${this.energi}`)
//     }

//     return mahasiswa;
// }



// // constructor function
// function Mahasiswa(nama, energi) {

//     this.nama = nama;
//     this.energi = energi;

//     this.belajar = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama} selamat belajar, kamu telah meghabiskan waktu ${jam} jam`);
//     }

//     this.tidur = function (waktu) {
//         this.energi += waktu;
//         console.log(`Halo ${this.nama} selamat tidur dan energi kamu bertambah ${this.energi}`)
//     }

// }

// let egal = new Mahasiswa("Egal Assegaf", 100);

// object literal 

const namaSiswa = {
    nama: "Egal Assegaf",
    umur: 23,
    jurusan: "Teknik informatika",
    menyapa: function () {
        console.log(`Hello nama saya ${this.nama}`);
    }
}

const dataMobil = {
    brand: "Toyota",
    model: "corolla",
    year: "2017",
    getCarInfo: function () {
        console.log(`merk mobil ${this.brand} modelnya ${this.model} tahun : ${this.year}`);
    }
}

//best practice 
const pacarSaya = "Adel";
const umur = 23;

const pacarku = {
    pacarSaya,
    umur,
    sayHello: function () {
        console.log(`Halo nama saya ${this.pacarSaya}, umurku ${this.umur}`);
    }
}


const kendaraanSaya = {
    jenis: "Mobil",
    bensin: 20,
    merk: "mercy",
    tahun: 2015,
    berkendara: function (liter) {
        this.bensin = this.bensin - liter
        console.log(`Mobil saya ${this.merk} sedang berkendara dengan bensin ${this.bensin} liter`);
    }
}

//menggunakan function declaration
function membuatMahasiswa(nama, umur, jurusan) {
    return {
        nama: nama,
        umur: umur,
        jurusan: jurusan,
        sayHello: function () {
            console.log(`Hello nama saya adalah ${this.nama} umur saya ${this.umur} saya jurusan ${this.jurusan}`)
        }
    }
}


// membuat object baru dengan fungsi
const mahasiswa1 = membuatMahasiswa("Adel", 23, "Ilmu Komunikasi");
const mahasiswa2 = membuatMahasiswa("Egal", 23, "Teknik informatika");


//studi kasus membuat catatan peminjaman buku
// menggunakan function declaration

function buatCatatanPeminjaman(judulBuku, namaPeminjam, tanggalPengembalian) {
    return {
        judulBuku: judulBuku,
        namaPeminjam: namaPeminjam,
        tanggalPengembalian: tanggalPengembalian,

        // method untuk memperpanjang tanggal pengembalian
        perpanjangTanggalPengembalian: function (tanggalBaru) {
            this.tanggalPengembalian = tanggalBaru;
            return `Tanggal pengembalian judul buku ${this.judulBuku} diperpanjang hingga ${this.tanggalPengembalian}`
        },

        // method untuk mendapatkan informasi
        dapatkanInformasi: function () {
            return `Buku : ${this.judulBuku} \n peminjam : ${this.namaPeminjam} \n tanggal : ${this.tanggalPengembalian}`
        }
    }
}

//membuat catatan peminjaman baru

const pinjaman1 = buatCatatanPeminjaman("Atomic habbit", "Egal", "2024-10-30");

function orang(nama, energi) {
    let person = {};
    person.nama = nama;
    person.energi = energi;

    person.ngopi = function (gelas) {
        this.energi += gelas;
        console.log(`${this.nama} sedang ngopi, energi: ${this.energi}`);
    }

    return person;
}

let orang1 = orang("Egal", 50);


// soal 1 

function Pelajar(nama, kelas, nilai) {
    this.nama = nama;
    this.kelas = kelas;
    this.nilai = Array.isArray(nilai) ? nilai : [];

    //menambah nilai baru
    this.tambahNilai = function (tambahNilaiBaru) {
        this.nilai.push(tambahNilaiBaru);
        console.log(`${this.nama} berhasil menambah nilai, sekarang nilainya ${this.nilai.join(',')}`);
    }

    // menghitung rata rata nilai
    this.menghitungRataRata = function () {
        let totalNilai = 0;
        for (let i = 0; i < this.nilai.length; i++) {
            totalNilai += this.nilai[i]
        }
        return totalNilai / this.nilai.length;

    }

    this.tampilkanInformasi = function () {
        console.log(`Nama: ${this.nama}, Kelas: ${this.kelas}, Nilai: ${this.nilai.join(', ')}`);
    }


}

let pelajar1 = new Pelajar("Andi", "12A", [85, 90, 88]);


// done

//implementasi object.create()

// mendefinisikan object kendaraan sebagai prototype
const kendaraan = {
    jenis: "Umum",
    beroprasi: function () {
        console.log(`${this.merk} ${this.model} sedang beroprasi`);
    },
    tampilkanInformasi: function () {
        console.log(`Jenis: ${this.jenis}, Merk: ${this.merk}, Model: ${this.model}, Tahun : ${this.tahun}`);
    }
}

const kendaraanRodaDua = {
    jenis: "Umum",
    beroprasi: function () {
        console.log(`${this.merk} ${this.model} sedang beroprasi`);
    },
    tampilkanInformasi: function () {
        console.log(`Jenis: ${this.jenis}, Merk: ${this.merk}, Model: ${this.model}, Tahun : ${this.tahun}`);
    }
};

//menggunakan object.create untuk membuat object mobil
const mobil = Object.create(kendaraan);
mobil.merk = "Toyota";
mobil.model = "Avanza";
mobil.tahun = 2005;
mobil.jenis = "Mobil";

//menambahkan metode khusus untuk object mobil
mobil.melaju = function () {
    console.log(`${this.merk} ${this.model} sedang melintas`);
}

//menggunakan object.create() untuk membuat object motor
const motor = Object.create(kendaraanRodaDua);
motor.merk = "Honda";
motor.model = "Vario";
motor.tahun = 2005;
motor.jenis = "Motor";

//menambahkan metode khusus untuk object motor
motor.melintas = function () {
    console.log(` ${this.merk} sedang melintas`);
}
