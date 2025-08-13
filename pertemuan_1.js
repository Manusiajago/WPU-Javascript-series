const ubahDemo = document.getElementById("demo");
const btn = document.getElementById("btn");
const titleH2 = document.getElementById("title_h2");

// bermain lampu cetrek
const lampu = document.getElementById("lampu");
const btnLampuOn = document.getElementById("btn_lampu_on");
const btnLampuOff = document.getElementById("btn_lampu_off");
const btnLampuHide = document.getElementById("btn_lampu_hide");
const btnLampuShow = document.getElementById("btn_lampu_show");

// Tampilkan pesan
const paragraf = document.getElementById('show_paragraf');
const paragraf_2 = document.getElementById('show_paragraf_2');
const btnShowParagraf = document.getElementById('showParagraf_1');
const btnShowParagraf2 = document.getElementById('showParagraf_2');

btn.addEventListener('click', function () {
    ubahDemo.innerHTML = "Selamat datang di pertemuan 1 yang telah diubah!";
    titleH2.innerHTML = "Judul H2 telah diubah!";
    titleH2.style.color = "blue";
})

btnLampuOn.addEventListener('click', function () {
    lampu.src = "assets/lamp_on.jpeg";

    alert("Lampu menyala!");
})

btnLampuOff.addEventListener('click', function () {
    lampu.src = "assets/lamp_off.jpeg";

    alert("Lampu mati!");
})

btnLampuHide.addEventListener('click', function () {
    lampu.style.display = "none";
})

btnLampuShow.addEventListener('click', function () {
    lampu.style.display = "block";
})

// Menampilkan paragraf
btnShowParagraf.addEventListener('click', function () {
    paragraf.innerHTML = "Hello, saya Egal Assegaf, saya mahasiswa dari Universitas Gunadarma. Saya sedang belajar JavaScript dan ini adalah pertemuan pertama saya!";
})

btnShowParagraf2.addEventListener('click', function () {
    paragraf_2.innerText = "Ini adalah paragraf kedua yang ditampilkan setelah tombol diklik. Saya sangat antusias untuk belajar lebih banyak tentang JavaScript dan mengembangkan keterampilan saya dalam pemrograman web!";
})

document.write('Halo, testing')
window.alert('Selamat datang di pertemuan 1!');
