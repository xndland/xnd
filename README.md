# xnd

Safely extending and complementing JavaScript built-ins since 2021.

## Getting Started

Xnd is a collection of extensions and complements to JavaScript built-ins. Extensions and complements are defined in [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) supported by modern web browsers, [Deno](https://deno.land/), [Node.js](https://nodejs.org/), etc.

### Web

todo: publish to skypack.dev

```js
import also from "https://cdn.skypack.dev/xnd@1.0.0/also.js";
```

### Deno

todo: publish to deno.land

```js
import also from "https://cdn.skypack.dev/xnd@1.0.0/also.js?dts";
```

or

```ts
import also from "https://deno.land/x/xnd@1.0.0/also.ts";
```

### Node.js

todo: publish to npm

```sh
npm i xnd
```

```js
import also from "xnd/also";
```

## API

### `add`

#### `Number.prototype[add]`

#### `BigInt.prototype[add]`

#### `Object.prototype[add]`

#### `Array.prototype[add]`

#### `Map.prototype[add]`

#### `Set.prototype[add]`

#### `WeakMap.prototype[add]`

#### `WeakSet.prototype[add]`

### `also`

#### `Object.prototype[also]`

Perform some action with a value and then continue with the same value.

```js
import also from "./also.js";

const numbers = [1, 2, 3];

numbers[also]((value) => console.log(`before push: ${value}`)).push(4);
```

### `build`

#### `Object[build]`

#### `Array[build]`

#### `Map[build]`

#### `Set[build]`

#### `WeakMap[build]`

#### `WeakSet[build]`

### `div`

#### `Number.prototype[div]`

#### `BigInt.prototype[div]`

### `map`

#### `Number.prototype[map]`

#### `BigInt.prototype[map]`

#### `Object.prototype[Object[map]]`

#### `Array.prototype[map]`

#### `Map.prototype[map]`

#### `Set.prototype[map]`

#### `WeakMap.prototype[map]`

#### `WeakSet.prototype[map]`

### `mapTo`

#### `Number.prototype[mapTo]`

#### `BigInt.prototype[mapTo]`

#### `Object.prototype[Object[mapTo]]`

#### `Array.prototype[mapTo]`

#### `Map.prototype[mapTo]`

#### `Set.prototype[mapTo]`

#### `WeakMap.prototype[mapTo]`

#### `WeakSet.prototype[mapTo]`

### `mod`

#### `Number.prototype[mod]`

#### `BigInt.prototype[mod]`

### `mul`

#### `Number.prototype[mul]`

#### `BigInt.prototype[mul]`

### `pipe`

#### `Object.prototype[pipe]`

Perform some action with a value and then continue with the return value.

```js
import pipe from "./pipe.js";

const numbers = [1, 2, 3];

const firstNumberDoubledAsExponential = numbers[0]
  [pipe]((value) => value * 2)
  .toExponential();
```

### `pow`

#### `Number.prototype[pow]`

#### `BigInt.prototype[pow]`

### `rem`

#### `Number.prototype[rem]`

#### `BigInt.prototype[rem]`

### `sub`

#### `Number.prototype[sub]`

#### `BigInt.prototype[sub]`

### `takeIf`

#### `Object.prototype[takeIf]`

Check a value against a predicate and then continue with the same value if truthy or with `undefined` if falsy.

```js
const string = "Hello";

string[takeIf]((value) => value.length)?.toUpperCase();
```

### `takeUnless`

#### `Object.prototype[takeUnless]`

Check a value against a predicate and then continue with the same value if falsy or with `undefined` if truthy.

```js
const string = "Hello";

string[takeUnless]((value) => value.includes("X"))?.toUpperCase();
```

### `then`

#### `Promise.prototype[then]`
