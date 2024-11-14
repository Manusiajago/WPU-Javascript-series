// // membuat array dan loop
// const fruits = ['nanas', 'apel', 'jeruk', 'mangga'];
// const wadah = [];

// for (let i = 0; i < fruits.length; i++) {
//     wadah.push(fruits[i]);
// }

// function pertambahan(a, b) {
//     return a + b;
// }

// const tambah = ((a, b) => {
//     return a + b;
// })

// console.log(pertambahan(2, 2))
// console.log(wadah);

// const tambah2 = tambah(4, 5);
// console.log(`ini hasil pertambahan : ${tambah2}`);

// //mengkalikan setiap angka

// const angkaSaya = [2, 4, 6, 7, 8, 9, 10, 11, 12];
// const kaliDua = angkaSaya.map((target) => {
//     return target * 2;
// })

// console.log(kaliDua);

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const cariGenap = number.filter((x) => {
//     return x % 2 === 0;
// })

// console.log(cariGenap);

// const user = [{ nama: 'Andi', umur: 24 },
// { nama: 'Egal', umur: 26 },
// { nama: 'Adel', umur: 27 },
// { nama: 'bejo', umur: 28 },
// { nama: 'sage', umur: 29 },
// { nama: 'umar', umur: 37 },
// { nama: 'fadil', umur: 40 }
// ];

// const filterUmur = user.filter((target) => {
//     return target.umur > 27;
// })
//     .map((target) => {
//         return target.nama.toUpperCase();
//     })

// console.log(filterUmur);

// const filterUmurDibawah = user.filter((target) => {
//     return target.umur < 28;
// })
//     .map((target) => {
//         return target.nama.toUpperCase();
//     })





// let value = 0;
// function addingValue(addVal) {
//     value += addVal;
//     return value;
// }

// const result1 = addingValue(1)
// const result2 = addingValue(1)
// const result3 = addingValue(1)

// console.log('ini hasilnya : ', result1, result2, result3);

// //implementasi arrayMap()

// const namaMhs = ['fadil', 'rahmat', 'dermawan', 'wjayanto'];
// const convertName = namaMhs.map((target) => {
//     return target.toUpperCase();
// })

// console.log(convertName);

// const siswa = [{ nama: 'Salsabila', jenisKelamin: 'perempuan' },
// { nama: 'Jiee', jenisKelamin: 'perempuan' },
// { nama: 'Adelia', jenisKelamin: 'perempuan' }
// ]

// const getNamess = siswa.map((target) => {
//     return target.nama;
// })

// console.log(getNamess);

// const siswa2 = [
//     { nama: "Andi", nilai: 90 },
//     { nama: "Budi", nilai: 70 },
//     { nama: "Cici", nilai: 85 }
// // ];

// // const status = siswa2.map((target) => ({
// //     ...target, status: target.nilai >= 80 ? 'lulus' : 'Tidak lulus'

// // }))

// // console.log(status);

// // mencari angka yg lebih besar dari 10 

// const myAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 24, 25, 26, 45, 56, 60];

// const getAngka = myAngka.filter((target) => {
//     return target > 10;
// })

// console.log(`ini angka lebih dari 10 : ${getAngka}`);

// const students = [
//     { nama: "Andi", nilai: 90 },
//     { nama: "Budi", nilai: 70 },
//     { nama: "Cici", nilai: 85 },
//     { nama: "Deni", nilai: 60 }
// ];

// const getLulus = students.filter((target) => {
//     return target.nilai >= 80;
// })

// console.log('Daftar siswa yang lulus : ', getLulus);

// const myNumber2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 24, 25, 26,]

// const getGenap2 = myNumber2.filter((target) => {
//     return target % 2 === 0;
// })

// const getGanjil2 = myNumber2.filter((target) => {
//     return target % 2 === 1;
// })

// console.log('Ini adalah deretan angka genap : ', getGenap2);
// console.log('Ini adalah deretan angka ganjil : ', getGanjil2);


//menyaring string yg mengandung huruf A
const names = ['Adel', 'Arga', 'Farhan', 'Salsa'];

const filterNames = names.filter((target) => {
    return target.includes('A');
})

const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function getProductsByCategory(products, category) {
    /**
      * TODO:
      * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
      */
    return products.filter((product) => {
        return product.category === category;
    })
}



function findProductById(products, id) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
     * 
     */

    return products.find((product) => {
        return product.id === id;
    })
}

function calculateTotalPrice(products) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk menghitung total harga semua produk.
     */

    return products.reduce((total, product) => {
        return total + product.price;
    }, 0)
}

function applyDiscount(products, discount) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan array baru,
     * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
     */
    return products.map((product) => ({
        ...product,
        price: product.price - (product.price * discount / 100)
    }));
}

console.log(getProductsByCategory(sampleProducts, 'Electronics')); // Should return products with id 1 and 2
console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3




