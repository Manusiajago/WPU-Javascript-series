// Mengambil elemen dengan id 'title' byId
const title = document.getElementById('title');

// mengambil elemen dengan class 'box' byClassName
const subTitle = document.getElementsByClassName('sub-title');

// mengambil elemen dengan tag 'p' byTagName
const btn = document.getElementsByTagName('button')

//mengambil menggunakan querySelector
const btnHide = document.querySelector('.btn')

const input = document.getElementById('input')
const btnInput = document.getElementById('btn_input')


console.log(title)
console.log(subTitle)
console.log(btn)
console.log(btnHide)

console.log(input)
console.log(btnInput)


// Manipulasi DOM / Content
title.innerHTML = "<marquee>Belajar DOM Javascript</marquee>"
title.style.color = "red"



subTitle[0].textContent = "Apa itu DOM? #Egal"

//mengubah class 
btnInput.addEventListener('click', () => {
    input.classList.toggle('btn-input')
})

// menambah class
input.classList.add('form-input')
