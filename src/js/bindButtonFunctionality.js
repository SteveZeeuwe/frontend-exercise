function bindButtonFunctionality(){
    
    const buttonEl = document.getElementById('js-Toepassen');
    const listAll = document.getElementById('js-ListAll');
    const listToegepastEl = document.getElementById('js-ListToegepast');

    buttonEl.addEventListener('click', () => {

        const checkedItems = listAll.querySelectorAll('input[type=checkbox]:checked');

        checkedItems.forEach(item => {
            
            const clone = item.parentElement.parentElement.cloneNode(true);
            listToegepastEl.appendChild(clone);

            item.parentElement.parentElement.classList.add('Hidden');
        });
    });
};

export default bindButtonFunctionality;