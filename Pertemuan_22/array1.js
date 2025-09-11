// array method 

// 1. array length
// - Fungsi nya untuk mengetahui panjang data
const buah1 = ['apel' , 'jeruk' , 'mangga' , 'pisang']
let panjangDataBuah1 = buah1.length;

const namaSiswa = ['adel' , 'salsa' , 'arga' , 'rama'];
let panjangDataSiswa = namaSiswa.length;

// fungsi push() untuk menambah array di belakang
const namaSiswa1 = ['reza' , 'cici' , 'adel'];
const tambahSiswa1 = namaSiswa1.push('Dirga'); 
const tambahSiswa2 = namaSiswa1.push('ciblek');

// fungsi pop() untuk menghapus array di belakang
const namaSiswa2 = ['adel' , 'salsa' , 'arga' , 'rama'];
const hapusSiswa2 = namaSiswa2.pop();

//fungsi shift() untuk menghapus array di paling pertama
const namaSiswa3 = ['adel' , 'salsa' , 'arga' , 'rama'];
const hapusSiswa3 = namaSiswa3.shift();

// fungsu unshift() untuk menambah item di awal array
const buahBuahan1 = ['apel' , 'jeruk' , 'mangga' , 'pisang'];
const addBuah1 = buahBuahan1.unshift('kelapa');

// fungsi slice() ambil sebagian array tidak mengubah array asli
const buahBuahan2 = ['apel' , 'jeruk' , 'mangga' , 'pisang'];
const buahBuahanSlice2 = buahBuahan2.slice(1 , 3);

// fungsi splice() untuk menambahkan item dimulai dari index 1 argumen pertama dan ke 2 berapa elemen yg ingin dihapus
// argumen berikutnya opsional menambahkan item
// jika argumen ke 2 bernilai 0 maka tidak ada yg dihapus

const buahBuahan3 = ['apel' , 'mangga' , 'jeruk' , 'pisang' , 'lemon'];
const namaPacar = ['adel' , 'siska' , 'erika'];
const buahBuahan3Splice = buahBuahan3.splice(1 , 3 , 'anggur' , 'semangka');
const namaPacarSplice = namaPacar.splice(1 , 2 , 'siska');

//log hasil
// console.log(buahBuahan1);
// console.log(panjangDataBuah1);
// console.log(panjangDataSiswa);
// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);
console.log(buahBuahan3);
console.log(buahBuahan2);
console.log(buahBuahanSlice2);
console.log(namaPacar)