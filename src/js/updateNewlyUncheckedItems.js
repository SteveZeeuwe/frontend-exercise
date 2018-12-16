import {listToegepastEl, listAll} from './elementReferences.js';

function updateNewlyUncheckedItems(){
    const unCheckedItems = listToegepastEl.querySelectorAll('input[type=checkbox]:not(:checked)');

    unCheckedItems.forEach(checkbox => {
        
        const listItem = checkbox.parentElement.parentElement;

        unHideSpecificListItem(listItem.dataset.index);
        listItem.remove();
    }); 
}

function unHideSpecificListItem(index){
    listAll.querySelector(`[data-index="${index}"]`).classList.remove('Hidden');
}

export default updateNewlyUncheckedItems;