```markdown
# Dropdownize

Dropdownize is a JavaScript library that converts an array of elements into a dropdown menu, linked to a button. It provides a simple way to create dynamic dropdown menus with customizable styles.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the project dependencies, run:

```sh
npm install
```

## Usage

To use Dropdownize in your project, follow these steps:

1. Include the necessary HTML structure in your [`index.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Famdev%2Frepos%2Fdropdown2%2Fsrc%2Findex.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/amdev/repos/dropdown2/src/index.html") file:

    ```html
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <button>Dropdown</button>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </body>
    </html>
    ```

2. Import and initialize the `DropDown` class in your `src/index.js` file:

    ```js
    import DropDown from './dropdown';

    const testArray = document.querySelectorAll('li');
    const testDropDown = new DropDown(testArray, document.querySelector('button'));
    ```

3. Run the development server to see the dropdown in action:

    ```sh
    npm start
    ```

## Development

To build the project, run:

```sh
npm run build
```

To watch for changes and rebuild automatically, run:

```sh
npm run watch
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the ISC License.
```

This README provides an overview of the project, instructions for installation and usage, and information on development and contributing.