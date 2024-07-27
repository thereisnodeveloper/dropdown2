/*  take array of items and convert them to a dropdown menu, returns a div
containing all the items  */

const testElem = document.createElement("div");

/**
 * Converts an array of items into a dropdown menu.
 * @param {Array} array - The array of items to be converted.
 * @returns {HTMLDivElement} - The div containing all the items as a dropdown menu.
 */
function arrayToDropdown(array) {
  array.forEach((elem) => {
    elem.classList.add("dropdown-item");
  });
  return array;
}

//  adds CSS style for 'dropdown-item' class
function addDropdownStyle() {
  // Your CSS as text
  const styles = `
  .drop-down{
    background-color: red;}

  .drop-down.hidden{
    display: none;}

  .drop-down.shown{
    display: block;}`;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
} 

//  take a button and adds "dropdown" event listener to the button, returns it

function addDropdownClickEvent() {}

function hideDropdown(array) {}
function showDropdown(array) {}

export default arrayToDropdown;
