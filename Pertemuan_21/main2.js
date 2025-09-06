const title = document.getElementById('title');
const btn = document.getElementById('myButton');
const btnDefault = document.getElementById('buttonDefault');




console.log(title)
console.log(myButton)

btn.addEventListener('click', function () {
    title.textContent = "Tombol sudah di klik"
    title.style.color = "green"
})

btnDefault.addEventListener('click', function () {
    title.style.color = "black"
    title.textContent = "Coba ubah saya"
})


