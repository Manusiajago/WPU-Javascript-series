// function MenghitungVolumeKubus(a, b) {
//     let total;

//     let volumeA = a * a * a;
//     let volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;

// }
// MenghitungVolumeKubus(20, 20);


// function MenghitungLuasPersegiPanjang(panjang, lebar) {
//     let luas = panjang * lebar;

//     return luas;
// }

// function menghitungLuasSegitiga(alas, tinggi) {
//     let hitungLuas = 0.5 * alas * tinggi;

//     return hitungLuas;
// }

// function menghitungLuasLingkaran(radius) {
//     let hitungLuasLingkaran = Math.PI * radius * radius;

//     return hitungLuasLingkaran;
// }



// function pertambahan(a, b) {

//     var hitung = a + b;

//     return hitung
// }

// function perkalian(a, b) {

//     var kali = a * b;

//     return kali;
// }

// var tampilHasil = perkalian(pertambahan(10, 10), pertambahan(10, 10));

// console.log(tampilHasil);

// function hitungUsia(thnLhr) {

//     var thnskrg = new Date().getFullYear();
//     var kelahiran = thnskrg - parseInt(thnLhr);

//     return kelahiran;


// }

// var inputUser = prompt('Masukkan tahun kelahiran anda :  \n ini adalah program menghitung usia');
// var hitung = hitungUsia(inputUser);

// alert('usia anda adalah' + hitung + "Tahun");

// function menghitungUsia(thnSkrg) {
//     var usiaSekarang = new Date().getFullYear();
//     var usiaKelahiran = parseInt(thnSkrg);

//     var hitungUsia = usiaSekarang - usiaKelahiran;

//     return hitungUsia;
// }

// var userInput = prompt("masukkan usia anda : \n ini adalah program untuk menghitung usia")

// var usia = menghitungUsia(userInput);

// alert("usia anda adalah " + usia + " tahun");

// var ulang = true;

// while (ulang) {
//     function menghitungUsia(thnLhr) {

//         var tahunSekarang = new Date().getFullYear();
//         var tahunKelahiran = parseInt(thnLhr);

//         var hitungUsia = tahunSekarang - tahunKelahiran;

//         return hitungUsia;
//     }

//     ulang++;

//     var inputUser = prompt("Masukkan tahun kelahiran  anda :  \n ini adalah program untuk menghitung usia");
//     var usia = menghitungUsia(inputUser);


//     alert("Usia anda adalah " + usia + " Tahun");
//     ulang = confirm("apakah anda ingin menginput ulang? ");
// }


// function menghitungVolumeKubus(volumeA, volumeB) {
//     var volumeKubusA = volumeA * volumeA * volumeA;
//     var volumeKubusB = volumeB * volumeB * volumeB;

//     hasil = volumeKubusA + volumeKubusB;

//     return hasil;

// }

// console.log(menghitungVolumeKubus(10, 10));

// latihan kecil membuat fungsi panggil nama
function menyapa(name) {
    var nama = "Halo " + name;
    return nama;
}

// latihan kecil membuat fungsi hitung panjang * lebar
function kalkulasiArea(panjang, lebar) {
    var penjumlahan = panjang * lebar;
    return penjumlahan;

}

// Tulis fungsi isEven yang menerima satu parameter, number. Fungsi ini harus mengembalikan true jika number adalah bilangan genap, dan false jika sebaliknya.

// var hasil = "";
// function isEven(number) {


//     if (number % 2 == 0) {
//         hasil = true;
//     } else if (number % 2 == 1) {
//         hasil = false;
//     } else {
//         hasil = "Bukan bilangan genap dan bukan bilangan ganjil"
//     }

//     return hasil;
// }
// var input = isEven(8)
// var output = "bilangan ini bernilai : " + input;

// console.log(output)

// test arguments
// function test() {
//     return arguments;
// }

// hasil = test(1, 2, 3, 4, 5, "halo", false);

// test variabel arguments tanpa parameter

function test2() {
    var hasil = 1;
    for (var i = 0; i < arguments.length; i++) {
        hasil *= arguments[i];
    }

    return hasil;
}

var kali = test2(1, 2, 3, 4, 5, 5);
console.log(kali);



