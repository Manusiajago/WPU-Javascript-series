const namaMhs = new Map([
    ['nama', 'Egal Assegaf'],
    ['umur', 24],
    ['jurusan', 'teknik informatika']
]);

for (let [property, value] of namaMhs) {
    console.log(`${property} ${value}`);
}

//contoh penggunaan NodeList
// 1. mengambil semua element class nama
const paragraf = document.querySelectorAll('.nama');

//NodeList dapat diakses layaknya array
console.log(paragraf[0].textContent);

//menggunakan forEach pada NodeList
paragraf.forEach((e, i) => {
    console.log(`${e.textContent} ini adalah nama ke ${i + 1}`)
});

//menggunakan for Of 
for (const e of paragraf) {
    console.log(e.innerHTML);
}

//contoh penggunaan for in pada object

const datas = {
    nama: "Adel",
    jenisKelamin: "Perempuan",
    umur: 24,
    jurusan: "Teknik Informatika"
};

for (key in datas) {