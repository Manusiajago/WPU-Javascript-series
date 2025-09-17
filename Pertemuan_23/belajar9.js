// konsep hoisting, excecution context & scope



// var nama = 'Egal'
// var umur = 24

// console.log(sapa())

// function sapa() {
//     return `Halo ${nama} umur kamu: ${umur} tahun ya? `
// }


function satu() {
    var nama = 'egal'
    console.log(nama)
}

function dua() {
    console.log(nama)
}

console.log(nama)
var nama = 'erik'
satu();
dua('doddy');
console.log(nama)