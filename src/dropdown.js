// const testElem = document.createElement(div);

/**
 * Class representing a dropdown menu.
 */
class DropDown {
  /**
   * @type {Array<HTMLElement>}
   * @private
   */
  #dropDownArray;

  /**
   * @type {HTMLElement}
   * @private
   */
  #dropDownButtonRef;

  /**
   * Creates an instance of DropDown.
   // eslint-disable-next-line max-len
   * @param {Array<HTMLElement>} dropDownArray - The array of items to be converted into a dropdown menu.
   * @param {HTMLElement} dropDownButtonRef - The reference to the button that toggles the dropdown.
   */
  constructor(dropDownArray, dropDownButtonRef) {
    this.#addDropdownStyle();
    this.#dropDownArray = dropDownArray;
    this.#dropDownButtonRef = dropDownButtonRef;
    this.#arrayToDropDown(this.#dropDownArray);
    this.#addDropdownClickEvent(dropDownButtonRef);
  }

  /**
   * Gets the dropdown array.
   * @returns {Array<HTMLElement>} The array of dropdown items.
   */
  get dropDownArray() {
    return this.#dropDownArray;
  }

  /**
   * Sets the dropdown array.
   * @param {Array<HTMLElement>} array - The new array of dropdown items.
   */
  set dropDownArray(array) {
    this.#dropDownArray = array;
  }

  /**
   * Gets the dropdown button reference.
   * @returns {HTMLElement} The reference to the dropdown button.
   */
  get dropDownButtonRef() {
    return this.#dropDownButtonRef;
  }

  /**
   * Sets the dropdown button reference.
   * @param {HTMLElement} buttonRef - The new reference to the dropdown button.
   */
  set dropDownButtonRef(buttonRef) {
    this.#dropDownButtonRef = buttonRef;
  }

  /**
   * Adds CSS styles for the 'dropdown-item' class.
   */
  #addDropdownStyle() {
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
   * @param {Array<HTMLElement>} array - The array of items to be converted.
   */
  #arrayToDropDown() {
    this.#dropDownArray.forEach((item) => {
      item.classList.add('dropdown-item');
    });
  }

  /**
   * Toggles the visibility of the dropdown items.
   */
  toggleDropDown() {
    this.#dropDownArray.forEach((elem) => {
      elem.classList.toggle('shown');
    });
  }

  /**
   * Adds a "dropdown" event listener to the button.
   * @param {HTMLElement} button - The button to which the event listener is added.
   * @returns {HTMLElement} The button with the event listener.
   */
  #addDropdownClickEvent(button) {
    const boundToggleDropDown = this.toggleDropDown.bind(this);
    button.addEventListener('click', boundToggleDropDown);
    return button;
  }
}

export default DropDown;
