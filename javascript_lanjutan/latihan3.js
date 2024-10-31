// ambil semua elemen
const myVideoItems = document.querySelectorAll('ul li');
console.log(myVideoItems);

//pilih yg hanya javascript lanjutan
const myVideoItemsArr = Array.from(myVideoItems);
console.log(myVideoItemsArr);

// memilih javascript lanjutan
const javascriptVideos = myVideoItemsArr.filter((video) => {
    return video.textContent.includes('JAVASCRIPT LANJUTAN');
})

console.log(javascriptVideos);

// ambil judul dan atribut
javascriptVideos.forEach((target) => {
    const judul = target.textContent;
    const durasi = target.getAttribute('data-duration');

    console.log(` Judul : ${judul} durasi : ${durasi}`);
})


//ubah durasi menjadi INT , ubah menit menjadi detik
const totalDetik = javascriptVideos.map((target) => {
    const durationInt = target.getAttribute('data-duration');
    const parts = durationInt.split(':').map(Number);
    return (parts[0] * 60) + parts[1];

}).reduce((total, seconds) => { return total + seconds }, 0);

console.log(totalDetik);

// ubah formatnya menjadi jam menit detik
const jam = Math.floor(totalDetik / 3600);
const menit = Math.floor((totalDetik % 3600) / 60);
const detik = totalDetik % 60;

//simpan di dom
const result = (`total durasi : ${jam} jam, total menit : ${menit} menit, total detik : ${detik} detik`);

const totalDurasiElement = document.querySelector('.total-durasi');
totalDurasiElement.textContent = result;



