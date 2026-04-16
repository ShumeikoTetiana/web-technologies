let todos = [
    { id: 1, text: "Вивчити JS", done: false, createdAt: Date.now() },
    { id: 2, text: "Зробити лабу", done: true, createdAt: Date.now() - 5000 }
];
let todoSort = 'createdAt';

const addTask = (list, text) => [...list, { id: Date.now(), text, done: false, createdAt: Date.now(), updatedAt: Date.now() }];
const removeTask = (list, id) => list.filter(t => t.id !== id);
const toggleTask = (list, id) => list.map(t => t.id === id ? { ...t, done: !t.done, updatedAt: Date.now() } : t);
const updateTask = (list, id, text) => list.map(t => t.id === id ? { ...t, text, updatedAt: Date.now() } : t);

function renderTodos() {
    const listUl = document.getElementById('todo-list');
    let sorted = [...todos].sort((a, b) => b[todoSort] - a[todoSort]);

    listUl.innerHTML = sorted.map(t => `
        <li class="item ${t.done ? 'done' : ''}" id="todo-${t.id}">
            <input type="checkbox" ${t.done ? 'checked' : ''} onclick="handleToggle(${t.id})">
            <span contenteditable="true" onblur="handleEdit(${t.id}, this.innerText)">${t.text}</span>
            <button onclick="handleDeleteTodo(${t.id})">✕</button>
        </li>
    `).join('');
}

function addNewTodo() {
    const input = document.getElementById('todo-input');
    if (input.value.trim().length < 2) return;
    todos = addTask(todos, input.value);
    input.value = '';
    renderTodos();
}

function handleToggle(id) {
    todos = toggleTodo(todos, id);
    renderTodos();
}

function handleEdit(id, newText) {
    todos = updateTask(todos, id, newText);
    renderTodos();
}

function handleDeleteTodo(id) {
    const el = document.getElementById(`todo-${id}`);
    el.classList.add('removing');
    setTimeout(() => {
        todos = removeTask(todos, id);
        renderTodos();
    }, 300);
}

function setTodoSort(key) {
    todoSort = key;
    renderTodos();
}

renderTodos();