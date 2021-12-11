# `@@compareTo`

Compare values for ordering. Returns a negative value for lesser values, positive value for greater values, and zero for equal values. Support for `String`, `Number`, `BigInt`, `Boolean`, and `Date` is built in but any class can implement `Comparable` to define its owner natural order.

## With Xnd

`compareTo` is what powers natural and reversed sorting through `@@sort` and similar methods:

```js
bigints[sort]();
```

alternatively you can use `compareTo` directly to create your own compare functions:

```js
bigints.sort((a, b) => a[compareTo](b));
```

you can also use the richer [compare function builders](comparisons/README.md) to more easily build compare functions

## Without Xnd

```js
bigints.sort((a, b) => (a === b ? 0 : a < b ? -1 : +1));
```
