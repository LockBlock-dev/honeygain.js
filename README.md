# HoneyGain.js

[![axios](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/honeygain.js/axios)](https://www.npmjs.com/package/axios)

[![GitHub stars](https://img.shields.io/github/stars/LockBlock-dev/honeygain.js.svg)](https://github.com/LockBlock-dev/honeygain.js/stargazers) ![npm](https://img.shields.io/npm/dm/honeygain.js)

honeygain.js is a Node.js module that allows you to easily interact with the EarnApp API.

-   Promise-based
-   Performant
-   100% coverage of the HoneyGain API

## Installation

-   Install [NodeJS](https://nodejs.org).

### With GitHub:

-   Download or clone the project.
-   Go to the `honeygain.js` folder and run `npm install`.
-   Require [`client.js`](/src/client.js).

### With npm:

-   Run `npm install honeygain.js`.
-   Require the library.

## Documentation

-   [API documentation](/API.md)
-   [Changelog](/CHANGELOG.md)
-   [How to login with Authorization token](/Authorization.md)

## Example usage

The library can be used in both CommonJS and ES Modules

### Using the library

The library is async, be sure to use [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#syntax) or [`.then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#syntax)

```js
const { Client } = require("honeygain.js");
//OR
import { Client } from "honeygain.js";

const client = new Client();

client.login("eyJ0eXAi...xaL5x4");

client.stats().then((data) => {
    console.log(data);
});
//OR
const getStats = async () => {
    const data = await client.stats();
    console.log(data);
};

getStats();
```

## Credits

[HoneyGain](https://honeygain.com)

## Copyright

See the [license](/LICENSE)
