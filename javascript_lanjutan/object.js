// object literal
// let mahasiswa = {
//     nama: "Egal Assegaf",
//     jurusan: "Teknik Informatika",
//     energi: 50,
//     belajar: function (jam) {
//         this.energi = this.energi -= jam
//         console.log(`selamat belajar ${this.nama} dan experience kamu bertambah kamu menghabiskan waktu hingga ${jam} jam `)
//     }
// }

function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.belajar = function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama} selamat belajar, kamu telah meghabiskan waktu ${jam} jam`);
    }

    mahasiswa.tidur = function (waktu) {
        this.energi += waktu;
        console.log(`Halo ${this.nama} selamat tidur dan energi kamu bertambah ${this.energi}`)
    }

    return mahasiswa;
}



// constructor function
function Mahasiswa(nama, energi) {

    this.nama = nama;
    this.energi = energi;

    this.belajar = function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama} selamat belajar, kamu telah meghabiskan waktu ${jam} jam`);
    }

    this.tidur = function (waktu) {
        this.energi += waktu;
        console.log(`Halo ${this.nama} selamat tidur dan energi kamu bertambah ${this.energi}`)
    }

}

let egal = new Mahasiswa("Egal Assegaf", 100);
