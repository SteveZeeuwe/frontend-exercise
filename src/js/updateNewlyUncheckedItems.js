import {listToegepastEl, listAll} from './elementReferences.js';

function updateNewlyUncheckedItems(){
    const unCheckedItems = listToegepastEl.querySelectorAll('input[type=checkbox]:not(:checked)');

    unCheckedItems.forEach(checkbox => {
        
        const listItem = checkbox.parentElement.parentElement;

        unhideListItem(listItem.dataset.index);
        removeListItem(listItem);
    }); 
}

function unhideListItem(index){
    listAll.querySelector(`[data-index="${index}"]`).classList.remove('Hidden');
}

function removeListItem(listItem){
    listItem.remove();
}

export default updateNewlyUncheckedItems;