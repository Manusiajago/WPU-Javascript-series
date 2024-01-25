var kesempatan = 0;

while (kesempatan < 3) {

    // menangkap pilihan player
    let player = prompt('Tebak Angka 1 - 10 \n dan kesempatan anda hanya 3x');

    // generate pilihan komputer
    let comp = Math.floor(Math.random() * 11);

    // menentukan rules
    let hasil = "";

    if (player == comp) {
        hasil = "Selamat tebakan anda benar"
    } else if (player < comp) {
        hasil = "Ups , pilihan anda hampir benar mari coba lagi"
    } else if (player > comp) {
        hasil = "ups , mungkin pilihan anda kelebihan mari coba lagi"
    } else {
        hasil = "masukkan sesuai rules"
    }

    alert(hasil)
    kesempatan++;

    // tampilkan hasil
    if (kesempatan >= 3) {
        alert(' Jawaban yang benar adalah ' + comp + '')
        let mainLagi = confirm('apakah anda ingin bermain lagi?')
        if (!mainLagi) {
            break;
        } else {
            kesempatan = 0;
        }
    }




}