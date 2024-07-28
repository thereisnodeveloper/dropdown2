const testElem = document.createElement('div');

class dropDown {
  constructor(dropDownArray, dropDownButton) {
    this.addDropdownStyle();
    this.dropDownArray = dropDownArray;
  }
  dropDownButton = 'reference to element'

  //  adds CSS style for 'dropdown-item' class
  addDropdownStyle() {
    // Your CSS as text
    const styles = `
  .drop-down{
    background-color: red;
    display: none;
    }

  .drop-down.shown{
    display: block;}`;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }

  /**
   * Converts an array of items into a dropdown menu.
   * @param {Array} array - The array of items to be converted.
   * @returns {HTMLDivElement} - The div containing all the items as a dropdown menu.
   */
  arrayToDropdown(array) {
    array.forEach((elem) => {
      elem.classList.add('dropdown-item');
    });
    return array;
  }

  toggleDropdown(array) {
    array.forEach((elem) => {
      elem.classList.toggle('shown');
    });
  }

  //  take a button and adds "dropdown" event listener to the button, returns it
  addDropdownClickEvent(button) {
    button.addEventListener('click', this.toggleDropdown);
    return button;
  }
}

export default dropDown;
