// // const coba = ["satu", "dua", "tiga"];

// // const [a, b, c] = coba;
// // console.log(a);

// const namaMahasiswa = ['Egal', 'Rama', 'Bila', 'Arga', 'Salsa'];
// const [a, b, c, d, e] = namaMahasiswa;   //destruction assignment

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // const angka = [1, 2, 3, 4, 5]
// // const [x, , y] = angka;  //skip 

// // console.log(x);
// // console.log(y);

// // destruction assigment pada objek
// const Mahasiswa = {
//     nama: "Egal Assegaf",
//     umur: 24,
//     jurusan: "Teknik Informatika"
// };

// const { nama, umur, jurusan } = Mahasiswa;

// console.log(nama);
// console.log(umur);
// console.log(jurusan);

// //menggunakan rest parameter
// const namaFilm = ['upinIpin', 'superman', 'ironman', 'batman'];
// const [x, y, ...z] = namaFilm;

// console.log(x)
// console.log(y)
// console.log(z)

//destruction pada array tanpa deklarasi 

// let a, b;

// [a, b] = [10, 20];

let a, b;

[a, b] = [10, 20];


// console.log(a);
// console.log(b);


// // destructuring pada object tanpa deklarasi
// ({ nama, umur, jurusan } = { nama: 'Egal Assegaf', umur: 24, jurusan: 'Teknik Informatika' })


// // console.log(nama);
// // console.log(umur);
// // console.log(jurusan);

// // pada banyak objek
// const motor1 = {
//     merk: 'Honda',
//     tipe: 'CBR150',
//     cc: 150
// };

// const motor2 = {
//     merk: 'Yamaha',
//     tipe: 'YZF-R1',
//     cc: 125
// };

// const motor3 = {
//     merk: 'Kawasaki',
//     tipe: 'Ninja 1200RR',
//     cc: 1200
// };

// // lalu kita melakukan destructuring untuk mendapatkan nilai dari masing-masing objek, seperti ini:

// const { merk: merk1, tipe: tipe1, cc: cc1 } = motor1;
// const { merk: merk2, tipe: tipe2, cc: cc2 } = motor2;
// const { merk: merk3, tipe: tipe3, cc: cc3 } = motor3;

// // menggunakan rest parameter
// const motors = [motor1, motor2, motor3];

// // Destructuring dan menggunakan rest parameter untuk mengambil sisa motor
// const [firstMotor, ...remainingMotor] = motors;

// console.log(merk1, tipe1, cc1); // Output: Honda CBR150R 150
// console.log(merk2, tipe2, cc2);
// console.log(merk3, tipe3, cc3);

// // debugging rest parameter
// console.log(firstMotor);
// // console.log(remainingMotor);

// function TampilkanMotor(merk, tipe, cc) {
//     return `Merk ${merk} , tipe ${tipe}, cc ${cc}`;
// }

// console.log(TampilkanMotor(merk1, tipe1, cc1));

// //mengambil field pada object, setelah dikirm sebagai parameter untuk function

// const dataSaya = {
//     nama: "Egal Assegaf",
//     id: 202043500768,
//     jurusan: "Teknik Informatika",
//     email: "egalassegaf@gmail.com"
// };

// function getData({ nama, id, jurusan, email }) {
//     return { nama, id, jurusan };
// };

// console.log(getData(dataSaya)); // Output: Egal Assegaf

// const mahasiswa = {
//     nama: "Egal Assegaf",
//     umur: 23,
//     jurusan: "Teknik Informatika",
// };

// //destructuring assignment

// const { nama, umur, jurusan } = mahasiswa;


// destructuring pada object tanpa deklarasi
({ nama, umur, jurusan } = { nama: 'Egal Assegaf', umur: 24, jurusan: 'Teknik Informatika' })



// console.log(nama);
// console.log(umur);
// console.log(jurusan);


//destructuring pada array
const namaArr = ['Egal', 'salsa', 'adel', 'bila'];

const [nama1, nama2, nama3, nama4] = namaArr;

console.log(nama1)
console.log(nama2)
console.log(nama3)
console.log(nama4)

// destructuring dengan default values
const namaHewan = {
    jenis: "Harimau",
    berat: 80,
    warna: "Kuning"
};

const { jenis, berat, warna, behaviour = "pemburu" } = namaHewan;

console.log(behaviour);

const personData = {
    nama: "Egal Assegaf",
    jurusan: "Teknik Informatika",
    umur: 23,
    alamat: {
        jalan: "Jln. Gatot Subroto",
        kota: "Jakarta",
        provinsi: "DKI Jakarta"
    }
};

const { nama, jurusan, umur, alamat: { jalan, kota, provinsi } } = personData;

console.log(jalan)
console.log(personData.alamat);

// pada banyak objek
const motor1 = {
    merk: 'Honda',
    tipe: 'CBR150',
    cc: 150
};

const motor2 = {
    merk: 'Yamaha',
    tipe: 'YZF-R1',
    cc: 125
};

const motor3 = {
    merk: 'Kawasaki',
    tipe: 'Ninja 1200RR',
    cc: 1200
};

// lalu kita melakukan destructuring untuk mendapatkan nilai dari masing-masing objek, seperti ini:

const { merk: merk1, tipe: tipe1, cc: cc1 } = motor1;
const { merk: merk2, tipe: tipe2, cc: cc2 } = motor2;
const { merk: merk3, tipe: tipe3, cc: cc3 } = motor3;

// menggunakan rest parameter
const motors = [motor1, motor2, motor3];

// Destructuring dan menggunakan rest parameter untuk mengambil sisa motor
const [firstMotor, ...remainingMotor] = motors;

console.log(merk1, tipe1, cc1); // Output: Honda CBR150R 150
console.log(merk2, tipe2, cc2);
console.log(merk3, tipe3, cc3);

// debugging rest parameter
console.log(firstMotor);
// console.log(remainingMotor);

function TampilkanMotor(merk, tipe, cc) {
    return `Merk ${merk} , tipe ${tipe}, cc ${cc}`;
}

console.log(TampilkanMotor(merk1, tipe1, cc1));

//mengambil field pada object, setelah dikirm sebagai parameter untuk function

const dataSaya = {
    nama: "Egal Assegaf",
    id: 202043500768,
    jurusan: "Teknik Informatika",
    email: "egalassegaf@gmail.com"
};

function getData({ nama, id, jurusan, email }) {
    return { nama, id, jurusan };
};

console.log(getData(dataSaya)); // Output: Egal Assegaf

