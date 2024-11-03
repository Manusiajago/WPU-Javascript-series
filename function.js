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


function convertCelciusToFahrenheit(suhu) {
    const fahrenheit = 9 / 5 * suhu + 32;
    return fahrenheit;
}

console.log(convertCelciusToFahrenheit(60))

const convertCeltoFahr = function (temp) {
    return (9 / 5) * temp + 32;
}

const result = convertCeltoFahr(60);

console.log('Hasilnya adalah : ', result);

function checkGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (typeof grades[i] !== 'number') {
            throw new Error('Invalid input. Please provide an array of numbers.');
        }

        const grade = grades[i];
        let predicate;

        if (grade >= 90) {
            predicate = 'A';
        } else if (grade >= 80) {
            predicate = 'B';
        } else if (grade >= 70) {
            predicate = 'C';
        } else if (grade >= 60) {
            predicate = 'D';
        } else {
            predicate = 'E';
        }

        console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
    }
}

try {
    const studentGrades = [95, 85, 65, 80, 70];
    checkGrades(studentGrades);
} catch (e) {
    console.error(e);
}








function categorizeNumber(input) {

    if (typeof input === 'number') {
        throw new Error('Invalid input. Please provide an array of numbers.');
    }

    // cek untuk nol
    if (input === 0) {
        return 'Nol';
    }

    //cek untuk bilangan Negatif
    if (input < 0) {
        return 'Negatif';
    }

    //cek untuk bilangan Genap
    if (input % 2 === 0) {
        return 'Genap';
    }

    // cek bilangan Prima 
    let isPrime = true;
    if (input > 1) {
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
    } else {
        isPrime = false;
    }

    if (isPrime) {
        return "Prima";
    }

    // Jika bilangan ganjil
    return "Ganjil";




    /**
     * TODO:
     * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
     * Dengan ketentuan sebagai berikut:
     * 1. Jika input bukan number, bangkitkan (throw) error.
     * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
     * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
     * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
     * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
     * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
     */
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
    categorizeNumber('abc');
} catch (error) {
    console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"





