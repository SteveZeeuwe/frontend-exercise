import {listAll} from '../../data/elementReferences.js';

function useLocalStorage(){
    
    let storedListSelection = localStorage.getItem('storedListSelection')

    if (storedListSelection === null) return;

    storedListSelection = JSON.parse(storedListSelection);

    storedListSelection.forEach(element => {
        listAll.querySelector(`[data-index="${element}"] input`).checked = true;
    });

    document.getElementById('js-Toepassen').click();
}

export default useLocalStorage;