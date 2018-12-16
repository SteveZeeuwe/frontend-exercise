function bindButtonFunctionality(){
    
    const buttonEl = document.getElementById('js-Toepassen');
    
    buttonEl.addEventListener('click', () => {

        updateNewlyCheckedItems();
        updateNewlyUncheckedItems();           
    });
};

function updateNewlyUncheckedItems(){
    const listToegepastEl = document.getElementById('js-ListToegepast');
    const unCheckedItems = listToegepastEl.querySelectorAll('input[type=checkbox]:not(:checked)');

    unCheckedItems.forEach(item => {
        
        const listItem = item.parentElement.parentElement;

        unHideSpecificListItem(listItem.dataset.index);
        listItem.remove();
    }); 
}

function unHideSpecificListItem(index){
    const listAll = document.getElementById('js-ListAll');
    listAll.querySelector(`[data-index="${index}"]`).classList.remove('Hidden');
}

function updateNewlyCheckedItems(){
    const listAll = document.getElementById('js-ListAll');
    const checkedItems = listAll.querySelectorAll('input[type=checkbox]:checked');

    checkedItems.forEach(item => {
        
        const listItem = item.parentElement.parentElement;
        
        addCheckedItemsToToegepastArray(listItem);
        hideCheckedItems(listItem);
        uncheckCheckedItems(listItem);
    }); 
}

function hideCheckedItems(listItem){

    listItem.classList.add('Hidden');
};

function uncheckCheckedItems(listItem){

    listItem.querySelector('input').checked = false;
};

function addCheckedItemsToToegepastArray(item){
    
    const listToegepastEl = document.getElementById('js-ListToegepast');

    const clone = item.cloneNode(true);
    listToegepastEl.appendChild(clone);
}

export default bindButtonFunctionality;