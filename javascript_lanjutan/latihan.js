const namaSaya = namaku => `halo nama saya ${namaku}`;

console.log(namaSaya("Egal Assegaf"));

const penjumlahan = (a, b) => {
    return a * b
}

console.log(penjumlahan(10, 10));

const validasiDewasa = (nama, umur) => {
    if (umur > 18) {
        return `kamu adalah orang dewasa ${nama}`;
    } else {
        return `kamu bukan orang dewasa ${nama}`;
    }
}

console.log(validasiDewasa("Adel", 15));

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dikaliDua = angka.map((index) => {
    return index * 2;
})

const cariGenap = angka.filter((index) => {
    if (index % 2 === 0) {
        console.log(`ini adalah bilangan genap ` + index)
    } else if (index % 2 === 1) {
        console.log(`ini bukan bilangan genap ` + index)
    }

    return;
})

console.log(dikaliDua);
console.log(cariGenap);
