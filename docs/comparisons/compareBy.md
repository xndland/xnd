# `compareBy`

Returns a [`CompareFunction`](../CompareFunction.md) using the specified selectors. Each selector is called in order until the selected values differ in order in which case the comparison of those values is returned.

## With Xnd

```js
console.log(persons[sortedWith](compareBy("name", "age")));
```

or

```js
console.log(
  persons[sortedWith](
    compareBy(
      (person) => person.name,
      (person) => person.age
    )
  )
);
```

## Without Xnd

```js
console.log(
  persons
    .slice()
    .sort((a, b) =>
      a.name === b.name ? a.age - b.age : a.name < b.name ? -1 : +1
    )
);
```
