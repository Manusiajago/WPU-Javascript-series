var noAngkot = 1;
var jmlAngkot = 10;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 4) {
    console.log("Angkot No. " + noAngkot + " sedang beroprasi dengan baik");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 4) {
    console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi");
  }
}
