const addEl = document.querySelector('.add');
const el = document.querySelector('ul');
const msg = document.querySelector('.msg');
const form = document.querySelector('.form');
const filterOption = document.querySelector('.filter-todo');
const emptyDiv = document.querySelector('.confirmation');


form.addEventListener('submit', (e) => {
    e.preventDefault()
}, false);

addEl.onclick = () => {

    let msgValue = msg.value;

    if (msgValue === '') {
        alert('Enter text')
        msg.select()
        msg.focus()
    } else {

        // div element todo__wrapper

        let todoDiv = document.createElement('div');
        todoDiv.className = 'todo';
        el.appendChild(todoDiv);

        //* li element

        let todoli = document.createElement('li');
        todoli.className = 'todo-item';
        todoli.textContent = msgValue;
        todoDiv.appendChild(todoli);

        //! saves the todo values

        saveLocalTodos(msg.value);

        // create check button

        let check = document.createElement('button');
        check.type = 'checkbox';
        check.className = 'check-btn';
        check.title = 'check item';
        check.innerHTML = '&check;';
        todoDiv.appendChild(check);

        // create delete button
        let del = document.createElement('button');
        del.className = 'del-btn';
        del.title = 'remove from list';
        del.textContent = 'x';
        todoDiv.appendChild(del);

        msg.value = "";
    }
}

/* let close = document.querySelectorAll('.del-btn');
for (let i = 0; i < close.length; i++) {
    close[i].onclick = () => {
        close[i].parentElement.classList.add('fall');
        removeLocalTodos(todo);
        console.log(todo.children[0].innerText);
        setTimeout(
            () => {
                close[i].parentElement.style.cssText = 'display:none'
                close[i].parentElement.remove();
            },
            250
        )
    }
}*/

el.onclick = (e) => {

    let item = e.target;

    if (item.classList[0] === 'del-btn') {
        let todo = item.parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo);
        setTimeout(
            () => {
                todo.remove();
            }, 250
        )
    }

    if (item.classList[0] === 'check-btn') {
        let todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

filterOption.onclick = (e) => {
    let todos = el.childNodes;
    todos.forEach((todo) => {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

const saveLocalTodos = (todo) => {
    //* check if already exits...
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

const getTodos = () => {
    //* check if already exits...
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach((todo) => {
        // div element todo__wrapper

        let todoDiv = document.createElement('div');
        todoDiv.className = 'todo';
        el.appendChild(todoDiv);

        // li element

        let todoli = document.createElement('li');
        todoli.className = 'todo-item';
        todoli.textContent = todo;
        todoDiv.appendChild(todoli);

        // create check button

        let check = document.createElement('button');
        check.type = 'checkbox';
        check.className = 'check-btn';
        check.title = 'check item';
        check.innerHTML = '&check;';
        todoDiv.appendChild(check);

        // create delete button
        let del = document.createElement('button');
        del.className = 'del-btn';
        del.title = 'remove from list';
        del.textContent = 'x';
        todoDiv.appendChild(del);
    });
}
document.addEventListener('DOMContentLoaded', getTodos);

const removeLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

const toggleClearCancel = (e) => {
    let item = e.target;
    let itemParent = item.parentElement;
    if (item.classList[0] === 'empty-btn') {
        itemParent.classList.toggle('visible');
    }

    if (item.classList[0] === 'cancel-btn') {
        window.location.reload();
    }
    if (item.classList[0] === 'clear-btn') {
        localStorage.clear();
        window.location.reload();
    }
    console.log(item);
}
emptyDiv.onclick = toggleClearCancel;