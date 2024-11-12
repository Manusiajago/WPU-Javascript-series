// membuat array dan loop
const fruits = ['nanas', 'apel', 'jeruk', 'mangga'];
const wadah = [];

for (let i = 0; i < fruits.length; i++) {
    wadah.push(fruits[i]);
}

function pertambahan(a, b) {
    return a + b;
}

const tambah = ((a, b) => {
    return a + b;
})

console.log(pertambahan(2, 2))
console.log(wadah);

const tambah2 = tambah(4, 5);
console.log(`ini hasil pertambahan : ${tambah2}`);

//mengkalikan setiap angka

const angkaSaya = [2, 4, 6, 7, 8, 9, 10, 11, 12];
const kaliDua = angkaSaya.map((target) => {
    return target * 2;
})

console.log(kaliDua);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const cariGenap = number.filter((x) => {
    return x % 2 === 0;
})

console.log(cariGenap);

const user = [{ nama: 'Andi', umur: 24 },
{ nama: 'Egal', umur: 26 },
{ nama: 'Adel', umur: 27 },
{ nama: 'bejo', umur: 28 },
{ nama: 'sage', umur: 29 },
{ nama: 'umar', umur: 37 },
{ nama: 'fadil', umur: 40 }
];

const filterUmur = user.filter((target) => {
    return target.umur > 27;
})
    .map((target) => {
        return target.nama.toUpperCase();
    })

console.log(filterUmur);

const filterUmurDibawah = user.filter((target) => {
    return target.umur < 28;
})
    .map((target) => {
        return target.nama.toUpperCase();
    })





let value = 0;
function addingValue(addVal) {
    value += addVal;
    return value;
}

const result1 = addingValue(1)
const result2 = addingValue(1)
const result3 = addingValue(1)

console.log('ini hasilnya : ', result1, result2, result3);


