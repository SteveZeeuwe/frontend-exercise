import {listAllItems} from './elementReferences.js';

function bindTextInputFunctionality(){

    const textInputEl = document.getElementById('js-textInput');

    textInputEl.addEventListener('input', onInputChange);
};

function onInputChange(event){

    for (let item of listAllItems) {
        if(!item.innerText.toLowerCase().includes(event.target.value.toLowerCase())){
            item.classList.add('HiddenByInput');
        }else{
            item.classList.remove('HiddenByInput');
        }
    };
};

export default bindTextInputFunctionality;