# Usage

Xnd is a collection of extensions and complements to JavaScript built-ins. Extensions and complements are defined in [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) meaning that you can use them in modern web browsers, [Deno](https://deno.land/), [Node.js](https://nodejs.org/), etc.

## Web

```js
import $also from "https://cdn.skypack.dev/xnd/$also.js";
```

## Deno

```js
import $also from "https://cdn.skypack.dev/xnd/$also.js?dts";
```

## Node.js

Requires Node 12 or later.

```sh
npm i xnd
```

```js
import $also from "xnd/$also";
```

### TypeScript

Requires TypeScript 4.5 or later with `compilerOptions.module` of `node12` or `nodenext` (see [ECMAScript Module Support in Node.js](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#esm-nodejs)).
