import updateNewlyCheckedItems from './updateNewlyCheckedItems.js';
import updateNewlyUncheckedItems from './updateNewlyUncheckedItems.js';
import updateLocalStorage from './updateLocalStorage.js';
import scrollListToTop from './scrollListToTop.js';

/**
 * Execute all operations for both check->uncheck and uncheck->check actions.
 */
function bindButtonFunctionality(){
    
    document.getElementById('js-Toepassen').addEventListener('click', () => {

        updateNewlyCheckedItems();
        updateNewlyUncheckedItems();
        scrollListToTop();
        updateLocalStorage();
    });

    console.log(localStorage.getItem("storedListSelection"));
};

export default bindButtonFunctionality;