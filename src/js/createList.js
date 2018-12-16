import Items from '../data/items.json';

function renderList(){
    
    const ulEl = document.getElementById('js-List');

    Items.data.forEach(item => {
        ulEl.appendChild(createListitem(item));
    });
};

function createListitem(item){
    const listEl = document.createElement('li');

    const labelEl = document.createElement('label');
    listEl.appendChild(labelEl);

    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    labelEl.appendChild(checkboxEl);
    labelEl.innerHTML += item;

    return listEl;
}

export default renderList;