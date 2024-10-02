var tanya = true;

while (tanya) {

    // menangkap pilihan player
    var p = prompt("masukkan pilihan : gajah , semut , orang ");

    // generate angka komputer
    var comp = Math.floor(Math.random() * 11);

    // menentukan rules
    if (comp <= 4) {
        comp = "gajah";
    } else if (comp >= 4 && comp >= 7) {
        comp = "semut";
    } else {
        comp = "orang";
    }

    // tentukan hasil

    let hasil = "";

    if (p == comp) {
        hasil = "SERI!";
    } else if (p == "gajah") {
        if (comp == "semut") {
            hasil = "KALAH!";
        } else {
            hasil = "MENANG";
        }
    } else if (p == "semut") {
        if (comp == "gajah") {
            hasil = "MENANG";
        } else hasil = "KALAH";
    } else if (p == "orang") {
        if (comp == "gajah") {
            hasil = "KALAH!";
        } else hasil = "MENANG!";
    } else {
        hasil = "masukkan sesuai rules";
    }

    console.log(
        alert(
            " Anda memilih " +
            p +
            " Dan komputer Memilih " +
            comp +
            " Anda " +
            hasil +
            ""
        )
    );

    tanya = confirm('apakah ingin bermain lagi?');




}

alert('terimakasih sudah bermain')