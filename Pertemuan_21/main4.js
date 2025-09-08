// ambil elemen penting
const todoTitle = document.getElementById('todo-title');
const todoDesc = document.getElementById('todo-desc');
const btnAdd = document.getElementById('btn-add');
const listTodo = document.getElementById('list-todo');

let editMode = null;

// fungsi tambah todo
function addTodo() {
    const title = todoTitle.value.trim();
    const desc = todoDesc.value.trim();

    if (title === "") {
        alert("Title tidak boleh kosong!");
        return;
    }

    if (editMode) {
        editMode.querySelector("h3").textContent = title;
        editMode.querySelector("p").textContent = desc;
        editMode = null;
        btnAdd.textContent = "Tambah"
    } else {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");

        const todoTitleElem = document.createElement("h3");
        todoTitleElem.textContent = title;

        const todoDescElem = document.createElement("p");
        todoDescElem.textContent = desc;

        //buat tombol edit
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("btn-edit");
        editBtn.addEventListener('click', () => {
            editTodo(todoItem);
        });

        //buat tombol hapus
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus";
        deleteBtn.classList.add("btn-delete");
        deleteBtn.addEventListener('click', () => {
            deleteTodo(todoItem);
        });

        //masukkan elemen ke dalam item
        todoItem.appendChild(todoTitleElem);
        todoItem.appendChild(todoDescElem);
        todoItem.appendChild(editBtn);
        todoItem.appendChild(deleteBtn);

        //masukkan ke dalam list
        listTodo.appendChild(todoItem);

        // reset form
        todoTitle.value = "";
        todoDesc.value = "";
    }
}

function editTodo(todoItem) {
    const title = todoItem.querySelector("h3").textContent;
    const desc = todoItem.querySelector("p").textContent;

    todoTitle.value = title;
    todoDesc.value = desc;
    editMode = todoItem;
    btnAdd.textContent = "Simpan"
}

// Fungsi hapus todo
function deleteTodo(todoItem) {
    if (confirm("Yakin ingin menghapus kegiatan ini?")) {
        listTodo.removeChild(todoItem);
        // Bersihkan input field dan textarea
        todoTitle.value = "";
        todoDesc.value = "";
    }
}

// event listener tombol tambah
btnAdd.addEventListener("click", addTodo);

