import {listToegepastEl, listAll} from '../../data/elementReferences.js';

/**
 * Grab all checked items from the 'all' list and handle them.
 */
function updateNewlyCheckedItems(){
    const checkedItems = listAll.querySelectorAll('input[type=checkbox]:checked');

    checkedItems.forEach(item => {
        
        const listItem = item.parentElement.parentElement;
        
        addCheckedItemsToToegepastArray(listItem);
        hideListitem(listItem);
        uncheckListItem(listItem);
    }); 
};

/**
 * Add the list item to the 'toegepast' list.
 * 
 * @param {element} item 
 */
function addCheckedItemsToToegepastArray(item){

    const clone = item.cloneNode(true);
    listToegepastEl.appendChild(clone);
};

/**
 * Hide the list item in the 'all' list.
 * 
 * @param {element} listItem 
 */
function hideListitem(listItem){

    listItem.classList.add('Hidden');
};

/**
 * Untick the checkbox so we don't keep handling it.
 * 
 * @param {element} listItem 
 */
function uncheckListItem(listItem){

    listItem.querySelector('input').checked = false;
};

export default updateNewlyCheckedItems;