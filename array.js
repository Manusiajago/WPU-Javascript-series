var buah = ['apel', 'jeruk', 'semangka', 'durian'];  // mendeklarasikan array ke sebuah variabel 


var myArr = ['string', 100, true, [1, 2, 3]];

let arrayBaru = [];

arrayBaru[0] = "Egal"
arrayBaru[1] = "Adel"
arrayBaru[2] = "Salsa"           // memasukkan array secara manual 
arrayBaru[3] = "Arga";


// menghapus array menggunakan nilai undefined

arrayBaru[2] = undefined;

// cek kondisi seluruh nilai array menggunakan looping

let mahasiswa = ['egal', 'alfi', 'yunus', 'kiting', 'fadlur', 'rama'];

for (var i = 0; i < mahasiswa.length; i++) {  //menggunakan .length agar mengetahui panjang nilai dari array mahasiswa 
    // console.log("Mahasiswa ke " + i + " : " + mahasiswa[i]);
}



// method join
// 1. join 

let karyawan = ['budi', 'rizal', 'kemal', 'reza'];

console.log(karyawan.join(" , ")) // menggunakan method join() untuk menampilkan nilai array pada variabel karyawan ke dalam console menjadi sebuah string

// push & pop <== javascript method

push
karyawan.push(' ambang', 'fitri');

console.log(karyawan.join(" , "));


// unshift dan shift 

karyawan.unshift('adel', 'herlambang');   //memasukkan nilai baru ke dalam array karyawan namun di baris index awal.
karyawan.shift()  /// menghapus nilai pada array namun pada index awal.

console.log(karyawan.join(" , "));

let mySayur = ['bayam', 'kangkung', 'brokoli']

mySayur.splice(0, 0, 'tomat', 'sop')

console.log(mySayur.join(' , '));


// method forEach

let sahabat = ['adel', 'arga', 'jiee', 'rama', 'bila']

for (var i = 0; i < sahabat.length; i++) {
    console.log(sahabat[i])
}

// menggunakan method forEach
sahabat.forEach(function (e) {
    console.log(e)
})

let motor = ['beat', 'vario', 'vespa', 'nmax'];

motor.forEach(function (e, i) {
    console.log("Motor ke : " + i + " dengan nama :" + e);
})

let angka = [1, 2, 3, 4, 5, 5, 6, 7, 8, 10];
let penjumlahan = angka.map(function (e) {
    return e * 2;
})

console.log(penjumlahan)

// method sort , untuk mengurutkan suatu angka

let angka = [5, 3, 4, 1, 2, 10, 20, 40, 8, 9, 6];

angka.sort(function (a, b) {             // method sort , untuk mengurutkan angka
    return a - b;                        // di dalam parameter angka.sort() terdapat fungsi untuk mengurutkan bilangan.
})

console.log(angka);


// filter 

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let angkaFilter = angka.find(function (e) {
    return e > 3;
})

console.log(angkaFilter);

