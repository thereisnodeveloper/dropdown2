import DropDown from './dropdown';

const testArray = document.querySelectorAll('li');

const testDropDown = new DropDown(testArray, document.querySelector('button'));
console.log(testDropDown);