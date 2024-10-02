// var noAngkot = 1;
// var jmlAngkot = 10;

// for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= 6) {
//     console.log("Angkot No. " + noAngkot + "sedang beroprasi dengan baik");
//   } else if (noAngkot === 8) {
//     console.log("Angkot No. " + noAngkot + "sedang lembur");
//   } else {
//     console.log("Angko No. " + noAngkot + "sedang tidak beroprasi");
//   }
// }

var noAngkot = 1;
var jmlAngkot = 10;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot No. " + noAngkot + " sedang beroprasi");
  } else if (noAngkot === 8) {
    console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else if (noAngkot === 10) {
    console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak dapat beroprasi");
  }
}

