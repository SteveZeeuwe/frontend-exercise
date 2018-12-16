import {listAll} from './elementReferences.js';

function useLocalStorage(){
    
    const storedListSelection = JSON.parse(localStorage.getItem('storedListSelection'));

    storedListSelection.forEach(element => {
        listAll.querySelector(`[data-index="${element}"] input`).checked = true;
    });

    document.getElementById('js-Toepassen').click();
}

export default useLocalStorage;