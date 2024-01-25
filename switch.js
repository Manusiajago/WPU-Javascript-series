var menuMakanan = prompt(
  "Masukkan Menu Makanan Yang Anda Mau : ( Seblak , Esteh , Nasi Goreng , Mie Ayam)"
);

switch (menuMakanan) {
  case "seblak":
    alert("Seblak seharga 15 ribu");
    break;
  case "Esteh":
    alert("Minuman Esteh seharga 8 ribu");
    break;
  case "Nasi Goreng":
    alert("Nasi Goreng Seharga 20 ribu");
    break;
  case "Mie Ayam":
    alert("Mie Ayam Seharga 12  ribu");
  default:
    alert("Anda memasukkan makanan yang lain");
}
