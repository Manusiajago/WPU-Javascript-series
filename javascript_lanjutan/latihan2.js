// ambil semua element
const myVideo = document.querySelectorAll('ul li');

// pilih hanya yang 'javascript lanjutan'
const videoArr = Array.from(myVideo);

//ambil durasi masing2 video
const javascriptAdvancedVideo = videoArr.filter((video) => {
    return video.textContent.includes('JAVASCRIPT LANJUTAN');
})

javascriptAdvancedVideo.forEach((video) => {
    const title = video.textContent;  // ambil judul video
    const getDuration = video.getAttribute('data-duration');
    console.log(`judul : ${title} data duration: ${getDuration}`)
})
//ubah durasi menjadi int, ubah menit menjadi detik
const totalDetik = javascriptAdvancedVideo.map((video) => {
    const duration = video.getAttribute('data-duration');
    const parts = duration.split(':').map(Number) // memisahkan jadi [11, 18]
    return (parts[0] * 60) + parts[1]; //ubah menit ke detik dan tambahkan detiknya
}).reduce((total, seconds) => { return total + seconds }, 0); // menjumlahkan semua durasi dalam detik menggunakan reduce()

// ubah formatnya menjadi jam menit detik
const jam = Math.floor(totalDetik / 3600);
const menit = Math.floor((totalDetik % 3600) / 60);
const detik = totalDetik % 60;

//simpan di dom 
const result = (`total durasi : ${jam} jam, total menit : ${menit} menit, total detik : ${detik} detik`);

const totalDurasiElement = document.querySelector('.total-durasi');
totalDurasiElement.textContent = result;

