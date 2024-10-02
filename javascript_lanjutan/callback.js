//buat fungsi menyapa dengan setTimeout beberapa detik
function menyapa(nama, sapa) {
    console.log(`memulai proses`)
    //simulasi operasi asyncronous dengan setTimeout
    setTimeout(() => {
        console.log(`halo ${nama}`)

        // panggil fungsi callback setelah sapa
        sapa()
    }, 2000)
}

function selesaiSapa() {
    console.log("selesai sapa")
}


// Memanggil fungsi greet dan mengirimkan fungsi selesai sebagai callback
const eksekusi = menyapa("Egal", selesaiSapa);

console.log(eksekusi);

// latihan ambil data mahasiswa.json 
//1. buat fungsi mengambil data mahasiswa
function getDataMahasiswa() {
    //menggunakan fetch untuk mengambil data
    fetch('mahasiswa.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error response`);
            }
            // convert data ke json
            return response.json();
        })
        .then(userData => {
            console.log('user data:', userData);
        })
        .catch(error => {
            console.log('error:', error);
        })
}

const get = getDataMahasiswa();

console.log(get);

// latihan 2 buat fungsi mengambil data dari matakuliah
function getMatakuliah() {
    // ambil data menggunakan fetch
    fetch('matakuliah.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error response`);
            }
            // ubah data ke json
            return response.json();
        })
        .then(data => {
            const tampilkandata = document.getElementById('matakuliah-list');

            //kosongkan daftar sebelum menambahkan daftar baru
            tampilkandata.innerHTML = '';

            //looping data matakuliah dan menampilkannya di halaman menggunakan forEach
            data.matakuliah.forEach((element) => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${element.nama}</strong> - Dosen: ${element.dosen} (SKS: ${element.sks})`;
                tampilkandata.appendChild(li);

                const objectDosen = { dosen: element.dosen };
                console.log(objectDosen);
            })
        })
        .catch(err => {
            console.log('Error : ', err);
        })
};

//panggil fungsi 
const panggil = getMatakuliah();



