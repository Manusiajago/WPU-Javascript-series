// contoh higher order function
function kerjakanTugas(nama, callback) {
    console.log(` ${nama} Mulai mengerjakan tugas... `)

    // memanggil fungsi yg dijadikan arguments
    callback();
}

function callbackFunction() {
    console.log("Selesai!")

}

//memanggil higher order function

function repeat(n, action) {
    for (let i = 0; i <= n; i++) {
        console.log(`kerjakan tugas ${[i]}`)
        action(i);
    }
}

repeat(100, console.log);