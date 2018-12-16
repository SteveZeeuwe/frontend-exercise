import {listToegepastEl, listAll} from './elementReferences.js';

function updateNewlyCheckedItems(){
    const checkedItems = listAll.querySelectorAll('input[type=checkbox]:checked');

    checkedItems.forEach(item => {
        
        const listItem = item.parentElement.parentElement;
        
        addCheckedItemsToToegepastArray(listItem);
        hideListitem(listItem);
        uncheckListItem(listItem);
    }); 
};

function addCheckedItemsToToegepastArray(item){

    const clone = item.cloneNode(true);
    listToegepastEl.appendChild(clone);
};

function hideListitem(listItem){

    listItem.classList.add('Hidden');
};

function uncheckListItem(listItem){

    listItem.querySelector('input').checked = false;
};

export default updateNewlyCheckedItems;