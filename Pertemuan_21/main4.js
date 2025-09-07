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
}
