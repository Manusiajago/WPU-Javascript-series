datas = [
    {
        nama: 'Egal Assegaf',
        umur: 24,
        alamat: 'Jalan Jendral Sudirman No. 123',
        hobi: ['Coding', 'Renang']
    },
    {
        nama: 'Rudianto',
        umur: 22,
        alamat: 'Jalan Jendral Sudirman No. 456',
        hobi: ['Coding', 'Bermain Gitar']
    },
    {
        nama: 'Siti Aminah',
        umur: 21,
        alamat: 'Jalan Jendral Sudirman No. 789',
        hobi: ['Coding', 'Membaca']
    }
]

//sorting umur menggunakan sort()
// 1. urutkan umur dari yg terbesar sampai terkecil
const sortDescending = [...datas].sort((a , b) => {
    return b.umur - a.umur  
})

// 2. urutkan dari yg terkecil hingga terbesar
const sortAscending = [...datas].sort((a , b) => {
    return a.umur - b.umur
})

// hanya mengambil nama nya aja
const getNameUser = [...datas].map(item => item.nama)

//cari yg nama nya Egal Assegaf menggunakan find()
const findEgal = [...datas].find((item) => {
    return item.nama === "Egal Assegaf"
})



//log hasil
console.log(sortDescending);
console.log(sortAscending);
console.log({getNameUser});
console.log(findEgal);