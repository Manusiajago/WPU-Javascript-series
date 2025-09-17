//cara membuat object di javaScript

// let mahasiswa = {
//     nama: 'Egal',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama} selamat makan`)
//     }
// }


// mahasiswa.makan(2)


//contoh menggunakan function declaration
// const mahasiswa2 = function (nama, energi) {
//     let mahasiswa = {}
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     //method
//     mahasiswa.makan = function makan(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} selamat makan!`)
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama} selamat bermain!`)
//     }

//     mahasiswa.showStatus = function () {
//         return `Energi kamu: ${this.energi}`;
//     }

//     return mahasiswa;

// }


// let adel = mahasiswa2('Adel', 20)
// let egal = mahasiswa2('egal', 30)

// adel.makan(3)
// egal.makan(4)

// adel.main(5)
// egal.main(4)

// console.log(`${adel.showStatus()} ${adel.nama}`)
// console.log(`${egal.showStatus()} ${egal.nama}`)

//contoh menggunakan cosntructor fucntion
const MethodMahasiswa = {
    //method
    makan: function makan(porsi) {
        this.energi += porsi
        console.log(`Halo ${this.nama} selamat makan!`)
    },

    main: function main(jam) {
        this.energi -= jam
        console.log(`Halo ${this.nama} selamat main`)
    },

    showData: function showData() {
        return `Status energi: ${this.energi} Nama: ${this.nama}`
    }
}


const Mahasiswa = function (nama, energi) {
    let mahasiswa = Object.create(MethodMahasiswa)
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa


}

let egal = Mahasiswa('Egal', 30)


