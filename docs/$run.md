# `$run`

Call some function on a value as `this` and then continue with the return value.

Useful for complex object initializations. e.g. Take an object and return limited query/mutation methods that act on it without exposing access to the object itself.

## With Xnd

```js
const [data, { setName, incAge, setTheme }] = useState({
  name: "",
  age: 0,
  preferences: { theme: "light" },
})[$run](function () {
  const [data, setData] = this;
  const setName = useCallback((name) => setData({ ...data, name }));
  const incAge = useCallback(() => setData({ ...data, age: data.age + 1 }));
  const setPreference = useCallback((key, value) =>
    setData({ ...data, preferences: { ...data.preferences, [key]: value } })
  );
  const setTheme = useCallback((theme) => setPreference("theme", theme));
  return [data, { setName, incAge, setTheme }];
});

// now later code cannot call `setData` or `setPreference` directly :)
```

## Without Xnd

```js
const [data, setData] = useState({
  name: "",
  age: 0,
  preferences: { theme: "light" },
});
const setName = useCallback((name) => setData({ ...data, name }));
const incAge = useCallback(() => setData({ ...data, age: data.age + 1 }));
const setPreference = useCallback((key, value) =>
  setData({ ...data, preferences: { ...data.preferences, [key]: value } })
);
const setTheme = useCallback((theme) => setPreference("theme", theme));

// but now later code can call `setData` or `setPreference` directly :(
```
