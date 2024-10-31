//contoh destructuring assigment membongkar Array
let myArr = [1, 2, 3, 4];

const [a, b, c, d] = myArr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// melewati elemen yg tidak diperlukan

const myFruits = ['apel', 'pisang', 'semangka', 'jeruk', 'nanas'];

const [buahManis, , buahSemangka] = myFruits;
// console.log(buahManis);
// console.log(buahSemangka);

//Destructuring Object
const BiodataSaya = {
    nama: 'Egal Assegaf',
    umur: 24,


}

const { nama, } = BiodataSaya;

// console.log(nama);

const mahasiswa = {
    nama: "Rachel",
    jurusan: "Teknik Informatika",
    kota: "Jakarta"
}

const { nama: fullnama, jurusan, negara = "Indoneisa", kota } = mahasiswa;

console.log(fullnama);
console.log(negara);

const murid = {
    name: "Dewa",
    kelas: "XOA",
    nilai: {
        uas: 80,
        uts: 90,
        kkm: 90
    }
}

const { name, nilai: { uas, uts } } = murid;
console.log(uas);

// Destructuring pada Parameter Fungsi
function displayInformation(nama, jurusan) {
    console.log(`Halo nama saya ${nama} dan jurusan saya ${jurusan}`);
}

const user = { nama: "Egal", jurusan: "Teknik Informatika" };

console.log(user);

const spekLaptop = {
    nama: "Lenovo IdeaPad",
    processor: "Intel Core i5",
    memory: "8GB",
    storage: "1TB SSD"
};

function getInfoLaptop({ nama }) {
    return nama;
}

function getInfoLaptopStorage(target) {
    return target.storage;
}

console.log(getInfoLaptop(spekLaptop));
console.log(getInfoLaptopStorage(spekLaptop));

//destructuring function
function tampilkanProdukInfo({ nama, harga, stock }) {
    console.log(`Nama produk : ${nama}`);
    console.log(`Harga produk : ${harga}`);
    console.log(`stock produk : ${stock}`);
}

const daftarProduk = {
    nama: "Laptop Asus",
    harga: 1500000,
    stock: 20
}

const tampil = tampilkanProdukInfo(daftarProduk);
console.log(tampil);

function membuatUser({ namaUser, umurUser, jenisKelamin, role = 'admin' }) {
    console.log(`user: ${namaUser}, umurUser: ${umurUser}, jenisKelamin: ${jenisKelamin}, role: ${role}`);

}

const userDetail = {
    namaUser: 'Tsadelia',
    umurUser: 23,
    jenisKelamin: 'Perempuan'
}

const getInfoUser = membuatUser(userDetail);
console.log(getInfoUser);


// latihan 1 
function procesOrder({ ProductId, quantity, user: { username, address: { street, city, postalCode } }, paymentMethod }) {
    console.log(`Processing order for product ID: ${ProductId}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Customer: ${username}`);
    console.log(`Shipping to: ${street}, ${city}, ${postalCode}`);
    console.log(`Payment Method: ${paymentMethod}`);
}

const order = {
    ProductId: 101,
    quantity: 10,
    user: {
        username: 'Adel',
        address: {
            street: 'Jln. Gatot Subroto No. 123',
            city: 'Bandung',
            postalCode: '40151'
        }
    },
    paymentMethod: 'paypal'
}


const getOrderInfo = procesOrder(order);
console.log(getOrderInfo);

// latihan 2 

function menghitungPajak(harga, kategori) {
    let pajak;

    switch (kategori) {
        case 'Electronic':
            pajak = 0.15
            break;
        case 'clothing':
            pajak = 0.10
            break;
        case 'food':
            pajak = 0.05
            break;
        default:
            pajak: 0.08
            break;
    }

    return harga * pajak;

}

function displayProductDetails({ id, nama, harga, kategori }) {
    const pajak = menghitungPajak(harga, kategori);
    const totalHarga = harga + pajak

    console.log(`ID Produk: ${id}`);
    console.log(`Nama Produk: ${nama}`);
    console.log(`Harga Produk: ${harga}`);
    console.log(`Kategori: ${kategori}`);
    console.log(`Pajak: ${pajak}`);
    console.log(`Total Harga: ${totalHarga}`);

}


// objek produk 

const produkBarang = {
    id: 102,
    nama: "Samsung galaxy a02",
    harga: 1500000,
    kategori: "Electronic",
};


console.log(displayProductDetails(produkBarang));


const company = {
    name: "Tech Corp",
    address: {
        street: "123 Innovation Drive",
        city: "Techville",
        zipCode: "12345"
    },
    employees: [
        { name: "Alice", role: "Developer" },
        { name: "Bob", role: "Designer" }
    ]
};


// Gunakan destructuring untuk mengambil nama perusahaan dan kode pos (zipCode) dalam satu baris kode.
// Ambil nama dan peran dari karyawan pertama dalam array employees juga menggunakan destructuring.

const { name: companyName, address: { zipCode }, employees: [{ name: firstEmployee, role: firstEmployeRole }] } = company;

console.log(`name : ${companyName}`)
console.log(`alamat : ${zipCode}`)
console.log(`emplyees name :  ${firstEmployee}`)
console.log(`firstEmployee : ${firstEmployeRole}`)




