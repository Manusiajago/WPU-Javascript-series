const angka = [-1, 8, 9, 1, 4, 5, -4, 3, 2, 9];
const kata = ["saya", "ingin", "belajar", "javascript"];

//filter hanya angka genap 
const cekAngkaGenap = angka.filter(function (num) {
    return num % 2 === 0;
});

// mencari angka yang lebih besar dari 3 menggunakan for

// membuat variabel untuk menampung array kosong

//membuat iterasi menggunakan for dan beri validasi jika lebih dari 3 maka push ke dalam array
const hasil = [];
const cariAngkaLebihBesar = function () {

    for (let i = 0; i < angka.length; i++) {
        if (angka[i] >= 3) {
            hasil.push(angka[i]);
        }

    }
    return hasil;
}

const call = cariAngkaLebihBesar();

// mencari angka lebih besar dari 3 menggunakan filter
const mencariAngkaLebihBesarDariTiga = angka.filter((num) => { return num >= 3; })

//kalikan 2 pada setiap isi array
const newArr = angka.map((e) => { return e * 2 });

//kalikan 3 pada setiap isi array
const newArr2 = angka.map(myFunc)

function myFunc(num) {
    return num * 3;
}

// reduce contoh penulisan :
// array.reduce((accumulator, currentValue, index, array) => {
//     // operasi yang dilakukan
// }, initialValue);

const penjumlahanAngka = [1, 2, 3, 4, 5];

const total = penjumlahanAngka.reduce((acc, curr) => {
    return acc + curr;
}, 0)

const mengkalikan = penjumlahanAngka.reduce((acc, curr) => {
    return acc * curr;
}, 1)

const gabungKata = kata.reduce((acc, curr) => {
    return acc + " " + curr;
});



console.log(`berikut adalah angka genap ${cekAngkaGenap}`)
console.log(hasil)
console.log(mencariAngkaLebihBesarDariTiga)
console.log(newArr);
console.log(newArr2);
console.log(`total nya adalah ${total}`);
console.log(mengkalikan);
console.log(gabungKata);


