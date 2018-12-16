import {listAllItems} from './elementReferences.js';

/**
 * Listen to input changes.
 */
function bindTextInputFunctionality(){

    const textInputEl = document.getElementById('js-textInput');

    textInputEl.addEventListener('input', onInputChange);
};

/**
 * Loop over all items of the 'all' list and hide if the 
 * item doesn't match with the user's input.
 * 
 * @param {Event} event 
 */
function onInputChange(event){

    for (let item of listAllItems) {
        if(item.innerText.toLowerCase().includes(event.target.value.toLowerCase())){
            item.classList.remove('HiddenByInput');
        }else{
            item.classList.add('HiddenByInput');
        }
    };
};

export default bindTextInputFunctionality;