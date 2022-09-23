const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

//* edit option
let editElement;
let editFlag = false;
let editID = '';

//* functions
const addItem = (e) => {
    e.preventDefault();
    let value = grocery.value;
    let id = new Date().getTime().toString();

    if (value && !editFlag) {
        createListElements(id, value);
        //! display alert
        displayAlert('item added to list', 'success');
        //! show container
        container.classList.add('show-container');
        addToLocalStorage(id, value);
        //! set back to default
        setBackToDefault();
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('input value changed', 'success');
        //! edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        displayAlert('input cannot be empty', 'danger');
    }
};

//! deleting items

const deleteItem = (e) => {
    let item = e.currentTarget.parentElement.parentElement;
    id = item.dataset.id;
    list.removeChild(item);
    if (list.children.length === 0) {
        container.classList.remove('show-container');
    };
    displayAlert('Item removed', 'success');
    //! set back to default
    setBackToDefault();
    //! remove from local storage
    removeFromLocalStorage(id);
};

//! editing items

const editItem = (e) => {
    let item = e.currentTarget.parentElement.parentElement;
    //! set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //! set form value
    grocery.value = editElement.innerHTML;
    //! change defaults
    editFlag = true;
    editID = item.dataset.id;
    submitBtn.textContent = 'edit';
};

//! display alerts
const displayAlert = (txt, act) => {
    alert.textContent = txt;
    alert.classList.add(`alert-${act}`);
    //! remove alert
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${act}`);
    }, 4000);
};

//! clearing all items

const clearItems = () => {
    let items = document.querySelectorAll('.grocery-item');

    if (items.length > 0) {
        items.forEach(item => {
            list.removeChild(item);
        })
    };
    container.classList.remove('show-container');
    displayAlert('list emptied', 'success');
    //! set back to default
    setBackToDefault();
    localStorage.removeItem('list');
}

//* event Listeners

form.onsubmit = addItem;
clearBtn.onclick = clearItems;

//* set back to default

const setBackToDefault = () => {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'Submit';
}

//* local storage

const addToLocalStorage = (id, value) => {
    let grocery = { id, value };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
};

const removeFromLocalStorage = (id) => {
    let items = getLocalStorage();
    items = items.filter( item => {
        if (item.id !== id ) {
            return item;
        }
    });
    localStorage.setItem('list', JSON.stringify(items));
};

const editLocalStorage = (id, value) => {
    let items = getLocalStorage();
    items = items.map(item => {
        if (item.id === id) {
            item.value = value;
        };
        return item;
    });
    localStorage.setItem('list', JSON.stringify(items));
};

const getLocalStorage = () => {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
};

//* Setup Items
const setUpItems = () => {
    let items = getLocalStorage();
    if (items.length > 0) {
        items = items.forEach((item) => {
            container.classList.add('show-container');
            createListElements(item.id, item.value);
        });
    };
};
window.addEventListener('DOMContentLoaded', setUpItems);

const createListElements = (id, value) => {
    let element = document.createElement('article');
    element.className = 'grocery-item';
    let attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
						<div class="btn-container">
							<button type="button" class="edit-btn">edit</button>
							<button type="button" class="delete-btn">X</button>
						</div>`;
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');

    deleteBtn.onclick = deleteItem;
    editBtn.onclick = editItem;
    list.appendChild(element);
};