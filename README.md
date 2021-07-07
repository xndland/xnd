# xnd

Safely extending and complementing JavaScript built-ins since 2021.

## Getting Started

Xnd is a collection of extensions and complements to JavaScript built-ins. To load an extension or complement you import ES Modules (in the browser/deno/node/etc.).

## API

### `Object.prototype[also]`

Perform some action with a value and then continue with the same value.

```js
import also from "./also.js";

const numbers = [1, 2, 3];

numbers[also]((value) => console.log(`before push: ${value}`)).push(4);
```

### `Object.prototype[pipe]`

Perform some action with a value and then continue with the return value.

```js
import pipe from "./pipe.js";

const numbers = [1, 2, 3];

const firstNumberDoubledAsExponential = numbers[0]
  [pipe]((value) => value * 2)
  .toExponential();
```

### `Object.prototype[takeIf]`

Check a value against a predicate and then continue with the same value if truthy or with `undefined` if falsy.

```js
const string = "Hello";

string[takeIf]((value) => value.length)?.toUpperCase();
```

### `Object.prototype[takeUnless]`

Check a value against a predicate and then continue with the same value if falsy or with `undefined` if truthy.

```js
const string = "Hello";

string[takeUnless]((value) => value.includes("X"))?.toUpperCase();
```
