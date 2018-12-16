import updateNewlyCheckedItems from './updateNewlyCheckedItems.js';
import updateNewlyUncheckedItems from './updateNewlyUncheckedItems.js';

function bindButtonFunctionality(){
    
    document.getElementById('js-Toepassen').addEventListener('click', () => {

        updateNewlyCheckedItems();
        updateNewlyUncheckedItems();
    });
};

export default bindButtonFunctionality;