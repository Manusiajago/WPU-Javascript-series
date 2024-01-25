// var penumpang = ["Adel", undefined, "salsa"];

// var tambahPenumpang = function (namaPenumpang, penumpang) {
//     // jika penumpang kosong 
//     if (penumpang.length == 0) {
//         penumpang.push(namaPenumpang)
//         return penumpang;
//     } else {
//         // telusuri kursi dari awal
//         for (var i = 0; i < penumpang.length; i++) {
//             // tambah penumpang di kursi tersebut
//             if (penumpang[i] == undefined) {
//                 penumpang[i] = namaPenumpang;
//                 return penumpang;
//             } else if (i == penumpang.length - 1) {
//                 // Tambah penumpang di akhir array
//                 penumpang.push(namaPenumpang)
//                 return penumpang;
//             }
//         }
//     }
// }

// Remedial 

// var penumpang = ['egal', undefined, 'ciblek'];

// var tambahPenumpang = function (namaPenumpang, penumpang) {
//     // jika angkot kosong 
//     if (penumpang.length == 0) {
//         penumpang.push(namaPenumpang);
//         return penumpang;
//     } else {
//         // telusuri semua array penumpang , mencari nilai array penumpang yang undefined
//         for (var i = 0; i < penumpang.length; i++) {
//             // jika salah satu isi array penumpang undefined maka tambahkan di kursi tersebut
//             if (penumpang[i] == undefined) {
//                 penumpang[i] = namaPenumpang;
//                 return penumpang;
//             } else if (i == penumpang.length - 1) {                // jika i mencapai nilai akhir array - 1 , maka tambahkan penumpang di index terakhir
//                 penumpang.push(namaPenumpang)
//                 return penumpang;
//             } else if (penumpang[i] == namaPenumpang) {
//                 console.log(namaPenumpang + " sudah ada di dalam angkot")   // menangkap jika ada nama yang sama 
//                 return penumpang;
//             }
//         }
//     }
// }

// latihan

var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        // telusuri semua array penumpang
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + " sudah ada di dalam angkot");
                return penumpang;
            }
        }
    }
}


var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log(' penumpang ini masih kosong');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + " tidak ada di dalam angkot")
                return penumpang;
            }
        }
    }
}