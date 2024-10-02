// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;




//     // return mahasiswa;
// }

function Mahasiswa(nama, energi, umur) {
    this.nama = nama;
    this.energi = energi;
    this.umur = umur;
};

Mahasiswa.prototype.belajar = function (waktu) {
    this.energi -= waktu
    console.log(`${this.nama} sedang belajar, energi: ${this.energi}`);
}

Mahasiswa.prototype.ngopi = function (gelas) {
    this.energi += gelas * 2;
    console.log(`${this.nama} sedang ngopi, energi: ${this.energi}`);
}

// let egal = new Mahasiswa("Egal Assegaf", 100, 23);

// versi class 

class jenisMobil {
    constructor(merk, type, warna, jumlahBensin) {
        this.merk = merk;
        this.type = type;
        this.warna = warna;
        this.jumlahBensin = jumlahBensin;
    }

    berjalan(bensin) {
        this.jumlahBensin -= bensin;
        return `mobil sudah di pakai berjalan jalan dan sisa bensinnya adalah ${this.jumlahBensin}`;
    }

}

const pajero = new jenisMobil("pajero", "B", "Hitam", 100)
