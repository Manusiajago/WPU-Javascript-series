// contoh penggunaan forEeach()

const angka1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const namaSiswa = ['egal' , 'adel' , 'salsa' , 'arga'];



namaSiswa.forEach((value , index) => {
    console.log(`${index + 1}. ${value}`)
})


const hargaBarang = [10000, 20000, 30000, 40000];

const hargaSetelahKenaPajak = hargaBarang.map((value) => {
    return value + (value * 0.1)
})

console.log(hargaSetelahKenaPajak)


// case 
const barang = [
  { nama: "Baju", harga: 100000 },
  { nama: "Celana", harga: 150000 },
  { nama: "Sepatu", harga: 300000 }
];

//membuat array baru berisi diskon 20%
const diskon = barang.map((item) => {
    return {
        nama: item.nama,
        harga_asli: item.harga,
        harga_diskon: item.harga * 0.8
    }
})

console.log(diskon)

//cetak menggunakan forEach
diskon.forEach((item) => {
    console.log(`Nama: ${item.nama} , harga asli: ${item.harga_asli} , harga diskonnya: ${item.harga_diskon}`);
})

