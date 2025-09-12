// gunakan forEach untuk mencetak setiap angka dengan format angka: <nilai>

// 1. cetak angka ini : 
const angkaSaya = [2, 4, 6, 8, 10];

angkaSaya.forEach((value , index) => {
    console.log(`${index}: ${value}`)
})

// 2. buat array buah ini menjadi huruf besar semua
const fruits = ["apel", "jeruk", "mangga"];

const upperCaseFruits = fruits.map((value) => {
    return value.toUpperCase()
})

// 3. mengambil nilai yg lebih besar sama dengan >= dari 70
const nilai = [60, 75, 90, 45, 80];

const lebihBesar70 = nilai.filter((value) => {
    return value >= 70
})

// 4. Hitung total belanja menggunakan reduce()
const belanja = [10000, 20000, 15000, 5000];

const totalBelanja = belanja.reduce((total , item) => {
    return total + item
})



// log
console.log(totalBelanja)
console.log(upperCaseFruits);
console.log(lebihBesar70);