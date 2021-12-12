# xnd

Safely extending and complementing JavaScript built-ins since 2021.

See the [documentation](https://doc.deno.land/https://deno.land/x/xnd/_index.ts) to discover all that Xnd has to offer. Xnd is inspired by prior art such as the [Kotlin Standard Library](https://kotlinlang.org/api/latest/jvm/stdlib/#kotlin-standard-library), [Google Guava](https://guava.dev/), and many others.

## Usage

Xnd is a collection of extensions and complements to JavaScript built-ins. Extensions and complements are defined in [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) meaning that you can use them in [Deno](https://deno.land/), [Node.js](https://nodejs.org/), and on the web.

### Deno

```ts
import also from "https://deno.land/x/xnd/also.ts";
```

### Node.js

```sh
npm i xnd
```

```js
import also from "xnd/also";
```

### Web

```js
import also from "https://cdn.skypack.dev/xnd/also.js";
```
