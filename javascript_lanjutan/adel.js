const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const jumlahkan = number.map((target) => {
    return target * 2;
})

console.log(jumlahkan);

const cariGenap = number.filter((target) => {
    return target % 2 === 0;
})

console.log(cariGenap);

const animal = ['Gajah', 'semut', 'ular', 'kambing'];
const urutkan = animal.sort();

console.log(urutkan);

// menggabungkan array 
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
const gabung = arr1.concat(arr2);

console.log(gabung);

console.log('Ini adalah isi array 1 : ', arr1);

// mencari elemen di dalam array
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// function cariArr(arr, input) {
//     arr.map((target) => {
//         if (target === input) {
//             console.log(`Angka ${input} ditemukan di dalam array.`);

//         } else {
//             console.log(`Angka ${input} tidak ditemukan di dalam array`);
//         }

//         return;
//     })
// }

// console.log(cariArr(myArr, 0));

// menggunakan push untuk menambahkan di akhir array
const cobaPush = ['Adel', 'Egal', 'Arga', 'Rama'];

//push
function pushArr(str) {
    cobaPush.push(str)
    return cobaPush;
}

//unshift untuk menambahkan di awal elemen array
function unshiftArr(str) {
    cobaPush.unshift(str);
    return cobaPush;
}

// pop untuk mengahpus elemen terakhir
function popArr() {
    cobaPush.pop();
    return cobaPush;
}

console.log(pushArr('Asep')); // menggunakan push untuk menambahkan elemen akhir array 
console.log(unshiftArr('Dika')); // menggunakan unshift untuk menambahkan pada elemen awal array
console.log(popArr()) // menggunakan pop untuk menghapus elemen terakhir array