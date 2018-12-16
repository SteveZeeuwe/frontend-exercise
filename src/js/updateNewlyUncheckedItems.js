import {listToegepastEl, listAll} from './elementReferences.js';

/**
 * Grab all unchecked items from the toegepast list and handle them.
 */
function updateNewlyUncheckedItems(){
    const unCheckedItems = listToegepastEl.querySelectorAll('input[type=checkbox]:not(:checked)');

    unCheckedItems.forEach(checkbox => {
        
        const listItem = checkbox.parentElement.parentElement;

        unhideListItem(listItem.dataset.index);
        removeListItem(listItem);
    }); 
};

/**
 * Find the matching list item in the 'all' list and unhide it.
 * 
 * @param {number} index 
 */
function unhideListItem(index){
    listAll.querySelector(`[data-index="${index}"]`).classList.remove('Hidden');
};

/**
 * Deleting is simpler than hiding/unhiding since order doesn't matter.
 * 
 * @param {element} listItem 
 */
function removeListItem(listItem){
    listItem.remove();
};

export default updateNewlyUncheckedItems;