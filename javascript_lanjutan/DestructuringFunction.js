// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }

// // const penambahan = penjumlahanPerkalian(2, 5)[0];
// // const perkalian = penjumlahanPerkalian(2, 5)[1];

// // menggunakan teknik destructuring
// const [jumlah, kali] = penjumlahanPerkalian(2, 5);

// console.log(jumlah);
// console.log(kali);

// function kalkulasi

// function kalkulasi(a, b) {
//     return [a + b, a / b, a * b, a - b]
// }

// const [tambah, bagi, kali, kurang,] = kalkulasi(2, 5);
// console.log(tambah);
// console.log(bagi);
// console.log(kurang);
// console.log(kurang);

// contoh menggunakan object

function kalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b,

    };
};

const { tambah, kurang, kali, bagi } = kalkulasi(2, 4);
console.log(tambah);

const dataSaya = {
    nama: "Egal Assegaf",
    umur: 24,
    jurusan: "Teknik Informatika",
    email: "egalassegaf@gmail.com",
    nilai: {
        uas: 80,
        uts: 90,
        kkp: 90
    }
};

function cetakData({ nama, umur, nilai: { uas, uts, kkp } }) {
    return `halo nama saya ${nama} umur saya ${umur} dan nilai uts saya ${uts}`
}

console.log(cetakData(dataSaya));

const dataMotor = {
    merk: "Honda",
    model: "Civic",
    warna: "Putih",
    tahun: 2020,
    cc: 125,
    harga: 15000000,
    alamat: {
        jalan: "Jl. Cipulir No. 123",
        kota: "Bandung",
        provinsi: "Jawa Barat"
    }
};

function tampilkanDataMotor({ merk, model, warna, tahun, cc, harga, alamat: { jalan, kota, provinsi } }) {
    return `Merk Motor: ${merk}, Model: ${model}, Warna: ${warna}, Tahun: ${tahun}, CC: ${cc}, Harga: ${harga}, Alamat: ${jalan}, ${kota}, ${provinsi}`
}

console.log(tampilkanDataMotor(dataMotor));
