let state = {
    products: [
        {
            id: 1,
            name: "iPhone 15",
            price: 35000,
            category: "Електроніка",
            img: "завантаження (20).jpg",
            createdAt: Date.now() - 10000,
            updatedAt: Date.now()
        },
        {
            id: 2,
            name: "Чайник Smeg",
            price: 8850,
            category: "Дім",
            img: "download.jpg",
            createdAt: Date.now() - 5000,
            updatedAt: Date.now()
        },
        {
            id: 3,
            name: "Джинси класичні",
            price: 850,
            category: "Одяг",
            img: "cher-17-21-356-531.webp",
            createdAt: Date.now() - 1000,
            updatedAt: Date.now()
        }

    ],
    filter: 'all',
    sort: 'createdAt',
    editingId: null
};

const addProd = (list, item) => [...list, item];
const deleteProd = (list, id) => list.filter(p => p.id !== id);
const updateProd = (list, id, data) => list.map(p => p.id === id ? { ...p, ...data, updatedAt: Date.now() } : p);
const calcTotal = (list) => list.reduce((acc, p) => acc + Number(p.price), 0);

function render() {
    const listDiv = document.getElementById('product-list');
    const totalSpan = document.getElementById('total-val');

    let visible = state.filter === 'all' ? state.products : state.products.filter(p => p.category === state.filter);

    visible.sort((a, b) => b[state.sort] - a[state.sort]);

    if (visible.length === 0) {
        listDiv.innerHTML = "<p>Наразі список товарів пустий. Додайте новий товар.</p>";
    } else {
        listDiv.innerHTML = visible.map(p => `
            <div class="card" id="card-${p.id}">
                <img src="${p.img}" alt="${p.name}">
                <h4>${p.name}</h4>
                <p>Ціна: ${p.price} грн</p>
                <p><small>${p.category} (id: ${p.id})</small></p>
                <button onclick="openEdit(${p.id})">Редагувати</button>
                <button onclick="handleDelete(${p.id})">Видалити</button>
            </div>
        `).join('');
    }

    totalSpan.innerText = calcTotal(visible);
    renderFilterBtns();
}

function renderFilterBtns() {
    const cats = [...new Set(state.products.map(p => p.category))];
    document.getElementById('filter-btns').innerHTML = cats.map(c =>
        `<button onclick="state.filter='${c}'; render()">${c}</button>`
    ).join('');
}

function handleDelete(id) {
    const card = document.getElementById(`card-${id}`);
    card.classList.add('remove-anim');
    setTimeout(() => {
        state.products = deleteProd(state.products, id);
        render();
        showToast("Товар видалено успішно!");
    }, 400);
}

function handleFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('edit-id').value;
    const data = {
        name: document.getElementById('p-name').value,
        price: document.getElementById('p-price').value,
        category: document.getElementById('p-cat').value,
        img: document.getElementById('p-img').value
    };

    if (id) {
        state.products = updateProd(state.products, Number(id), data);
        showToast(`Оновлено: ${id} - ${data.name}`);
    } else {
        const newP = { ...data, id: Date.now(), createdAt: Date.now(), updatedAt: Date.now() };
        state.products = addProd(state.products, newP);
        showToast("Товар додано!");
    }
    toggleModal(false);
    render();
}

function openEdit(id) {
    const p = state.products.find(x => x.id === id);
    document.getElementById('edit-id').value = p.id;
    document.getElementById('p-name').value = p.name;
    document.getElementById('p-price').value = p.price;
    document.getElementById('p-cat').value = p.category;
    document.getElementById('p-img').value = p.img;
    document.getElementById('modal-title').innerText = "Редагувати";
    toggleModal(true);
}

function toggleModal(show) {
    document.getElementById('modal').style.display = show ? 'flex' : 'none';
    if (!show) document.getElementById('prod-form').reset();
}

function resetFilters() { state.filter = 'all'; render(); }
function setSort(key) { state.sort = key; render(); }

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerText = msg;
    container.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}

render();