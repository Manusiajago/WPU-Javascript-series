// // closures

// function init() {
//     let nama = 'Egal Assegaf'

//     function tampilkanNama() {
//         console.log(nama)
//     }

//     tampilkanNama()
// }

// init()

function luar() {
    let nama = "Egal";

    function dalam() {
        console.log("Halo " + nama);
    }

    return dalam;
}

let panggil = luar();
panggil()

