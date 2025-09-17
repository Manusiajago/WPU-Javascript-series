//membuat constructor function

const Mahasiswa = function (nama, umur, energi, jurusan) {
    //properti
    this.nama = nama;
    this.umur = umur;
    this.energi = energi;
    this.jurusan = jurusan;
}

// menggunakan prototype
Mahasiswa.prototype.sapa = function () {
    console.log(`Halo ${this.nama}`)
}

Mahasiswa.prototype.tanyaUmur = function () {
    console.log(`Halo umur saya ${this.umur}`)
}

// method makan tambah energi
Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Selamat makan ${this.nama}`)
}

Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam
    console.log(`Selamat bermain ${this.nama}`)
}

// showStatus energi
Mahasiswa.prototype.showStatus = function () {
    console.log(`Status energi: ${this.energi}, Nama: ${this.nama}`)
}

const egal = new Mahasiswa('Egal', 24, 30, 'Informatika')

// jalankan
egal.sapa();
egal.tanyaUmur();
egal.makan(20);
egal.main(5);
egal.showStatus();