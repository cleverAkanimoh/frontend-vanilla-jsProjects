const createEl_btn = document.querySelector('.add');
const table = document.querySelector('.data-table');
const tableDataContainer = document.querySelector('.table-data-container');
const cName = document.querySelector('#customerName');
const cPhone = document.querySelector('#customerPhone');
const cAccount = document.querySelector('#customerAccount');
const form = document.forms;
const searchInputs = document.querySelectorAll('#search-input');
const filterOption = document.querySelector('.filter-entry');
const hammDiv = document.querySelector('.hamm-div');
const mainSideBar = document.querySelector('.fullwidth');
const checkk = document.querySelector('#checkk');
const navLogo = document.querySelector('.logo');
const navSearch = document.querySelector('.responsive');

let count = 1;

// hamm

const hammClick = () => {
    if (checkk.checked) {
        mainSideBar.className = 'main-display';
        navLogo.style.display = 'none';
        navSearch.style.display = 'none';

    } else {
        mainSideBar.className = 'fullwidth';
        navLogo.style.display = 'inline';
        navSearch.style.cssText = 'display:inline; margin-top: 14px;';
    }
};
hammDiv.onclick = hammClick;
window.addEventListener('DOMContentLoaded', hammClick);

// form

for (let i = 0; i < form.length; i++) {
    form[i].addEventListener('submit', (e) => {
        e.preventDefault();
    }, false);
}

// creating new elements

form[1].onsubmit = () => {

    let value = cName.value.toUpperCase();
    let phone = cPhone.value;
    let account = cAccount.value;
    let id = Date().slice(0, 24);
    let dateCreated = Date().slice(0, 24);

    if (value === '') {
        alert('Text input must be entered...');
        cName.select();
        cName.focus();
    } else if (phone === '') {
        alert('Text input must be entered...');
        cPhone.select();
        cPhone.focus();
    } else if (isNaN(phone)) {
        alert('Phone Number input should contain only numbers!');
        cPhone.select();
        cPhone.focus();
    } else if (phone.length < 11) {
        alert('Phone Number input limit not reached!');
        cPhone.select();
        cPhone.focus();
    } else if (phone.length > 11) {
        alert('Phone Number input limit exceeded!');
        cPhone.select();
        cPhone.focus();
    } else if (account === '') {
        alert('Text input must be entered...')
        cAccount.select();
        cAccount.focus();
    } else if (account.length !== 10) {
        alert('Account Number is either incomplete or has exceeded it\'s limit!');
        cAccount.select();
        cAccount.focus();
    } else if (isNaN(account)) {
        alert('Account Number input should contain only numbers!');
        cAccount.select();
        cAccount.focus();
    } else {

        createTableData(id, value, phone, account, dateCreated);
        addToLocalStorage(id, value, phone, account, dateCreated);
        // setDefault();
    }
}

// deleting and adding filter options

table.ondblclick = (e) => {

    let target = e.target;
    let item = target.parentElement;

    id = item.dataset.id;

    if (target.classList[0] === 'del-btn') {
        item.classList.add('fall');
        setTimeout(
            () => {
                item.remove();
                // window.location.reload();
            }, 250
        );
        setDefault();
        removeFromLocalStorage(id);
    };

    if (target.classList[0] === 'check-btn') {
        item.classList.toggle('completed');
    };
};

const setDefault = () => {
    cName.value = "";
    cPhone.value = "";
    cAccount.value = "";
}


// search functionality

searchInputs.forEach((input) => {
    input.oninput = () => {
        searchFunctionality();
    }

    input.onchange = () => {
        input.value = '';
        searchFunctionality();
    }
    const searchFunctionality = () => {
        let table_container = document.querySelector('.table-data-container')
        let tableValue = document.querySelectorAll('.table-row');
        let noSearchResult = document.querySelector('.search-not-found');
        let searchQuery = input.value.toUpperCase();
        let tRLength = table_container.children.length;

        tableValue.forEach((value) => {
            if (value.textContent.includes(searchQuery)) {
                value.classList.remove('search-hidden');
                noSearchResult.style.display = 'none';
                table.classList.remove('table-hidden');
            } else {
                value.classList.add('search-hidden');
                noSearchResult.style.display = 'none';
                table.classList.remove('table-hidden');
            };
        });
        for (const iterator of object) {
            
        }
    };
});


// filter functionality

filterOption.onclick = (e) => {
    let tableRow = document.querySelectorAll('.table-row');

    tableRow.forEach((entry) => {
        switch (e.target.value) {
            case 'all':
                entry.classList.remove('table-hidden');
                break;
            case "completed":
                if (entry.classList.contains('completed')) {
                    entry.classList.remove('table-hidden');
                } else {
                    entry.classList.add('table-hidden');
                }
                break;
            case "uncompleted":
                if (!entry.classList.contains('completed')) {
                    entry.classList.remove('table-hidden');
                } else {
                    entry.classList.add('table-hidden');
                }
                break;
        }
    });
};

// local storage

const addToLocalStorage = (id, value, phone, account, dateCreated) => {
    let customer_log = { id, value, phone, account, dateCreated };
    let items = getLocalStorage();

    items.push(customer_log);
    localStorage.setItem('log', JSON.stringify(items));
};

const removeFromLocalStorage = (id) => {
    let items = getLocalStorage();
    items = items.filter(item => {
        if (item.id !== id) {
            return item;
        }
    });
    localStorage.setItem('log', JSON.stringify(items));
};

const editLocalStorage = (id, value, phone, account, dateCreated) => {
    let items = getLocalStorage();
    items = items.map(item => {
        if (item.id === id) {
            item.value = value;
            item.phone = phone;
            item.account = account;
            item.dateCreated = dateCreated;
        };
        return item;
    });
    localStorage.setItem('log', JSON.stringify(items));
};

const getLocalStorage = () => {
    return localStorage.getItem('log') ? JSON.parse(localStorage.getItem('log')) : [];
};

//* Setup Items

const setUpItems = () => {
    let items = getLocalStorage();
    if (items.length > 0) {
        items = items.forEach((item) => {
            createTableData(item.id, item.value, item.phone, item.account, item.dateCreated);
        });
    };
};
window.addEventListener('DOMContentLoaded', setUpItems);

// create elements

const createTableData = (id, value, phone, account, dateCreated) => {

    let tableRow = document.createElement('tr');
    tableRow.className = 'table-row';
    let attr = document.createAttribute('data-id');
    attr.value = id;
    tableRow.setAttributeNode(attr);
    tableDataContainer.appendChild(tableRow);

    let serialNumber = document.createElement('td');
    serialNumber.className = 'table-data serial';
    serialNumber.textContent = `#${count++}`;
    tableRow.appendChild(serialNumber);

    let tableData1 = document.createElement('td');
    tableData1.className = 'table-data';
    tableData1.textContent = value;
    tableRow.appendChild(tableData1);

    let tableData2 = document.createElement('td');
    tableData2.className = 'table-data';
    if (phone.startsWith('0')) {
        phone = phone.replace('0', '+234 ');
    }
    tableData2.textContent = phone;
    tableRow.appendChild(tableData2);

    let tableData3 = document.createElement('td');
    tableData3.className = 'table-data';
    tableData3.textContent = account;
    tableRow.appendChild(tableData3);

    let tableData4 = document.createElement('td');
    tableData4.className = 'table-data';
    // dateCreated = Date().slice(0, 24);
    tableData4.innerHTML = dateCreated;
    tableRow.appendChild(tableData4);

    // create check button

    let check = document.createElement('button');
    check.type = 'checkbox';
    check.className = 'check-btn';
    check.title = 'check item';
    check.innerHTML = '&check;';
    tableRow.appendChild(check);

    // create delete button
    let del = document.createElement('button');
    del.className = 'del-btn';
    del.title = 'remove from list';
    del.textContent = 'x';
    tableRow.appendChild(del);
}