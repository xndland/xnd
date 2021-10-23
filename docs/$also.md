# `$also`

Call some function on a value as its argument and then continue with the same value.

Useful for side operations (e.g. inserting logging statements within a chain of operations).

## With Xnd

```js
function getId() {
  return crypto.randomUUID()[$also]((id) => console.debug("generated id:", id));
}
```

## Without Xnd

```js
function getId() {
  const id = crypto.randomUUID();
  console.debug("generated id:", id);
  return id;
}
```
