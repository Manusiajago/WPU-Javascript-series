const siswa = [
  { nama: "Egal", nilai: 85 },
  { nama: "Rudi", nilai: 60 },
  { nama: "Sinta", nilai: 72 },
  { nama: "Budi", nilai: 90 }
];

//cetak semyua pakai forEach()
siswa.forEach((value) => {
    console.log(`Halo ${value.nama} Nilai kamu: ${value.nilai}`);
})

// validasi kelulusan pakai map()
siswa.map((value) => {
    if (value.nilai > 70 ) {
        console.log( `${value.nama} Anda lulus`)
    } else {
        console.log (`${value.nama} Anda tidak lulus`)
    }
})

// gunakan filter() untuk mengambil siswa yg nilainya diatas 70
const greater = siswa.filter((value) => {
    return value.nilai > 70
})



//cari rata rata siswa 
const rata_rata = greater.reduce((avg, value, _, { length } ) => {
    return avg + value.nilai / length
}, 0) 

//log
console.log(greater)
console.log(rata_rata)



