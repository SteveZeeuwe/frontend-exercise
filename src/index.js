import './css/general.scss';
import renderList from './js/ListRenderer/createList';
import bindButtonFunctionality from './js/bindButtonFunctionality';
import bindTextInputFunctionality from './js/bindTextInputFunctionality';
import useLocalStorage from './js/ListRenderer/useLocalStorage';

renderList();
bindButtonFunctionality();
bindTextInputFunctionality();
useLocalStorage();