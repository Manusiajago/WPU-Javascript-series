//contoh implementasi spread operator pada array
const array1 = [1, 2, 3, 4];
const arrCopy = [...array1];

console.log(arrCopy);

//menggabungkan array melakukan kombinasi
const namaMahasiswa = ['Adel', 'Egal', 'Arga', 'Ciblek'];
const namaMahasiswa2 = ["ryan", " Farhan", "Fantri", "Laisa"]

const ArrCombine = [...namaMahasiswa, ...namaMahasiswa2];

console.log(ArrCombine);

//implementasi pada object
const object1 = { nama1: "Egal Assegaf", umur1: 23, jurusan1: "Teknik Informatika" };
const object2 = { nama2: "Tri Syhanda Ade Lia", umur2: 23, jurusan2: "Ilmu Komunikasi" };
const combinedObject = { ...object1, ...object2 };

console.log(combinedObject);

//dari nodeList buat ke Array lalu tampilkan
const daftarNama = document.querySelectorAll('.nama');

const convert = [...daftarNama].map((e) => {
    return e.textContent
})

console.log(convert);

// contoh spread operator dalam array 

const fruits = ['apel', 'mangga', 'melon', 'nanas', 'semangka']
const vegetables = ['bayam', 'bawang', 'sawi', 'brokoli']

const groceries = [...fruits, ...vegetables]
console.log(groceries);

// membuat array salinan tanpa mengubah aslinya

const originalArray = ['mobil', 'motor', 'sendal', 'baju'];
const arrayCopy = [...originalArray];

const getCopied = arrayCopy.push('semangka');

console.log(arrayCopy);

//menggabungkan object
const user = { nama: 'Egal Assegaf', umur: 23 }
const alamat = { kota: 'Jakarta' }

const userProfiled = { ...user, ...alamat };

console.log(userProfiled);