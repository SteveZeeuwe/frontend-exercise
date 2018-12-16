import Items from '../data/items.json';

function renderList(){
    
    const ulEl = document.getElementById('js-ListAll');

    Items.data.forEach((item, index) => {
        ulEl.appendChild(createListitem(item, index));
    });
};

function createListitem(item, index){
    const listEl = document.createElement('li');
    listEl.dataset.index = index;

    const labelEl = document.createElement('label');
    listEl.appendChild(labelEl);

    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    labelEl.appendChild(checkboxEl);
    labelEl.innerHTML += item;

    return listEl;
}

export default renderList;