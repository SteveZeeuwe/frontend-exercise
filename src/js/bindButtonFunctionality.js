import updateNewlyCheckedItems from './ListRenderer/updateNewlyCheckedItems.js';
import updateNewlyUncheckedItems from './ListRenderer/updateNewlyUncheckedItems.js';
import updateLocalStorage from './ListRenderer/updateLocalStorage.js';
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
};

export default bindButtonFunctionality;