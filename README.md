# xnd

Safely extending and complementing JavaScript built-ins since 2021.

---

🚧 Not yet published 🚧

- [ ] Add `TypedArray` extension methods
- [ ] Add `filter`, `reduce`, and other built-in equivalents for `Map`, `Set`, `Iterator`, etc. (defer adding things like `sumBy`, `groupBy`, etc. until after initial release)
- [ ] Update docs for JS/TS
- [ ] Publish to npm (via GitHub packages?)
- [ ] Publish to deno.land
- [ ] Publish to a CDN (or will skypack.dev already work once published to npm?)

---

## Getting Started

Xnd is a collection of extensions and complements to JavaScript built-ins. Extensions and complements are defined in [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) supported by modern web browsers, [Deno](https://deno.land/), [Node.js](https://nodejs.org/), etc.

### Web

```js
import also from "https://cdn.skypack.dev/xnd@1.0.0/also.js";
```

### Deno

```js
import also from "https://cdn.skypack.dev/xnd@1.0.0/also.js?dts";
```

or

```ts
import also from "https://deno.land/x/xnd@1.0.0/also.ts";
```

### Node.js

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

Importing from `"./build.ts"` loads all of the following extensions. Alternatively you can load individuals extensions by importing from `"./{{Type}}/build.ts"` (e.g. `"./String/build.ts"`). You can also use functions without the extensions by importing from `"./{{Type}}/functions/build.ts"` (e.g. `"./String/functions/build.ts"`).

#### `String[build]`

```ts
import build from "./build.ts";

function greeting(name?: string) {
  return String[build](function* () {
    yield "Hello";
    if (name) {
      yield " ";
      yield name;
    }
    yield "!";
  });
}
```

or

```ts
import buildString from "./String/functions/build.ts";

function greeting(name?: string) {
  return buildString(function* () {
    yield "Hello";
    if (name) {
      yield " ";
      yield name;
    }
    yield "!";
  });
}
```

### `apply`

#### `Object.prototype[apply]`

#### `Object[build]`

#### `Array[build]`

#### `Map[build]`

#### `Set[build]`

#### `WeakMap[build]`

#### `WeakSet[build]`

### `div`

#### `Number.prototype[div]`

#### `BigInt.prototype[div]`

### `get`

#### `String.prototype[get]`

#### `Object.prototype[get]`

#### `Array.prototype[get]`

#### `TypedArray.prototype[get]`

#### `Map.prototype[get]`

#### `WeakMap.prototype[get]`

### `getOrSet`

#### `Object.prototype[getOrSet]`

#### `Array.prototype[getOrSet]`

#### `Map.prototype[getOrSet]`

#### `WeakMap.prototype[getOrSet]`

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

### `run`

#### `Object.prototype[run]`

### `set`

#### `Object.prototype[set]`

#### `Array.prototype[set]`

#### `TypedArray.prototype[set]`

#### `Map.prototype[set]`

#### `WeakMap.prototype[set]`

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
