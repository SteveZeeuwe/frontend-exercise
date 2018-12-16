import Items from '../data/items.json';

function renderList(){
    
    const ulEl = document.getElementById('List');

    Items.data.forEach(item => {
        ulEl.appendChild(createListitem(item));
    });
};

function createListitem(item){
    const listItem = document.createElement('li');
    listItem.innerHTML = item;

    return listItem;
}

export default renderList;