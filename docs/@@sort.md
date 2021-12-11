# `@@sort`

## With Xnd

```js
dates[sort]();
```

you can also use the richer [compare function builders](comparisons/README.md) to more easily build compare functions

## Without Xnd



```js
dates.sort(); // coerces Dates to strings using `Date.prototype.toString`  😬
```
