function bindButtonFunctionality(){
    
    const buttonEl = document.getElementById('js-Toepassen');
    const listToegepastEl = document.getElementById('js-ListToegepast');

    buttonEl.addEventListener('click', () => {

        const checkedItems = document.querySelectorAll('input[type=checkbox]:checked');

        checkedItems.forEach(item => {
            listToegepastEl.appendChild(item.parentElement.parentElement);
        });
    });
};

export default bindButtonFunctionality;