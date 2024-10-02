// var noAngkot = 1;
// var jmlAngkot = 10;
// var angkotBeroprasi = 6;

// while (noAngkot <= angkotBeroprasi) {
//   console.log("angkot No. " + noAngkot + " dengan baik");

//   noAngkot++;
// }

// for (angkotBeroprasi = 7; angkotBeroprasi <= jmlAngkot; angkotBeroprasi++) {
//   console.log("Angkot No. " + angkotBeroprasi + " sedang tidak beroprasi");
// }

var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroprasi = 6;

while (noAngkot <= angkotBeroprasi) {
  console.log("angkot No. " + noAngkot + " beroprasi dengan baik");

  noAngkot++;
}

for (noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkor No. " + noAngkot + " sedang tidak bisa beroprasi");
}
