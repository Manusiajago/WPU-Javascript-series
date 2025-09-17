// contoh callback sederhana
function tampilkanPesan(say) {
    console.log(say)
}

function sapa() {
    tampilkanPesan(`Halo bro`)
}

function berpisah() {
    tampilkanPesan(`Selamat tinggal bro`)
}

function kalkulator(sum1, sum2) {
    let sum = sum1 + sum2;
    return sum
}

let result = kalkulator(5, 10);


tampilkanPesan(`Hasilnya adalah: ${result}`);
berpisah()
sapa()