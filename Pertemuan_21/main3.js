const inputNama = document.getElementById('nama')
const inputChecked = document.getElementById('setuju')
const submitBtn = document.getElementById('submitBtn')

const inputItem = document.querySelector('#itemInput');
const list = document.querySelector('#list')
const addBtn = document.querySelector('#addItem')
const deleteBtn = document.querySelector('#delete')


submitBtn.addEventListener('click', () => {
    console.log(`Nama: ${inputNama.value}`)
    console.log(`Setuju?: ${inputChecked.value}`)

    if (inputNama.value == "") {
        alert("Isi nama terlebih dahulu")
    } else {
        alert(`Halo ${inputNama.value} Terimakasih sudah setuju`)
    }
})


addBtn.addEventListener('click', function () {
    if (inputItem.value == "") {
        alert("Isi item terlebih dahulu")
    } else {
        const liNew = document.createElement('li')
        liNew.textContent = inputItem.value
        list.appendChild(liNew)
    }
})


deleteBtn.addEventListener('click', function () {
    const firstItem = list.firstElementChild;
    if (firstItem) {
        list.removeChild(firstItem);
    } else {
        alert("Tidak ada item untuk dihapus");
    }
})

