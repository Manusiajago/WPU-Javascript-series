const methodMahasiswa = {
    belajar: function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama} selamat belajar, kamu telah meghabiskan waktu ${jam} jam`);
    },

    tidur: function (waktu) {
        this.energi += waktu;
        console.log(`Halo ${this.nama} selamat tidur dan energi kamu bertambah ${this.energi}`)
    },

    mainGame: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, kamu sedang main game dan energi kamu berkurang ${this.energi}`);
    },

    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, kamu sedang makan dan energi kamu bertambah ${this.energi}`);
    }
}


function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    // mahasiswa.belajar = methodMahasiswa.belajar;
    // mahasiswa.tidur = methodMahasiswa.tidur;
    // mahasiswa.mainGame = methodMahasiswa.mainGame;
    // mahasiswa.makan = methodMahasiswa.makan;



    return mahasiswa;
}


const animalBehaviour = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`hewan jenis ${this.namaHewan}, dan energinya bertambah ${this.energi}`);
    },

    tidur: function (jam) {
        this.energi += jam;
        console.log(`hewan jenis ${this.namaHewan}, dan energinya bertambah${this.energi}`);
    },

    berburu: function (target) {
        this.energi -= target;
        console.log(`hewan jenis ${this.namaHewan}, dan energinya berkurang ${this.energi}`);
    }

};

function jenisHewan(namaHewan, jenis, energi) {
    let hewan = Object.create(animalBehaviour);
    hewan.namaHewan = namaHewan;
    hewan.jenis = jenis;
    hewan.energi = energi;

    return hewan;
}

let bobby = jenisHewan("bobby", "Harimau", 100);
let jaki = jenisHewan("jaki", "ular", 100);