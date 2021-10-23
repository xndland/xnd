# `$let`

Call some function on a value as its argument and then continue with the return value.

Useful for transforming some value—especially in conjunction with [optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).

## With Xnd

```js
const displayPrice = cost?.[$let](formatPrice);
```

## Without Xnd

```js
const displayPrice = cost === undefined ? undefined : formatPrice(cost);
```
