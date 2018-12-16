import updateNewlyCheckedItems from './updateNewlyCheckedItems.js';
import updateNewlyUncheckedItems from './updateNewlyUncheckedItems.js';

/**
 * Execute all operations for both check->uncheck and uncheck->check actions.
 */
function bindButtonFunctionality(){
    
    document.getElementById('js-Toepassen').addEventListener('click', () => {

        updateNewlyCheckedItems();
        updateNewlyUncheckedItems();
    });
};

export default bindButtonFunctionality;