// standar penulisan
function myFunc(a, b, ...c) {
    return `${a} ${b} ${c}`;
};

console.log(myFunc(10, 10, 40, 40, 50));

// //contoh penggunaan rest parameter
// function hitungTotal(...angka) {
//     return angka.reduce((total, curr) => {
//         return total + curr;
//     }, 0)
// };

// console.log(hitungTotal(10, 20, 30, 40, 50));

// //hitung semua angka 
// function hitung(...angka) {
//     return angka.reduce((total, index) => {
//         return total + index;

//     })
// }

// console.log(hitung(10, 10, 20, 30, 40, 50, 40));

//Misalkan kita ingin membuat fungsi yang bisa menerima nama depan dan nama belakang, serta sisa informasi lainnya (misalnya alamat, pekerjaan, dan sebagainya)
function personInfo(nama, jurusan, umur, ...infoLainnya) {
    return `${nama}, ${jurusan}, ${umur}, ${infoLainnya}`;
}

console.log(personInfo("John Doe", "Computer Science", 25, "Street 123", "New York", "Engineer"));


// function penjumlahan(...angka) {
//     //menggunakan for of
//     let total = 0;
//     for (let e of angka) {
//         total += e;
//     }
//     return total;
// }

// console.log(penjumlahan(1, 2, 3, 4, 5));

function penjumlahan(...angka) {
    // let jumlah = 0;
    // for (let e of angka) {
    //     jumlah += e;
    // }
    // return jumlah;

    //menggunakan reduce
    return angka.reduce((total, curr) => {
        return total + curr;
    })
};

console.log(penjumlahan(10, 20, 30, 20, 50));

//implementasi pada object 
const myTeam = {
    projectManager: "Egal Assegaf",
    frontEnd1: "Tri Syhanda Ade Lia",
    frontEnd2: "Rama",
    Backend: "argadwi",
    ux: "salsa",
    devops: "dummy"
};

const { projectManager, ...otherTeam } = myTeam;
console.log(projectManager);


