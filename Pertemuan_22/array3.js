// contoh penggunaan filter()

// 1 . Filter angka genap
const angkaSaya = [2 , 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13];

// 2. Filter siswa yg lulus
const siswa = [
    {nama: 'Egal Assegaf', nilai: 85},
    {nama: 'Tri syhanda Ade LiA', nilai: 60},
    {nama: 'Ramadhan', nilai: 75}
]

// 3. Hitung total belanja
const keranjang = [
  { nama: "Baju", harga: 100000 },
  { nama: "Celana", harga: 150000 },
  { nama: "Sepatu", harga: 300000 }
];



// Hitung total belanja
const totalBelanja = keranjang.reduce((acc , item) => {
    return acc + item.harga;
}, 0)

// filter siswa lulus
const siswaLulus = siswa.filter((value) => {
    return value.nilai >= 70;
})

// filter()
const filterGenap = angkaSaya.filter((value) => {
    return value % 2 === 0;
})

console.log(siswaLulus);
console.log(filterGenap)
console.log(`Total belanja: ${totalBelanja}`)