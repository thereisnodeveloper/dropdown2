// const testElem = document.createElement(div);

/**
 * takes in a) reference to a button and b) array of items
 */
class DropDown {
  #dropDownArray;

  #dropDownButtonRef;

  constructor(dropDownArray, dropDownButtonRef) {
    this.addDropdownStyle();
    // this.dropDownArray = dropDownArray;
    this.#dropDownArray = dropDownArray;
    // this.dropDownButtonRef = dropDownButtonRef;
    this.#dropDownButtonRef = dropDownButtonRef;
    this.arrayToDropDown(this.#dropDownArray);
    this.addDropdownClickEvent(dropDownButtonRef);
  }

  get dropDownArray() {
    return this.#dropDownArray;
  }

  set dropDownArray(array) {
    this.#dropDownArray = array;
  }

  get dropDownButtonRef() {
    return this.#dropDownButtonRef;
  }

  set dropDownButtonRef(buttonRef) {
    this.#dropDownButtonRef = buttonRef;
  }

  //  adds CSS style for 'dropdown-item' class
  addDropdownStyle() {
    const styles = `
  .dropdown-item{
    background-color: red;
    display: none;
    }

  .dropdown-item.shown{
    background-color: green;
    display: block;
    }`;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }

  /**
   * Converts an array of items into a dropdown menu.
   * @param {Array} array - The array of items to be converted.
   * @returns {HTMLDivElement} - The div containing all the items as a dropdown menu.
   */
  arrayToDropDown() {
    this.#dropDownArray.forEach((item) => {
      // array.forEach((item) => {
      item.classList.add('dropdown-item');
    });
    // return array;
  }

  toggleDropDown() {
    this.#dropDownArray.forEach((elem) => {
      // array.forEach((elem) => {
      elem.classList.toggle('shown');
    });
  }

  //  take a button and adds "dropdown" event listener to the button, returns it
  addDropdownClickEvent(button) {
    const boundToggleDropDown = this.toggleDropDown.bind(this);
    button.addEventListener('click', boundToggleDropDown);
    return button;
  }
}

export default DropDown;
