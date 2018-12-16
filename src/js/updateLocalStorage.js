import {listToegepastEl} from './elementReferences.js';

function updateLocalStorage(){
    
    let checkedItems = listToegepastEl.querySelectorAll('input[type=checkbox]:checked');
    checkedItems = Array.from(checkedItems);

    let checkedIDs = checkedItems.map(item => {
        return item.parentElement.parentElement.dataset.index;
    });

    checkedIDs = JSON.stringify(checkedIDs);
    localStorage.setItem("storedListSelection", checkedIDs);
};

export default updateLocalStorage;