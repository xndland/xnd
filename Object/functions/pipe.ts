export default function pipe<T, R>(this: T, fn: (value: T) => R): R {
  return fn(this);
}
