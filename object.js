// object literal 
// var mahasiswa = {
//     nama: "Egal Assegaf",
//     umur: 22,
//     jurusan: "Teknik informatika ",
//     ipk: [3.33, 3.40, 3.35, 3.60],
//     alamat: {
//         jalan: "Jl.Cempaka Rt 012 Rw 04",
//         kota: "Dki Jakarta",
//         provinsi: "Jakarta Timur"

//     }
// }

// var mygirl = {
//     nama: "Tri syhnda Ade Lia",
//     umur: 21,
//     jurusan: "Ilmu Komunikasi",
//     ipk: [3.50, 3.55, 3.66, 4.0],
//     alamat: {
//         jalan: "Cawang PGC",
//         kota: "DKI Jakarta",
//         provinsi: "Jakarta Timur"
//     }
// }

// var target = {
//     nama: "Andri Septian Albi Runi",
//     umur: 24,
//     pekerjaan: "Freelancer",
//     alamat: {
//         jalan: "Hj Marda",
//         kota: "DKI Jakarta",
//         provinsi: "Jakarta Timur"
//     }
// }

// // belajar menulis function declaration dengan object

// function objectDataPelanggan(nama, nik, alamat, jenisKelamin) {
//     var pelanggan = {};
//     pelanggan.nama = nama;
//     pelanggan.nik = nik;
//     pelanggan.alamat = alamat;
//     pelanggan.jenisKelamin = jenisKelamin;

//     return pelanggan;
// }

// var hasilObject1 = objectDataPelanggan("Egal Assegaf", 202043500768, "JL. CEMPAKA RT 012 RW 04", "Laki-laki")
// var hasilObject2 = objectDataPelanggan("Andri Septian Albi Runi", 202043500761, "JL. CEMPAKA RT 012 RW 04", "Laki-laki")

// // Construktor 
// function PenumpangKereta(Nama, JenisKelamin, Tujuan, NoUrut) {

//     this.Nama = Nama;
//     this.JenisKelamin = JenisKelamin;
//     this.Tujuan = Tujuan;
//     this.NoUrut = NoUrut;
// }

// var penumpang = new PenumpangKereta("Adel", "Perempuan", "Malang", 1);  // memanggil construktor wajib menggunakan new












// membuat objek

//menggunakan function declaration

// function halo() {
//     console.log("halo ")
// }
// halo()

// // menggunakan objek literal
// var mygirl = {};

// mygirl.pacar = function () {
//     console.log("Pacar saya bernama adel")
// }

// mygirl.pacar()

// // menggunakan Construktor

// function Halo() {
//     console.log("halo")
// }

// new Halo()

// function Mygirl(nama) {
//     console.log("halo " + nama)
// }

// new Mygirl("Adel")


// function halo() {
//     console.log(this)
//     console.log("halo")
// }

// this.halo()  //this mengembalikan nilai objek global

// objel literal , menggunakan this

// var mygirl = { Jurusan: "Ilmu Komunikasi", Ipk: 4.0, alamat: "Cawang Uki" };

// mygirl.datas = function (nama) {
//     console.log(this)
//     console.log("Detail Pacar Saya : " + nama)
// }

// mygirl.datas("Tri Syhanda Ade Lia"); //this mengembalikan objek yg bersangkutan

// construktor
// function Halo() {
//     console.log(this)
//     console.log("halo")
// }

// var obj1 = new Halo();
// var obj2 = new Halo();  // this mengembalikan nilai yg baru saja dibuat


// objeck object angkot menggunakan construktor

// function SupirAngkot(nama, trayek, penumpang, kas) {
//     this.nama = nama;
//     this.trayek = trayek;
//     this.penumpang = penumpang;
//     this.kas = kas;

//     // membuat function di dalam object kita sebut method
//     this.penumpangNaik = function (namaPenumpang) {
//         this.penumpang.push(namaPenumpang);
//         return this.penumpang;
//     }

//     this.penumpangTurun = function (namaPenumpang, bayar) {
//         if (this.penumpang.length === 0) {
//             alert("Penumpang masih kosong")
//             return false;
//         }

//         for (var i = 0; i < this.penumpang.length; i++) {
//             if (this.penumpang[i] == namaPenumpang) {
//                 this.penumpang[i] = undefined;
//                 this.kas += bayar;
//                 return this.penumpang;
//             }
//         }
//     }


// }

// var angkot1 = new SupirAngkot("Firmansyah", ["Cibubur", "Munjul"], [], 0);
// var angkot2 = new SupirAngkot("Bianca", ["Ciracas", "Cipayung", [], 0])


// Latihan object

function Bus(supir, tujuan, penumpang, pendapatan) {
    this.supir = supir;
    this.tujuan = tujuan;
    this.penumpang = penumpang;
    this.pendapatan = pendapatan;

    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert("Penumpang ini masih kosong")
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                this.pendapatan += bayar;
                return this.penumpang;
            }
        }
    }
}



var bus1 = new Bus("Bejo", ['jakarta', 'bandung'], [], 0);



