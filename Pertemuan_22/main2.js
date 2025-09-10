// bermain dengan method array includes

//contoh
const buahBuahan = ['apel' , 'pisang' ,'semangka' ,'jeruk' , 'mangga' , 'anggur' ];

// penggunaan method includes
const isApple = buahBuahan.includes('apel');
const isOrange = buahBuahan.includes('jeruk');
const isSemangka = buahBuahan.includes('semangka');

//penggunaan method indexOf()
const posisiSemangka = buahBuahan.indexOf('semangka');

//penggunaan method shift() dan pop()
const buahAwal = buahBuahan.shift();
const buahTerakhir = buahBuahan.pop();


// log dengan validasi
if(isSemangka) {
    const indexAfter = posisiSemangka + 1;
    const indexBefore = posisiSemangka - 1;

    const buahAfter = buahBuahan[indexAfter];
    const buahBefore = buahBuahan[indexBefore];

    console.log(`posisi buah sebelum semangka adalah ${buahBefore} & posisi buah setelah semangka adalah ${buahAfter}`);
    console.log(`posisi semangka berada di ${posisiSemangka} setelah buah ${buahBefore}`);
} else {
    console.log(`Tidak ditemukan`)
}


//log
console.log(isApple);
console.log(isOrange);
console.log(buahAwal);
console.log(buahTerakhir);

console.log(posisiSemangka)