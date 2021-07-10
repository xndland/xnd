export default function also<T, R>(this: T, fn: (this: T) => R): R {
  return fn.apply(this);
}
