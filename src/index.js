import Dropdown from './dropdown';

const testArray = document.querySelectorAll('li');

const testDropDown = new Dropdown(testArray, document.querySelector('button'));
console.log(testDropDown);