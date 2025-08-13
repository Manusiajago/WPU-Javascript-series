console.log('Hello, World!');

// Macam2 Tipe data pada javaScript

// Angka atau Number
let umur = 24;
let tinggi = 170.5;
let berat = 70;
let nilai = 100;

// String atau teks
let nama = "Egal Assegaf";
let alamat = "Jakarta";
let hobi = "coding";
let pesan = "Selamat datang di javaScript";

// Boolean atau true/false
let y = true;
let x = false;

// tipe data objek
const mahasiswa = {
    nama: 'Nurul Hidayah',
    jurusan: 'Teknik Informatika',
    umur: 22,
    alamat: 'Bandung'
}

// tipe data array contoh
const buah = ['apel', 'jeruk', 'mangga', 'pisang'];

// date object
// Ambil paragraf dengan id 'tanggal'
const tanggal = new Date();
const date = document.getElementById('date')
const btnShowDate = document.getElementById('btnShowDate');


//menampilkan tanggal ke html
btnShowDate.addEventListener('click', function () {
    // tampilkan tanggal ke dalam paragraf
    date.innerHTML = `Tanggal hari ini adalah: ${tanggal.toLocaleDateString()}, dan sekarang jam:  ${tanggal.toLocaleTimeString()}`;
})

// javascript boolean
const angka3 = 10
const angka4 = 20

const isTrue = 10;

console.log(angka3 === isTrue)
console.log(angka4 === isTrue)

// contoh membuat Array
const myHandphone = ['iPhone 14', 'Samsung Galaxy S23', 'Google Pixel 7'];

const bool1 = true;
const myNum = 24;
const myString = 'Hello, World!';
const myArr = [1, 2, 3, 4, 5];
const myObj = {
    name: 'Egal Assegaf',
    age: 24,
    isStudent: false
}

console.log(typeof bool1)
console.log('Tipe data ini: ', typeof myNum)

// undefine
let myVar;
console.log(myVar); // Output: undefined



